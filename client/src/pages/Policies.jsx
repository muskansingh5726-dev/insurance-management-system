import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

function Policies() {
  const policies = [
    {
      id: 101,
      name: "Health Insurance",
      premium: "₹15,000",
      status: "Active",
      coverage: "₹10 Lakhs",
    },
    {
      id: 102,
      name: "Car Insurance",
      premium: "₹8,500",
      status: "Pending",
      coverage: "₹5 Lakhs",
    },
    {
      id: 103,
      name: "Life Insurance",
      premium: "₹22,000",
      status: "Active",
      coverage: "₹25 Lakhs",
    },
  ];

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-5xl font-black text-white">
          Insurance Policies
        </h1>

        <p className="text-slate-400 mt-2 mb-10">
          View and manage all insurance policies
        </p>

        <div className="grid lg:grid-cols-3 gap-7">

          {policies.map((policy) => (

            <div
              key={policy.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-500 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl mb-6">

                <FaShieldAlt />

              </div>

              <h2 className="text-2xl font-bold text-white">
                {policy.name}
              </h2>

              <p className="text-slate-400 mt-3">
                Coverage: {policy.coverage}
              </p>

              <p className="text-white text-3xl font-bold mt-6">
                {policy.premium}
              </p>

              <div className="mt-6 flex justify-between items-center">

                <span
                  className={`px-4 py-2 rounded-full text-sm ${
                    policy.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {policy.status}
                </span>

                <button className="text-cyan-400 flex items-center gap-2">

                  <FaCheckCircle />

                  Details

                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Policies;