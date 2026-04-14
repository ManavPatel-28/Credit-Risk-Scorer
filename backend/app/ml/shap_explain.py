import pickle
import pandas as pd
import shap
import numpy as np

def get_shap_values(input_data: dict):
    with open("credit_model.pkl", "rb") as f:
        model = pickle.load(f)
    with open("credit_encoders.pkl", "rb") as f:
        encoders = pickle.load(f)
    with open("credit_columns.pkl", "rb") as f:
        columns = pickle.load(f)

    df = pd.DataFrame([input_data])

    for col, le in encoders.items():
        if col in df.columns:
            try:
                df[col] = le.transform(df[col].astype(str))
            except:
                df[col] = 0

    for col in columns:
        if col not in df.columns:
            df[col] = 0

    df = df[columns]

    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(df)

    result = []
    for i, col in enumerate(columns):
        result.append({
            "feature": col,
            "value": float(df[col].iloc[0]),
            "shap_value": round(float(shap_values[0][i]), 4)
        })

    result.sort(key=lambda x: abs(x["shap_value"]), reverse=True)
    return result[:10]
