from flask import Flask, request, jsonify
import jwt
import datetime

app = Flask(__name__)
SECRET_KEY = "clave-secreta"

# --- LOGIN ---
@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    # Aquí deberías validar contra tu base de datos/LDAP/etc.
    if username == "admin" and password == "1234":
        # Generar token JWT con expiración
        payload = {
            "user": username,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)  # expira en 30 min
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return jsonify({"token": token})

    return jsonify({"error": "Credenciales inválidas"}), 401


# --- VALIDACIÓN DE TOKEN ---
@app.route("/api/validate-token", methods=["POST"])
def validate_token():
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        return jsonify({"valid": False}), 401

    try:
        token = auth_header.split(" ")[1]
        decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify({"valid": True, "user": decoded["user"]})
    except jwt.ExpiredSignatureError:
        return jsonify({"valid": False, "error": "Token expirado"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"valid": False, "error": "Token inválido"}), 401


# --- EJEMPLO DE ENDPOINT PROTEGIDO ---
@app.route("/api/data", methods=["GET"])
def protected_data():
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        return jsonify({"error": "Token requerido"}), 401

    try:
        token = auth_header.split(" ")[1]
        decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify({"message": f"Hola {decoded['user']}, aquí están tus datos."})
    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expirado"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"error": "Token inválido"}), 401