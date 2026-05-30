# functions/main.py

import json
import firebase_admin
from firebase_functions import https_fn

# Global initialization
if not firebase_admin._apps:
    firebase_admin.initialize_app()

# ১. হালকা ফাংশন (Test Connection)
@https_fn.on_request(min_instances=0, max_instances=1)
def test_connection(req: https_fn.Request) -> https_fn.Response:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    if req.method == 'OPTIONS':
        return https_fn.Response('', status=204, headers=headers)
    
    return https_fn.Response(
        json.dumps({"message": "Success! Python Backend is connected 🐍"}), 
        status=200, 
        headers=headers
    )

# ২. পাসপোর্ট ফটো (এখন আলাদা ফাইল থেকে আসবে)
@https_fn.on_request(min_instances=0, max_instances=1, memory=512)
def passport_photo_api(req: https_fn.Request) -> https_fn.Response:
    from api.passport_photo import passport_handler
    return passport_handler(req)

# ৩. ATS Resume
@https_fn.on_request(min_instances=0, max_instances=1, memory=512) # ৫১২ হওয়া জরুরি
def resume_scanner_api(req: https_fn.Request) -> https_fn.Response:
    from api.resume_scanner import resume_handler
    return resume_handler(req)

# ৪. PDF Metadata cleaner
@https_fn.on_request(min_instances=0, max_instances=1, memory=256)
def metadata_cleaner_api(req: https_fn.Request) -> https_fn.Response:
    from api.metadata_cleaner import handle_metadata_request
    return handle_metadata_request(req)

# ৫. AUTH: Unique Username Checker
@https_fn.on_request(min_instances=0, max_instances=1, memory=256)
def check_username_api(req: https_fn.Request) -> https_fn.Response:
    from api.auth_tools import check_username_handler
    return check_username_handler(req)

# ৬. Color Palette API (আপাতত image_processor এ থাকছে, আমরা পরে আলাদা করবো)
@https_fn.on_request(min_instances=0, max_instances=1, memory=512)
def color_palette_api(req: https_fn.Request) -> https_fn.Response:
    from api.color_palette import handle_color_palette_request
    return handle_color_palette_request(req)

# ৭. SQL to Mermaid API
@https_fn.on_request(min_instances=0, max_instances=1, memory=256)
def sql_to_mermaid_api(req: https_fn.Request) -> https_fn.Response:
    from api.developer_tools import sql_to_mermaid_handler
    return sql_to_mermaid_handler(req)



@https_fn.on_request(min_instances=0, max_instances=1, memory=256)
def encryption_api(req: https_fn.Request) -> https_fn.Response:
    from api.encryption import encryption_handler
    return encryption_handler(req)