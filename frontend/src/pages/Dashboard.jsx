import { useState } from "react";
import RiskForm from "../components/RiskForm";
import RiskResult from "../components/RiskResult";
import ShapChart from "../components/ShapChart";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <RiskForm onResult={setResult} onLoading={setLoading} />
      {loading && <p className="text-center text-blue-600 font-medium">Analyzing credit risk...</p>}
      {result && (
        <>
          <RiskResult result={result} />
          <ShapChart shapValues={result.shap_values} />
        </>
      )}
    </div>
  );
}
