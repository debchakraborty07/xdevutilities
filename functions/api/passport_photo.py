# functions/api/passport_photo.py

import io
import base64
import json
import gc
from PIL import Image, ImageOps, ImageEnhance
from firebase_functions import https_fn

def passport_handler(req: https_fn.Request) -> https_fn.Response:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json'
    }

    if req.method == 'OPTIONS':
        return https_fn.Response('', status=204, headers=headers)

    try:
        body = req.get_json(force=True, silent=True)
        if not body or 'image' not in body:
            return https_fn.Response(json.dumps({"success": False, "error": "Missing image data"}), status=400, headers=headers)

        image_data = body.get('image')

        if "," in image_data:
            image_data = image_data.split(",", 1)[1]
        
        try:
            image_bytes = base64.b64decode(image_data)
            img = Image.open(io.BytesIO(image_bytes))
        except Exception:
            return https_fn.Response(json.dumps({"success": False, "error": "Invalid image format"}), status=400, headers=headers)

        img = img.convert("RGB")
        img = ImageOps.autocontrast(img, cutoff=0.5) 
        img = ImageEnhance.Sharpness(img).enhance(1.2) 

        # রিস্যাম্পলিং ফিল্টার নির্ধারণ
        try:
            resample_filter = Image.Resampling.LANCZOS
        except AttributeError:
            resample_filter = Image.LANCZOS

        # ফিক্সড লাইন: resample এর বদলে method ব্যবহার করা হয়েছে
        img = ImageOps.fit(img, (300, 300), method=resample_filter)
        
        img = ImageOps.expand(img, border=4, fill='white')
        img = ImageOps.expand(img, border=1, fill='#d1d5db') 

        buffered = io.BytesIO()
        img.save(buffered, format="JPEG", quality=95, optimize=True)
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        img.close()
        gc.collect()

        return https_fn.Response(
            json.dumps({"success": True, "image": f"data:image/jpeg;base64,{img_str}"}), 
            status=200, 
            headers=headers
        )

    except Exception as e:
        # এরর লগ যাতে কনসোলে দেখা যায়
        print(f"CRITICAL ERROR IN PASSPORT SERVICE: {str(e)}")
        return https_fn.Response(
            json.dumps({"success": False, "error": str(e)}), 
            status=500, 
            headers=headers
        )