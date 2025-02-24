from flask import Flask
from flask_cors import CORS
from api.routes import api

app = Flask(__name__)

# Apply CORS to API routes only
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Register API routes
app.register_blueprint(api)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
