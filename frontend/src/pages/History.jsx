import { useEffect, useState } from "react";
import { getHistory } from "../api/client";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then(res => setHistory(res.data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Predictions</h2>
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-2">Age</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Duration</th>
              <th className="text-left py-2">Risk</th>
              <th className="text-left py-2">Probability</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, i) => (
              <tr key={i} className="border-b">
                <td className="py-2">{h.age}</td>
                <td className="py-2">${h.credit_amount}</td>
                <td className="py-2">{h.duration}m</td>
                <td className={`py-2 font-bold ${h.risk === "HIGH RISK" ? "text-red-500" : "text-green-500"}`}>{h.risk}</td>
                <td className="py-2">{h.probability}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
