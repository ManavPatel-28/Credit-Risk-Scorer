from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import predict, stats
from app.db.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Credit Risk Scorer")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict.router, prefix="/api")
app.include_router(stats.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Credit Risk Scorer API Running"}
