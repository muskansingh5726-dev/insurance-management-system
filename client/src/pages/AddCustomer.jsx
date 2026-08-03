import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../api/client";

function AddCustomer() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dob: "",
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
      setLoading(true);

      await API.post("/customers", formData);

      alert("Customer Added Successfully!");

      navigate("/customers");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Unable to create customer"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-5xl font-black text-white">
          Add Customer
        </h1>

        <p className="text-slate-400 mt-2">
          Register a new insurance customer
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-10 space-y-6 max-w-4xl"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

            <div>

              <label className="text-slate-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

            <div>

              <label className="text-slate-300">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

            <div>

              <label className="text-slate-300">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

            <div>

              <label className="text-slate-300">
                Date of Birth
              </label>

              <input
                type="date"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

            <div>

              <label className="text-slate-300">
                Address
              </label>

              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
              />

            </div>

          </div>

          <button
            disabled={loading}
            className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition disabled:opacity-50"
          >

            {loading ? "Saving..." : "Add Customer"}

          </button>

        </form>

      </main>

    </div>
  );
}

export default AddCustomer;