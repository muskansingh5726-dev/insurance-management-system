import {
  FaUserPlus,
  FaFileContract,
  FaCloudUploadAlt,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Account",
    description:
      "Register securely and access your personalized insurance dashboard.",
    color: "bg-cyan-500",
  },
  {
    icon: <FaFileContract />,
    title: "Choose a Policy",
    description:
      "Browse insurance plans and select the one that best suits your needs.",
    color: "bg-blue-600",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Upload Documents",
    description:
      "Submit required documents quickly with secure cloud storage.",
    color: "bg-purple-600",
  },
  {
    icon: <FaSearch />,
    title: "Track Everything",
    description:
      "Monitor policy status, payments and claim progress in real time.",
    color: "bg-orange-500",
  },
  {
    icon: <FaCheckCircle />,
    title: "Claim Approved",
    description:
      "Receive updates instantly and enjoy a hassle-free claim settlement process.",
    color: "bg-green-500",
  },
];

function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Process
          </span>

          <h2 className="text-5xl font-black mt-5">
            How It Works
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Get insured in just five simple steps.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-700"></div>

          <div className="space-y-12">

            {steps.map((step, index) => (

              <div
                key={index}
                className="relative flex items-start gap-8 group"
              >

                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl shadow-xl z-10 group-hover:scale-110 transition duration-300`}
                >
                  {step.icon}
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex-1 hover:border-cyan-500 transition duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">

                  <span className="text-cyan-400 font-semibold">
                    STEP {index + 1}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;