import json
import re
import base64
import gc
from firebase_functions import https_fn

ACTION_VERBS = ['led', 'managed', 'developed', 'created', 'designed', 'implemented', 'optimized', 'reduced', 'coordinated', 'spearheaded', 'executed', 'analyzed']

def resume_handler(req: https_fn.Request) -> https_fn.Response:
    # ১. শক্তিশালী CORS হেডার্স
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '3600',
        'Content-Type': 'application/json'
    }
    
    # ২. OPTIONS রিকোয়েস্ট হ্যান্ডলিং (Preflight)
    if req.method == 'OPTIONS': 
        return https_fn.Response('', status=204, headers=headers)

    try:
        body = req.get_json(force=True, silent=True)
        if not body or 'resume_pdf' not in body:
            return https_fn.Response(json.dumps({"success": False, "error": "Missing PDF data"}), status=400, headers=headers)

        pdf_data = body.get('resume_pdf')
        jd_text = body.get('job_description', "").strip()

        if "," in pdf_data: 
            pdf_data = pdf_data.split(",")[1]

        # ৩. ইন্টারনাল ইমপোর্ট চেক (এখানেই এরর হওয়ার সম্ভাবনা বেশি)
        try:
            import fitz  # PyMuPDF
            from sklearn.feature_extraction.text import TfidfVectorizer
            from sklearn.metrics.pairwise import cosine_similarity
        except ImportError as ie:
            print(f"IMPORT ERROR: {str(ie)}")
            return https_fn.Response(json.dumps({"success": False, "error": f"Server missing libraries: {str(ie)}"}), status=500, headers=headers)

        # ৪. প্রসেসিং লজিক
        pdf_bytes = base64.b64decode(pdf_data)
        with fitz.open(stream=pdf_bytes, filetype="pdf") as doc:
            full_text = " ".join([page.get_text() for page in doc]).lower()
            word_count = len(full_text.split())

        if word_count < 5:
            return https_fn.Response(json.dumps({"success": False, "error": "Low text quality in PDF"}), status=400, headers=headers)

        # অ্যানালাইসিস
        email = bool(re.search(r'[\w\.-]+@[\w\.-]+', full_text))
        phone = bool(re.search(r'\+?\d{10,14}', full_text))
        address = bool(re.search(r'address|street|city|country|location', full_text))
        links = bool(re.search(r'linkedin|github|portfolio|http', full_text))
        has_metrics = bool(re.search(r'\d+%|\$\d+|improved|increased', full_text))
        action_verbs_count = len([v for v in ACTION_VERBS if v in full_text])

        # স্কোরিং
        health_score = 30
        if email and phone: health_score += 20
        if has_metrics: health_score += 20
        if action_verbs_count > 2: health_score += 20
        if word_count > 400: health_score += 10

        match_score = 0
        missing_keywords = []

        if jd_text:
            vectorizer = TfidfVectorizer().fit_transform([full_text, jd_text.lower()])
            vectors = vectorizer.toarray()
            match_score = int(cosine_similarity(vectors)[0][1] * 100)
            jd_keywords = set(re.findall(r'\b\w{4,}\b', jd_text.lower()))
            missing_keywords = [w for w in jd_keywords if w not in full_text and len(w) > 4]

        # ৫. ফাইনাল রেসপন্স
        response_data = {
            "success": True, 
            "health_score": min(health_score, 100), 
            "match_score": match_score,
            "word_count": word_count, 
            "contact_info": {
                "email_found": email, "phone_found": phone, "address_found": address, "links_found": links
            },
            "analysis": {
                "has_metrics": has_metrics, "action_verbs_count": action_verbs_count,
                "industry": "Professional Profile", "missing_keywords": missing_keywords[:12]
            }
        }

        gc.collect()
        return https_fn.Response(json.dumps(response_data), status=200, headers=headers)

    except Exception as e:
        print(f"CRITICAL ERROR: {str(e)}")
        # এরর হলেও হেডার পাঠাতে হবে, নাহলে CORS Error দেখাবে
        return https_fn.Response(json.dumps({"success": False, "error": str(e)}), status=500, headers=headers)