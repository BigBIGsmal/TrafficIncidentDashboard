import os
from pymongo import MongoClient

#this init is for mongodb
# Use environment variable for MongoDB URI if deploying
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")

client = MongoClient(MONGO_URI)
db = client["incident"]  # Use consistent naming (database)
incidents = db["incidents"]  # Use consistent naming (collection)
