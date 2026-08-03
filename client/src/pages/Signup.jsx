import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import API from "../api/client";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await API.post("/auth/signup", formData);

      alert("Account Created Successfully!");

      navigate("/login");

    } catch (err) {

      setError(
        err.response?.data?.message ||
          "Something went wrong."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 items-center justify-center">

        <div className="text-white px-12">

          <h1 className="text-6xl font-black">
            Join InsureHub
          </h1>

          <p className="mt-6 text-xl text-cyan-100 leading-9">

            Create your account and manage policies,
            claims, payments and customers from one
            secure dashboard.

          </p>

        </div>

      </div>

      <div className="flex-1 flex justify-center items-center p-8">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md">

          <h2 className="text-4xl font-black text-white">
            Create Account
          </h2>

          <p className="text-slate-400 mt-2">
            Start your insurance journey
          </p>

          {error && (
            <div className="mt-6 bg-red-500/20 text-red-400 rounded-xl p-3">
              {error}
            </div>
          )}

          <form
            className="space-y-6 mt-8"
            onSubmit={handleSubmit}
          >

            <div>

              <label className="text-slate-300">
                Full Name
              </label>

              <div className="relative mt-2">

                <FaUser className="absolute left-4 top-4 text-slate-500"/>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 py-3 text-white"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-300">
                Email
              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-4 top-4 text-slate-500"/>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 py-3 text-white"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-300">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-4 top-4 text-slate-500"/>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4 text-slate-500"
                >
                  {showPassword ? (
                    <FaEyeSlash/>
                  ) : (
                    <FaEye/>
                  )}
                </button>

              </div>

            </div>

            <div>

              <label className="text-slate-300">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 mt-2 text-white"
              >

                <option value="CUSTOMER">
                  Customer
                </option>

                <option value="AGENT">
                  Agent
                </option>

              </select>

            </div>

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold"
            >

              {loading
                ? "Creating..."
                : "Create Account"}

            </button>

            <p className="text-center text-slate-400">

              Already have an account?

              <Link
                to="/login"
                className="text-cyan-400 ml-2"
              >

                Login

              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Signup;