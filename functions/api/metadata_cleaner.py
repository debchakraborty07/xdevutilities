# functions/api/metadata_cleaner.py

import io
import base64
import json
import gc
from firebase_functions import https_fn

def handle_metadata_request(req: https_fn.Request) -> https_fn.Response:
    # ১. স্ট্যান্ডার্ড এন্টারপ্রাইজ হেডার্স
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json'
    }

    if req.method == 'OPTIONS':
        return https_fn.Response('', status=204, headers=headers)

    try:
        # ২. শক্তিশালী বডি পার্সিং
        body = req.get_json(force=True, silent=True)
        if not body or 'pdf' not in body:
            return https_fn.Response(json.dumps({"success": False, "error": "No PDF data provided"}), status=400, headers=headers)

        pdf_data = body.get('pdf')

        if "," in pdf_data:
            pdf_data = pdf_data.split(",")[1]
        
        # ৩. ইন্টারনাল ইমপোর্ট (Lazy Loading)
        import fitz  # PyMuPDF
        
        pdf_bytes = base64.b64decode(pdf_data)
        del pdf_data # মেমোরি সেভ করতে ডাটা ডিলিট করুন
        
        # ৪. PDF ওপেন এবং মেটাডাটা ক্লিন
        with fitz.open(stream=pdf_bytes, filetype="pdf") as doc:
            # সকল স্ট্যান্ডার্ড ফিল্ড খালি করা
            empty_metadata = {
                "author": "", "creator": "", "keywords": "",
                "producer": "", "subject": "", "title": "", 
                "creationDate": "", "modDate": ""
            }
            doc.set_metadata(empty_metadata)
            
            # মেটাডাটা স্ট্রিপ করার জন্য স্পেশাল ফ্ল্যাগ ব্যবহার করে সেভ করা
            output_buffer = io.BytesIO()
            doc.save(
                output_buffer, 
                garbage=4, 
                deflate=True, 
                clean=True,
                expand=0 # ডুপ্লিকেট অবজেক্ট রিমুভ করবে
            )
            
            clean_pdf_str = base64.b64encode(output_buffer.getvalue()).decode()
            output_buffer.close()

        # ৫. মেমোরি ক্লিনআপ
        gc.collect()

        return https_fn.Response(
            json.dumps({"success": True, "pdf": clean_pdf_str}), 
            status=200, 
            headers=headers
        )

    except Exception as e:
        print(f"METADATA CLEANER ERROR: {str(e)}")
        return https_fn.Response(
            json.dumps({"success": False, "error": f"Internal Error: {str(e)}"}), 
            status=500, 
            headers=headers
        )