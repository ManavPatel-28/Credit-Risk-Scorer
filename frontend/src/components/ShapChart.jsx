import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

export default function ShapChart({ shapValues }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Why this decision? (SHAP Explanation)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={shapValues} layout="vertical" margin={{ left: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="feature" tick={{ fontSize: 11 }} />
          <Tooltip formatter={(v) => [v.toFixed(4), "SHAP Value"]} />
          <Bar dataKey="shap_value">
            {shapValues.map((entry, i) => (
              <Cell key={i} fill={entry.shap_value > 0 ? "#ef4444" : "#22c55e"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-500 mt-2">Red bars increase risk. Green bars decrease risk.</p>
    </div>
  );
}
