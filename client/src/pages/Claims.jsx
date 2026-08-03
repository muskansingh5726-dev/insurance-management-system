import { useState } from "react";
import {
  FaFileInvoiceDollar,
  FaSearch,
  FaEye,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";

function Claims() {
  const [search, setSearch] = useState("");

  const claims = [
    {
      id: 201,
      customer: "Rahul Sharma",
      policy: "HLT-10021",
      amount: "₹45,000",
      date: "02 Aug 2026",
      status: "Approved",
    },
    {
      id: 202,
      customer: "Priya Singh",
      policy: "CAR-20458",
      amount: "₹18,500",
      date: "01 Aug 2026",
      status: "Pending",
    },
    {
      id: 203,
      customer: "Amit Kumar",
      policy: "LIF-45892",
      amount: "₹72,000",
      date: "28 Jul 2026",
      status: "Rejected",
    },
    {
      id: 204,
      customer: "Sneha Patel",
      policy: "HLT-78451",
      amount: "₹26,300",
      date: "25 Jul 2026",
      status: "Approved",
    },
  ];

  const filteredClaims = claims.filter((claim) =>
    claim.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-black text-white">
              Insurance Claims
            </h1>

            <p className="text-slate-400 mt-2">
              Review and manage submitted insurance claims.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">

            <p className="text-slate-400 text-sm">
              Total Claims
            </p>

            <h2 className="text-white text-3xl font-bold">
              {claims.length}
            </h2>

          </div>

        </div>

        <div className="relative mb-8">

          <FaSearch className="absolute left-5 top-5 text-slate-500" />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-14 pr-5 text-white outline-none focus:border-cyan-500"
          />

        </div>

        <div className="space-y-6">

          {filteredClaims.map((claim) => (

            <div
              key={claim.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-500 transition-all duration-300"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl">

                    <FaFileInvoiceDollar />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {claim.customer}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      Claim ID : #{claim.id}
                    </p>

                    <p className="text-cyan-400 mt-1">
                      Policy : {claim.policy}
                    </p>

                  </div>

                </div>

                <span
                  className={`px-5 py-2 rounded-full font-semibold ${
                    claim.status === "Approved"
                      ? "bg-green-500/20 text-green-400"
                      : claim.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {claim.status}
                </span>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div className="bg-slate-800 rounded-2xl p-5">

                  <p className="text-slate-400 text-sm">
                    Claim Amount
                  </p>

                  <h3 className="text-white text-2xl font-bold mt-2">
                    {claim.amount}
                  </h3>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <div className="flex items-center gap-2 text-cyan-400">

                    <FaCalendarAlt />

                    <span>Date Submitted</span>

                  </div>

                  <h3 className="text-white text-lg mt-3">
                    {claim.date}
                  </h3>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <div className="flex items-center gap-2 text-cyan-400">

                    <FaUser />

                    <span>Customer</span>

                  </div>

                  <h3 className="text-white text-lg mt-3">
                    {claim.customer}
                  </h3>

                </div>

              </div>

              <div className="flex justify-end mt-8">

                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition">

                  <FaEye />

                  View Details

                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Claims;