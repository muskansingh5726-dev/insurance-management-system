import {
  FaShieldAlt,
  FaFileMedical,
  FaMoneyCheckAlt,
  FaFolderOpen,
  FaChartLine,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt size={42} />,
    title: "Policy Management",
    description:
      "Create, manage and renew insurance policies with a seamless digital workflow.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaFileMedical size={42} />,
    title: "Claims Processing",
    description:
      "Submit and monitor claims with real-time approval tracking.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <FaMoneyCheckAlt size={42} />,
    title: "Premium Payments",
    description:
      "Secure online premium payments with complete transaction history.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaFolderOpen size={42} />,
    title: "Document Vault",
    description:
      "Upload and manage insurance documents securely in one place.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <FaChartLine size={42} />,
    title: "Analytics",
    description:
      "Visualize insurance growth, revenue and claim statistics instantly.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <FaLock size={42} />,
    title: "Enterprise Security",
    description:
      "JWT authentication and role-based authorization for maximum protection.",
    color: "from-indigo-500 to-slate-700",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-cyan-400 font-semibold tracking-widest uppercase">
            What We Offer
          </span>

          <h2 className="text-5xl font-black mt-5">
            Powerful Insurance Solutions
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto">
            Everything required to manage modern insurance operations
            from customer onboarding to claims settlement.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition-all duration-500 hover:-translate-y-3"
            >

              <div
                className={`h-2 bg-gradient-to-r ${service.color}`}
              ></div>

              <div className="p-8">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-8 text-white shadow-xl group-hover:scale-110 transition`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-8">
                  {service.description}
                </p>

                <button
                  className="mt-8 text-cyan-400 font-semibold hover:translate-x-2 transition"
                >
                  Learn More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;