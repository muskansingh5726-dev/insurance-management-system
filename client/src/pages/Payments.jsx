import { useState } from "react";
import {
  FaCreditCard,
  FaSearch,
  FaFileInvoiceDollar,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";

function Payments() {
  const [search, setSearch] = useState("");

  const payments = [
    {
      id: "PAY-1001",
      customer: "Rahul Sharma",
      policy: "HLT-10021",
      amount: "₹15,000",
      date: "02 Aug 2026",
      method: "UPI",
      status: "Paid",
    },
    {
      id: "PAY-1002",
      customer: "Priya Singh",
      policy: "CAR-20458",
      amount: "₹8,500",
      date: "31 Jul 2026",
      method: "Credit Card",
      status: "Pending",
    },
    {
      id: "PAY-1003",
      customer: "Amit Kumar",
      policy: "LIF-45892",
      amount: "₹22,000",
      date: "30 Jul 2026",
      method: "Net Banking",
      status: "Paid",
    },
    {
      id: "PAY-1004",
      customer: "Sneha Patel",
      policy: "MED-89754",
      amount: "₹12,750",
      date: "28 Jul 2026",
      method: "Debit Card",
      status: "Paid",
    },
  ];

  const filteredPayments = payments.filter((payment) =>
    payment.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-black text-white">
              Premium Payments
            </h1>

            <p className="text-slate-400 mt-2">
              Track premium payments and transaction history.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">

            <p className="text-slate-400 text-sm">
              Total Payments
            </p>

            <h2 className="text-white text-3xl font-bold">
              {payments.length}
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

          {filteredPayments.map((payment) => (

            <div
              key={payment.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-500 transition-all duration-300"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl">

                    <FaCreditCard />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {payment.customer}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      Payment ID : {payment.id}
                    </p>

                    <p className="text-cyan-400 mt-1">
                      Policy : {payment.policy}
                    </p>

                  </div>

                </div>

                <span
                  className={`px-5 py-2 rounded-full font-semibold ${
                    payment.status === "Paid"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {payment.status}
                </span>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div className="bg-slate-800 rounded-2xl p-5">

                  <p className="text-slate-400 text-sm">
                    Amount Paid
                  </p>

                  <h3 className="text-green-400 text-2xl font-bold mt-2">
                    {payment.amount}
                  </h3>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <div className="flex items-center gap-2 text-cyan-400">

                    <FaCalendarAlt />

                    <span>Payment Date</span>

                  </div>

                  <h3 className="text-white text-lg mt-3">
                    {payment.date}
                  </h3>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <div className="flex items-center gap-2 text-cyan-400">

                    <FaCheckCircle />

                    <span>Method</span>

                  </div>

                  <h3 className="text-white text-lg mt-3">
                    {payment.method}
                  </h3>

                </div>

              </div>

              <div className="flex justify-end mt-8">

                <button className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition">

                  <FaFileInvoiceDollar />

                  View Invoice

                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Payments;