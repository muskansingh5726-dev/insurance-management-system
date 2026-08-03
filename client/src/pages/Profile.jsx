import { useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaShieldAlt,
  FaUserTie,
  FaCamera,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-5xl font-black text-white mb-10">
          My Profile
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Card */}

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center">

            <div className="relative w-40 h-40 mx-auto">

              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-6xl text-white font-black shadow-xl">

                {user?.name?.charAt(0).toUpperCase() || "A"}

              </div>

              <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition">

                <FaCamera />

              </button>

            </div>

            <h2 className="text-3xl font-bold text-white mt-6">

              {user?.name || "Administrator"}

            </h2>

            <p className="text-slate-400 mt-2">

              Insurance Administrator

            </p>

            <span className="inline-block mt-6 px-5 py-2 rounded-full bg-green-500/20 text-green-400 font-semibold">

              Active Account

            </span>

          </div>

          {/* Right Card */}

          <div className="lg:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-8">

            <h2 className="text-3xl font-bold text-white mb-8">

              Personal Information

            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-slate-800 rounded-2xl p-5">

                <div className="flex items-center gap-3 text-cyan-400 mb-3">

                  <FaUser />

                  <span>Full Name</span>

                </div>

                <p className="text-white text-lg font-semibold">

                  {user?.name || "Administrator"}

                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <div className="flex items-center gap-3 text-cyan-400 mb-3">

                  <FaEnvelope />

                  <span>Email</span>

                </div>

                <p className="text-white text-lg font-semibold">

                  {user?.email || "admin@gmail.com"}

                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <div className="flex items-center gap-3 text-cyan-400 mb-3">

                  <FaPhone />

                  <span>Phone</span>

                </div>

                <p className="text-white text-lg font-semibold">

                  +91 98********

                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5">

                <div className="flex items-center gap-3 text-cyan-400 mb-3">

                  <FaUserTie />

                  <span>Role</span>

                </div>

                <p className="text-white text-lg font-semibold">

                  Administrator

                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5 md:col-span-2">

                <div className="flex items-center gap-3 text-cyan-400 mb-3">

                  <FaShieldAlt />

                  <span>Account Security</span>

                </div>

                <p className="text-white">

                  Your account is protected with JWT authentication and
                  role-based authorization.

                </p>

              </div>

            </div>

            <button className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:scale-105 transition">

              Edit Profile

            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;