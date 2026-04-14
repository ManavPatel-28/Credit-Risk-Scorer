export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-bold">Credit Risk Scorer</h1>
      <span className="text-sm text-blue-200">Powered by XGBoost + SHAP</span>
    </nav>
  );
}
