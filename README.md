# 🏦 Credit Risk Scoring Model (React, FastAPI, XGBoost, SHAP, PostgreSQL)

This repository contains a **full-stack AI-powered credit risk assessment application** that predicts loan default probability for applicants using machine learning with explainable AI.  
The project demonstrates **machine learning, explainable AI, full-stack development, and financial data engineering** using modern technologies.

---

## 🚀 Features

1. **Credit Risk Prediction**
   - Predicts whether a loan applicant is HIGH RISK or LOW RISK
   - Returns default probability score with model accuracy

2. **Explainable AI with SHAP**
   - Visual SHAP chart showing exactly WHY the model made each decision
   - Red bars increase risk, green bars decrease risk
   - Replicates real-world regulatory compliance used by major banks

3. **Applicant Input Form**
   - Enter age, credit amount, duration, employment, purpose, housing, savings, and more
   - Clean professional financial UI theme

4. **Prediction History**
   - All predictions stored in PostgreSQL database
   - History dashboard showing past assessments with risk levels

5. **German Credit Dataset**
   - Trained on the well-known German Credit Dataset (1000 applicants)
   - Automatic dataset download and model training on first run

---

## 🛠 Tech Stack

- **Frontend:** React, Recharts, Tailwind CSS, Axios  
- **Backend:** Python, FastAPI, Uvicorn  
- **Machine Learning:** XGBoost, SHAP, scikit-learn, pandas, NumPy  
- **Database:** PostgreSQL, SQLAlchemy  
- **Dataset:** German Credit Dataset (via scikit-learn OpenML)  
- **DevTools:** Git, GitHub, VS Code  

---

## ▶️ How to Run

1. Clone the repository:
```bash
   git clone https://github.com/ManavPatel-28/credit-risk-scorer.git
```

2. Setup PostgreSQL database:
```bash
   psql -U postgres
   CREATE DATABASE creditdb;
   \q
```

3. Configure environment variables — create `backend/.env`:

DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/creditdb

4. Run the backend:
```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload
```

5. Run the frontend:
```bash
   cd frontend
   npm install
   npm run dev
```

6. Open your browser at `http://localhost:5173`, fill in applicant details and click **Assess Credit Risk**

---

## 📂 Implementation Details

- Built a full-stack AI pipeline using React frontend, FastAPI REST API, and PostgreSQL database to assess loan default risk.
- Trained XGBoost classifier on the German Credit Dataset achieving 80% accuracy to classify applicants as HIGH RISK or LOW RISK.
- Implemented SHAP (SHapley Additive exPlanations) to identify top factors driving each credit decision, replicating real-world regulatory compliance requirements used by major banks.
- Designed PostgreSQL schema with SQLAlchemy ORM to store prediction history with a history dashboard for tracking past assessments.
- Integrated scikit-learn label encoding and feature engineering pipeline for preprocessing categorical financial data.
- Built a clean professional financial UI with a light blue theme using React and Tailwind CSS.

---

## 🎯 Learning Outcomes

- Machine learning model training, evaluation, and deployment for financial applications
- Explainable AI (XAI) using SHAP values for regulatory compliance simulation
- Full-stack web development with React and FastAPI
- PostgreSQL database design and SQLAlchemy ORM integration
- Financial data preprocessing and feature engineering
- RESTful API design and asynchronous data fetching in React

---

## 👨‍💻 Author

**Manav Sachin Patel**
- [LinkedIn](https://www.linkedin.com/in/manav-patel-211467333)  
- [GitHub](https://github.com/ManavPatel-28)
