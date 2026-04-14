from sqlalchemy.orm import Session
from . import models

def save_prediction(db: Session, data: dict):
    pred = models.Prediction(**data)
    db.add(pred)
    db.commit()
    db.refresh(pred)
    return pred

def get_all_predictions(db: Session):
    return db.query(models.Prediction).order_by(models.Prediction.created_at.desc()).limit(20).all()
