# functions/api/auth_tools.py

import json
from firebase_admin import firestore
from firebase_functions import https_fn
from api.utils import cors_enabled

@cors_enabled
def check_username_handler(req: https_fn.Request) -> https_fn.Response:
    try:
        db = firestore.client()
        body = req.get_json()
        # ইউজারনেম থেকে @ সলিয়ে এবং ছোট হাতের করে প্রসেস করা
        username = body.get('username', '').replace('@', '').lower().strip()
        
        if not username:
            return https_fn.Response(json.dumps({"available": False, "error": "empty"}), status=200)

        # ১টা Read মাত্র
        doc_ref = db.collection('usernames').document(username).get()
        
        return https_fn.Response(json.dumps({"available": not doc_ref.exists}), status=200)

    except Exception as e:
        return https_fn.Response(json.dumps({"error": str(e)}), status=500)