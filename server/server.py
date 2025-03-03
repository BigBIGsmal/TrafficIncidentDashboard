from flask import Flask
from flask_cors import CORS
from api import api  # Import Blueprint correctly

app = Flask(__name__)

# Apply CORS to all routes
CORS(app)

# Register API Blueprint
app.register_blueprint(api)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
