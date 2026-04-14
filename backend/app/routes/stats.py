from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db import crud

router = APIRouter()

@router.get("/history")
def get_history(db: Session = Depends(get_db)):
    preds = crud.get_all_predictions(db)
    return [
        {
            "id": p.id,
            "age": p.age,
            "credit_amount": p.credit_amount,
            "duration": p.duration,
            "risk": p.risk,
            "probability": p.probability,
            "created_at": str(p.created_at)
        }
        for p in preds
    ]
