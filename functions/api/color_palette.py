# functions/api/color_palette.py

import io
import base64
import json
import gc
from PIL import Image
from firebase_functions import https_fn

def handle_color_palette_request(req: https_fn.Request) -> https_fn.Response:
    # স্ট্যান্ডার্ড এন্টারপ্রাইজ হেডার্স
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '3600',
    }

    if req.method == 'OPTIONS':
        return https_fn.Response('', status=204, headers=headers)

    try:
        # ১. বডি পার্সিং
        body = req.get_json(force=True, silent=True)
        if not body or 'image' not in body:
            return https_fn.Response(json.dumps({"success": False, "error": "No image data found"}), status=400, headers=headers)

        image_data = body['image']
        if "," in image_data:
            image_data = image_data.split(",", 1)[1]
        
        # ২. ইমেজ প্রসেসিং
        image_bytes = base64.b64decode(image_data)
        img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        
        # স্পিড এবং মেমোরির জন্য ইমেজ রিসাইজ
        img.thumbnail((200, 200))
        
        # ৩. কালার এক্সট্রাকশন (Pillow Quantize)
        img_quantized = img.quantize(colors=6)
        palette = img_quantized.getpalette()[:18] # প্রথম ৬টি কালারের RGB (6*3=18)
        
        hex_colors = []
        for i in range(0, 18, 3):
            r, g, b = palette[i], palette[i+1], palette[i+2]
            hex_colors.append(f"#{r:02x}{g:02x}{b:02x}")

        # ৪. মেমোরি ক্লিনআপ
        img.close()
        gc.collect()

        return https_fn.Response(
            json.dumps({"success": True, "colors": hex_colors}), 
            status=200, 
            headers=headers
        )

    except Exception as e:
        print(f"CRITICAL ERROR IN PALETTE SERVICE: {str(e)}")
        return https_fn.Response(
            json.dumps({"success": False, "error": "Failed to analyze image colors"}), 
            status=500, 
            headers=headers
        )