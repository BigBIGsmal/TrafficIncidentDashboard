from flask import Blueprint, jsonify
import pandas as pd
import os

api = Blueprint('api', __name__)

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/data_mmda_traffic_spatial.csv')

@api.route('/api/data', methods=['GET'])
def get_data():
    try:
        df = pd.read_csv(DATA_PATH)
        
        # Convert NaN values to None
        df = df.where(pd.notna(df), None)
        
        return jsonify(df.head(40).to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": str(e)}), 500
