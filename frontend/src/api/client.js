import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api" });

export const predictRisk = (data) => API.post("/predict", data);
export const getHistory = () => API.get("/history");
