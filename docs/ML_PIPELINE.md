# ML Pipeline

- **Dataset**: `ml/dataset.csv` 500 rows, 11 features + 1 label (6 domains)
- **Features**: logic_score, math_aptitude, creativity, security_interest, cloud_interest, data_interest, os_interest, math_marks, physics_marks, programming_marks, english_marks
- **Preprocessing**: StandardScaler -> PCA (95% variance, 11->10)
- **Models**: RandomForest (89%, CV 82%), DecisionTree (64%), KNN (82%)
- **Best**: RandomForest 100 trees (see `ml/metrics.json`)
- **Artifacts**: `backend/ml_service/model.pkl` (pickle: model+scaler+pca+encoder)
- **API**: POST /api/predict {answers, marks} -> {top, confidence, top3, explanation}
- **Fallback**: Client weighted scoring identical to backend (weights in index.html & predictor.py) ensures offline demo

To retrain: `python ml/generate_dataset.py && python ml/train_model.py` (requires pandas/sklearn fixed env)
