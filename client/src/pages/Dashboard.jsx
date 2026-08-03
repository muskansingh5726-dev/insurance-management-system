import { useEffect, useState } from "react";
import API from "../api/client";
import {
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaArrowUp,
  FaCalendarAlt,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";
import RevenueChart from "../components/RevenueChart";
import RecentActivities from "../components/RecentActivities";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
  customers: 0,
  policies: 0,
  claims: 0,
  revenue: 0,
});

useEffect(() => {
  fetchDashboard();
}, []);

async function fetchDashboard() {
  try {
    const res = await API.get("/dashboard");

    setStats(res.data);

  } catch (err) {
  }
}

 const cards = [
  {
    title: "Customers",
    value: stats.customers,
    growth: "+18%",
    color: "from-cyan-500 to-blue-600",
    icon: <FaUsers />,
  },
  {
    title: "Policies",
    value: stats.policies,
    growth: "+12%",
    color: "from-purple-500 to-pink-500",
    icon: <FaFileContract />,
  },
  {
    title: "Revenue",
    value: `₹${stats.revenue}`,
    growth: "+25%",
    color: "from-green-500 to-emerald-600",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Claims",
    value: stats.claims,
    growth: "+7%",
    color: "from-orange-500 to-red-500",
    icon: <FaFileInvoiceDollar />,
  },
];
  <div className="grid lg:grid-cols-2 gap-7 mt-10">

  <RevenueChart />

  <RecentActivities />

</div>

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8 lg:p-10">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">

          <div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
              Welcome Back 👋
            </h1>

            <p className="text-slate-400 mt-2 text-base">
              Hello, <span className="text-white font-semibold">
                {user?.name || "Admin"}
              </span>
            </p>

          </div>

          <div className="mt-6 lg:mt-0 bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 flex items-center gap-3">

            <FaCalendarAlt className="text-cyan-400" />

            <div>

              <p className="text-sm text-slate-400">
                Today
              </p>

              <p className="text-white font-medium">
                {new Date().toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">

          {cards.map((card, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl border border-slate-800 hover:border-cyan-500 transition duration-300 hover:-translate-y-2 shadow-xl"
            >

              <div
                className={`h-2 rounded-t-3xl bg-gradient-to-r ${card.color}`}
              />

              <div className="p-7">

                <div className="flex justify-between items-start">

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-2xl text-white shadow-lg`}
                  >
                    {card.icon}
                  </div>

                  <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">

                    <FaArrowUp />

                    {card.growth}

                  </div>

                </div>

                <h2 className="text-4xl font-bold text-white mt-8">
                  {card.value}
                </h2>

                <p className="text-slate-400 mt-2 text-base">
                  {card.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Dashboard;