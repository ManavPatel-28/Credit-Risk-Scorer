from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db import crud
from app.ml.predict import predict_risk
from app.ml.shap_explain import get_shap_values
from pydantic import BaseModel

router = APIRouter()

class CreditInput(BaseModel):
    age: int = 35
    duration: int = 24
    credit_amount: float = 5000
    employment: str = "4<=X<7"
    purpose: str = "furniture/equipment"
    housing: str = "own"
    saving_accounts: str = "little"
    checking_account: str = "little"
    sex: str = "male"
    job: int = 2

@router.post("/predict")
def predict(data: CreditInput, db: Session = Depends(get_db)):
    input_dict = data.dict()
    result = predict_risk(input_dict)
    shap_vals = get_shap_values(input_dict)

    crud.save_prediction(db, {
        "age": data.age,
        "credit_amount": data.credit_amount,
        "duration": data.duration,
        "employment": data.employment,
        "purpose": data.purpose,
        "risk": result["risk"],
        "probability": result["probability"]
    })

    return {
        "risk": result["risk"],
        "probability": result["probability"],
        "accuracy": result["accuracy"],
        "shap_values": shap_vals
    }
