import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShieldAlt,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg">

            <FaShieldAlt
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-white text-2xl font-extrabold tracking-wide">
              InsureHub
            </h1>

            <p className="text-xs text-slate-400">
              Smart Insurance Platform
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        {isLanding && (
          <div className="hidden lg:flex items-center gap-10">

            <a
              href="#services"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Services
            </a>

            <a
              href="#plans"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Plans
            </a>

            <a
              href="#faq"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              FAQ
            </a>

            <Link
              to="/login"
              className="text-slate-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition shadow-lg"
            >
              Get Started
            </Link>

          </div>
        )}

        {/* Mobile */}

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>

      </div>

      {menuOpen && isLanding && (

        <div className="lg:hidden bg-slate-900 border-t border-slate-700">

          <div className="flex flex-col p-6 gap-6">

            <a
              href="#services"
              className="text-slate-300"
            >
              Services
            </a>

            <a
              href="#plans"
              className="text-slate-300"
            >
              Plans
            </a>

            <a
              href="#faq"
              className="text-slate-300"
            >
              FAQ
            </a>

            <Link
              to="/login"
              className="text-slate-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-cyan-500 text-white rounded-xl py-3 text-center font-semibold"
            >
              Get Started
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;