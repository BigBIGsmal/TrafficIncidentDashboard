from flask import Blueprint

#this init is for blueprint use purposes
api = Blueprint('api', __name__, url_prefix="/api")  # Add a URL prefix for organization

from . import routes  # Import routes to register them
