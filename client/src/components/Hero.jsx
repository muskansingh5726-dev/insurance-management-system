import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-36 pb-28">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full -top-32 -left-32"></div>

      <div className="absolute w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-5 py-2 rounded-full text-sm">

            <FaShieldAlt />

            India's Smart Insurance Platform

          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">

            Insurance

            <br />

            Reimagined

            <span className="text-cyan-400">.</span>

          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8">

            Manage customers, policies, premium payments,
            claims and documents from one beautiful dashboard
            built for speed, security and simplicity.

          </p>

          <div className="mt-10 flex gap-5">

            <Link
              to="/signup"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-xl"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Login
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>

              <h2 className="text-4xl font-black">
                10K+
              </h2>

              <p className="text-slate-400">
                Customers
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black">
                ₹50M+
              </h2>

              <p className="text-slate-400">
                Premium
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black">
                98%
              </h2>

              <p className="text-slate-400">
                Claims
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-8">
              Live Dashboard
            </h2>

            <div className="space-y-6">

              <div className="bg-slate-900 rounded-2xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-slate-400">
                    Total Customers
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    10,248
                  </h3>

                </div>

                <FaUsers
                  size={42}
                  className="text-cyan-400"
                />

              </div>

              <div className="bg-slate-900 rounded-2xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-slate-400">
                    Claim Success
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    98%
                  </h3>

                </div>

                <FaCheckCircle
                  size={42}
                  className="text-green-400"
                />

              </div>

              <div className="bg-slate-900 rounded-2xl p-5 flex justify-between items-center">

                <div>

                  <p className="text-slate-400">
                    Premium Growth
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    +18%
                  </h3>

                </div>

                <FaChartLine
                  size={42}
                  className="text-yellow-400"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;