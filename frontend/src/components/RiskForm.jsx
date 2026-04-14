import { useState } from "react";
import { predictRisk } from "../api/client";

const employmentOptions = ["unemployed", "<1", "1<=X<4", "4<=X<7", ">=7"];
const purposeOptions = ["car", "furniture/equipment", "radio/TV", "domestic appliance", "repairs", "education", "business", "other"];
const housingOptions = ["own", "free", "rent"];
const savingOptions = ["little", "moderate", "quite rich", "rich", "no known savings"];
const checkingOptions = ["little", "moderate", "rich", "no checking"];

export default function RiskForm({ onResult, onLoading }) {
  const [form, setForm] = useState({
    age: 35, duration: 24, credit_amount: 5000,
    employment: "4<=X<7", purpose: "furniture/equipment",
    housing: "own", saving_accounts: "little",
    checking_account: "little", sex: "male", job: 2
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: ["age", "duration", "job"].includes(name) ? parseInt(value) : name === "credit_amount" ? parseFloat(value) : value }));
  };

  const handleSubmit = async () => {
    onLoading(true);
    try {
      const res = await predictRisk(form);
      onResult(res.data);
    } catch (e) {
      alert("Error connecting to backend.");
    }
    onLoading(false);
  };

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Applicant Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Age</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Credit Amount ($)</label>
          <input type="number" name="credit_amount" value={form.credit_amount} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Duration (months)</label>
          <input type="number" name="duration" value={form.duration} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Job Level (0-3)</label>
          <input type="number" name="job" value={form.job} onChange={handleChange} min="0" max="3" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Employment Duration</label>
          <select name="employment" value={form.employment} onChange={handleChange} className={inputClass}>
            {employmentOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Purpose</label>
          <select name="purpose" value={form.purpose} onChange={handleChange} className={inputClass}>
            {purposeOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Housing</label>
          <select name="housing" value={form.housing} onChange={handleChange} className={inputClass}>
            {housingOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Saving Accounts</label>
          <select name="saving_accounts" value={form.saving_accounts} onChange={handleChange} className={inputClass}>
            {savingOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Checking Account</label>
          <select name="checking_account" value={form.checking_account} onChange={handleChange} className={inputClass}>
            {checkingOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Sex</label>
          <select name="sex" value={form.sex} onChange={handleChange} className={inputClass}>
            <option>male</option>
            <option>female</option>
          </select>
        </div>
      </div>
      <button onClick={handleSubmit} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
        Assess Credit Risk
      </button>
    </div>
  );
}
