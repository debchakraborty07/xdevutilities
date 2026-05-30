# functions/api/developer_tools.py

import json
import sqlparse
from sqlparse.sql import IdentifierList, Identifier, Parenthesis
from sqlparse.tokens import Keyword, Name
from firebase_functions import https_fn

def sql_to_mermaid_handler(req: https_fn.Request) -> https_fn.Response:
    # ১. স্ট্যান্ডার্ড প্রজেক্ট হেডারস
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600'
    }

    if req.method == 'OPTIONS':
        return https_fn.Response('', status=204, headers=headers)

    try:
        # ২. রোবাস্ট বডি পার্সিং (আগের টুলসগুলোর মতো)
        body = req.get_json(force=True, silent=True)
        if not body or 'sql' not in body:
            return https_fn.Response(json.dumps({"success": False, "error": "No SQL provided"}), status=400, headers=headers)

        sql_code = body.get('sql', '')
        parsed = sqlparse.parse(sql_code)
        
        mermaid_lines = ["erDiagram"]

        for statement in parsed:
            # শুধুমাত্র CREATE স্টেটমেন্ট প্রসেস করবো
            if statement.get_type() == 'CREATE':
                table_name = None
                columns = []
                
                # টেবিল নাম খুঁজে বের করার উন্নত লজিক
                tokens = [t for t in statement.tokens if not t.is_whitespace]
                for i, token in enumerate(tokens):
                    # TABLE কী-ওয়ার্ডের পরের অংশটিই টেবিল নাম
                    if token.value.upper() == 'TABLE':
                        # নাম সাধারণত পরবর্তী টোকেনে থাকে (Identifier)
                        next_token = tokens[i+1]
                        # কোটেশন বা ব্র্যাকেট থাকলে তা পরিষ্কার করা
                        table_name = next_token.get_real_name() or next_token.value.strip('"`[] ')
                        break
                
                # কলাম এবং ডেটা টাইপ খুঁজে বের করা
                for token in statement.tokens:
                    if isinstance(token, Parenthesis):
                        # প্যারেন্থেসিস এর ভেতরের অংশ টোকেনাইজ করা
                        inner_sql = token.value.strip('()')
                        # কমা দিয়ে কলামগুলো আলাদা করা
                        col_definitions = inner_sql.split(',')
                        for col_def in col_definitions:
                            parts = col_def.strip().split()
                            if len(parts) >= 2:
                                # প্রথম অংশ নাম, দ্বিতীয় অংশ টাইপ
                                col_name = parts[0].strip('"`[] ')
                                col_type = parts[1].strip('"`[] ')
                                # Mermaid এর জন্য শুধু আলফানিউমেরিক কলাম নাম রাখা ভালো
                                if col_name.upper() not in ['PRIMARY', 'KEY', 'CONSTRAINT', 'FOREIGN']:
                                    columns.append(f"        {col_type} {col_name}")

                if table_name:
                    mermaid_lines.append(f"    {table_name} {{")
                    if columns:
                        mermaid_lines.extend(columns)
                    else:
                        mermaid_lines.append("        string column") # ডিফল্ট কলাম যদি কিছু না পাওয়া যায়
                    mermaid_lines.append("    }")

        mermaid_final = "\n".join(mermaid_lines)
        
        # যদি কোনো টেবিলই না পাওয়া যায়
        if len(mermaid_lines) == 1:
            return https_fn.Response(json.dumps({
                "success": False, 
                "error": "No valid CREATE TABLE statements found. Please check your SQL syntax."
            }), status=400, headers=headers)

        return https_fn.Response(
            json.dumps({"success": True, "mermaid": mermaid_final}), 
            status=200, headers=headers
        )

    except Exception as e:
        return https_fn.Response(
            json.dumps({"success": False, "error": f"Parsing Error: {str(e)}"}), 
            status=500, headers=headers
        )