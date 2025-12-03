from flask import Flask, request, jsonify
import jwt

app = Flask(__name__)
SECRET_KEY = "clave-secreta"

@app.route("/api/validate-token", methods=["POST"])
def validate_token():
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        return jsonify({"valid": False}), 401

    token = auth_header.split(" ")[1]
    try:
        jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify({"valid": True})
    except jwt.ExpiredSignatureError:
        return jsonify({"valid": False}), 401
    except jwt.InvalidTokenError:
        return jsonify({"valid": False}), 401