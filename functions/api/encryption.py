# functions/api/encryption.py

import json
import base64
from firebase_functions import https_fn
# এনক্রিপশনের জন্য ইন্টারনাল ইমপোর্ট (Lazy Loading)
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Protocol.KDF import PBKDF2
import hashlib

def encryption_handler(req: https_fn.Request) -> https_fn.Response:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }

    if req.method == 'OPTIONS':
        return https_fn.Response('', status=204, headers=headers)

    try:
        body = req.get_json(force=True, silent=True)
        text = body.get('text', '')
        passphrase = body.get('key', '')
        mode = body.get('mode', 'encrypt') # encrypt or decrypt

        if not text or not passphrase:
            return https_fn.Response(json.dumps({"success": False, "error": "Missing input or key"}), status=400, headers=headers)

        # ১. কী জেনারেশন (PBKDF2 ব্যবহার করে পাসফ্রেজ থেকে সলিড কী বানানো)
        salt = b'\x12\xab\x34\xcd\x56\xef\x78\x90' # সিম্পল স্ট্যাটিক সল্ট
        key = PBKDF2(passphrase, salt, dkLen=32, count=1000)
        
        if mode == 'encrypt':
            # ২. এনক্রিপশন লজিক
            cipher = AES.new(key, AES.MODE_CBC) # CBC Mode is highly secure
            ct_bytes = cipher.encrypt(pad(text.encode('utf-8'), AES.block_size))
            iv = base64.b64encode(cipher.iv).decode('utf-8')
            ct = base64.b64encode(ct_bytes).decode('utf-8')
            result = f"{iv}:{ct}" # IV এবং Ciphertext একসাথে পাঠানো হয়
            
        else:
            # ৩. ডিক্রিপশন লজিক
            if ":" not in text:
                raise ValueError("Invalid encrypted format")
            
            iv_raw, ct_raw = text.split(":", 1)
            iv = base64.b64decode(iv_raw)
            ct = base64.b64decode(ct_raw)
            cipher = AES.new(key, AES.MODE_CBC, iv=iv)
            pt = unpad(cipher.decrypt(ct), AES.block_size)
            result = pt.decode('utf-8')

        return https_fn.Response(
            json.dumps({"success": True, "result": result}), 
            status=200, 
            headers=headers
        )

    except Exception as e:
        print(f"ENCRYPTION ERROR: {str(e)}")
        return https_fn.Response(
            json.dumps({"success": False, "error": "Invalid key or corrupted data"}), 
            status=500, 
            headers=headers
        )