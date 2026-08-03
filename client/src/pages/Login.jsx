import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";
import API from "../api/client";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      loginUser(res.data);

      navigate("/dashboard");

    } catch (err) {

      setError(
        err.response?.data?.message ||
          "Invalid email or password."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 items-center justify-center p-12">

        <div className="text-white max-w-md">

          <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center mb-8">

            <FaShieldAlt className="text-5xl" />

          </div>

          <h1 className="text-5xl font-black leading-tight">
            InsureHub
          </h1>

          <p className="mt-6 text-xl leading-9 text-cyan-100">
            Securely manage customers, policies, claims and premium
            payments from one intelligent platform.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center px-8">

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <h2 className="text-4xl font-black text-white">
            Welcome Back
          </h2>

          <p className="text-slate-400 mt-2">
            Login to continue
          </p>

          {error && (
            <div className="mt-6 bg-red-500/20 text-red-400 p-3 rounded-xl">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 mt-8"
          >

            <div>

              <label className="text-slate-300">
                Email
              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-4 top-4 text-slate-500" />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-500"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-300">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-4 top-4 text-slate-500" />

                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white outline-none focus:border-cyan-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4 text-slate-500"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <label className="text-slate-400 flex items-center gap-2">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="text-cyan-400"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-xl font-bold text-white hover:scale-[1.02] transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-slate-400">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-cyan-400"
              >
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;