from flask import jsonify, render_template
from . import api, init # Import Blueprint from __init__.py


@api.route('/data', methods=['GET'])
def get_data():
    data = list(init.incidents.find({}, {'_id': 0}))  # Exclude MongoDB's default '_id' field
    return jsonify(data)
