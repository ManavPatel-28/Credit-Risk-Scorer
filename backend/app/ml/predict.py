import pickle
import pandas as pd
import numpy as np

def load_model():
    try:
        with open("credit_model.pkl", "rb") as f:
            model = pickle.load(f)
        with open("credit_encoders.pkl", "rb") as f:
            encoders = pickle.load(f)
        with open("credit_columns.pkl", "rb") as f:
            columns = pickle.load(f)
        with open("credit_accuracy.txt", "r") as f:
            accuracy = float(f.read())
        return model, encoders, columns, accuracy
    except FileNotFoundError:
        from .train_model import train
        model, encoders, columns, acc = train()
        return model, encoders, columns, acc

def predict_risk(input_data: dict):
    model, encoders, columns, accuracy = load_model()

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

    prob = float(model.predict_proba(df)[0][1])
    risk = "HIGH RISK" if prob > 0.5 else "LOW RISK"

    return {
        "risk": risk,
        "probability": round(prob * 100, 2),
        "accuracy": accuracy
    }
