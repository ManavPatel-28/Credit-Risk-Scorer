import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex gap-4 px-6 pt-4">
        <button onClick={() => setPage("dashboard")} className={`px-4 py-2 rounded-lg text-sm font-medium ${page === "dashboard" ? "bg-blue-600 text-white" : "bg-white text-gray-600 border"}`}>
          Risk Assessment
        </button>
        <button onClick={() => setPage("history")} className={`px-4 py-2 rounded-lg text-sm font-medium ${page === "history" ? "bg-blue-600 text-white" : "bg-white text-gray-600 border"}`}>
          History
        </button>
      </div>
      <main className="py-4">
        {page === "dashboard" ? <Dashboard /> : <History />}
      </main>
    </div>
  );
}
