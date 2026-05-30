# functions/api/utils.py

import json
from firebase_functions import https_fn

def cors_enabled(func):
    """এটি একটি ডেকোরেটর যা অটোমেটিক CORS হ্যান্ডেল করবে"""
    def wrapper(req: https_fn.Request) -> https_fn.Response:
        # স্থায়ী হেডার সেটআপ
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Access-Control-Max-Age': '3600',
        }

        # ১. প্রি-ফ্লাইট রিকোয়েস্ট (OPTIONS) হ্যান্ডেল
        if req.method == 'OPTIONS':
            return https_fn.Response('', status=204, headers=headers)

        # ২. মূল ফাংশন রান করা
        try:
            response = func(req)
            
            # ৩. অরিজিনাল হেডারের সাথে আমাদের CORS হেডার মার্জ করা
            if isinstance(response, https_fn.Response):
                for key, value in headers.items():
                    response.headers[key] = value
                return response
            
            # যদি সরাসরি ডিকশনারি রিটার্ন করে (সেফটি চেক)
            return https_fn.Response(
                json.dumps(response), 
                status=200, 
                headers={**headers, 'Content-Type': 'application/json'}
            )
            
        except Exception as e:
            return https_fn.Response(
                json.dumps({"success": False, "error": str(e)}),
                status=500,
                headers={**headers, 'Content-Type': 'application/json'}
            )
            
    return wrapper