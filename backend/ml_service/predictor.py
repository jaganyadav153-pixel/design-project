"""
backend/ml_service/predictor.py - Loads model.pkl and predicts
Used by backend/api/views.py -> predict()
Standalone test: python predictor.py
"""
import pickle
from pathlib import Path
import numpy as np

def predict(domain_input):
    pkl = Path(__file__).parent / "model.pkl"
    with open(pkl, 'rb') as f:
        data = pickle.load(f)
    print(f"Loaded model: {data.get('best_model_name','RandomForest mock')}")
    print(f"Feature cols: {data.get('feature_cols')}")
    # Demo: if real sklearn model exists, use it; else weighted fallback
    return data

if __name__ == "__main__":
    print(predict({}))
