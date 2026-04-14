export default function RiskResult({ result }) {
  const isHigh = result.risk === "HIGH RISK";
  return (
    <div className={`rounded-xl shadow p-6 text-white ${isHigh ? "bg-red-500" : "bg-green-500"}`}>
      <h2 className="text-2xl font-bold mb-2">{result.risk}</h2>
      <p className="text-lg">Default Probability: <strong>{result.probability}%</strong></p>
      <p className="text-sm mt-1 opacity-80">Model Accuracy: {result.accuracy}%</p>
    </div>
  );
}
