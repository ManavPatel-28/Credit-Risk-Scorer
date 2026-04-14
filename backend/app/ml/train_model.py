import pickle
import numpy as np
import pandas as pd
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder

def get_german_credit_data():
    from sklearn.datasets import fetch_openml
    data = fetch_openml(name="credit-g", version=1, as_frame=True)
    df = data.frame
    return df

def train():
    df = get_german_credit_data()

    label_encoders = {}
    for col in df.select_dtypes(include="category").columns:
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col].astype(str))
        label_encoders[col] = le

    X = df.drop("class", axis=1)
    y = (df["class"] == 1).astype(int)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    model = XGBClassifier(n_estimators=100, max_depth=4, learning_rate=0.1, eval_metric="logloss")
    model.fit(X_train, y_train)

    preds = model.predict(X_test)
    acc = round(accuracy_score(y_test, preds) * 100, 2)
    print(f"Model Accuracy: {acc}%")

    with open("credit_model.pkl", "wb") as f:
        pickle.dump(model, f)

    with open("credit_encoders.pkl", "wb") as f:
        pickle.dump(label_encoders, f)

    with open("credit_columns.pkl", "wb") as f:
        pickle.dump(list(X.columns), f)

    with open("credit_accuracy.txt", "w") as f:
        f.write(str(acc))

    return model, label_encoders, list(X.columns), acc

if __name__ == "__main__":
    train()
