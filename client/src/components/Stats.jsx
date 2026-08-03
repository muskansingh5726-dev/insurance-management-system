import {
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaCheckCircle,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    title: "Active Customers",
    value: "10,248",
    growth: "+18%",
    icon: <FaUsers />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Insurance Policies",
    value: "2,560",
    growth: "+12%",
    icon: <FaFileContract />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Premium Collected",
    value: "₹50M",
    growth: "+25%",
    icon: <FaMoneyBillWave />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Claims Approved",
    value: "98%",
    growth: "+7%",
    icon: <FaCheckCircle />,
    color: "from-orange-500 to-red-500",
  },
];

function Stats() {
  return (
    <section className="bg-slate-900 py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Platform Insights
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Trusted by Thousands
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Our platform continues to grow by delivering secure,
            fast and reliable insurance management.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-500 hover:-translate-y-2"
            >

              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl text-white shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex items-center gap-2 text-green-400 font-bold">

                    <FaArrowUp />

                    {item.growth}

                  </div>

                </div>

                <h2 className="text-5xl font-black text-white mt-8">
                  {item.value}
                </h2>

                <p className="text-slate-400 mt-3">
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;