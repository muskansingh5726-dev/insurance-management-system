import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../api/client";

function AddPolicy() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    policyName: "",
    premium: "",
    customerId: "",
    status: "ACTIVE",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await API.post("/policies", {
        ...formData,
        premium: Number(formData.premium),
        customerId: Number(formData.customerId),
      });

      alert("Policy Added Successfully");

      navigate("/policies");

    } catch (err) {

    }

  }

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-5xl font-black text-white mb-10">

          Add Policy

        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 rounded-3xl border border-slate-800 p-10 max-w-3xl space-y-6"
        >

          <input
            name="policyName"
            placeholder="Policy Name"
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

          <input
            name="premium"
            placeholder="Premium Amount"
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

          <input
            name="customerId"
            placeholder="Customer ID"
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          />

          <select
            name="status"
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
          >
            <option>ACTIVE</option>
            <option>PENDING</option>
            <option>EXPIRED</option>
          </select>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl text-white font-bold hover:scale-105 transition">

            Save Policy

          </button>

        </form>

      </main>

    </div>
  );
}

export default AddPolicy;