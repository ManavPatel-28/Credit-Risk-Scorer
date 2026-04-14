from sqlalchemy import Column, Integer, String, Float, DateTime
from .database import Base
import datetime

class Prediction(Base):
    __tablename__ = "predictions"
    id = Column(Integer, primary_key=True, index=True)
    age = Column(Integer)
    credit_amount = Column(Float)
    duration = Column(Integer)
    employment = Column(String)
    purpose = Column(String)
    risk = Column(String)
    probability = Column(Float)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
