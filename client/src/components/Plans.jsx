import {
  FaCheckCircle,
  FaCrown,
  FaRocket,
  FaBuilding,
} from "react-icons/fa";

const plans = [
  {
    icon: <FaRocket size={38} />,
    name: "Starter",
    price: "₹499",
    color: "from-cyan-500 to-blue-600",
    features: [
      "Health Insurance",
      "Basic Dashboard",
      "Premium Tracking",
      "Email Support",
    ],
  },
  {
    icon: <FaCrown size={40} />,
    name: "Professional",
    price: "₹999",
    popular: true,
    color: "from-purple-500 to-pink-500",
    features: [
      "Everything in Starter",
      "Claim Management",
      "Document Upload",
      "Priority Support",
      "Analytics Dashboard",
    ],
  },
  {
    icon: <FaBuilding size={38} />,
    name: "Enterprise",
    price: "Custom",
    color: "from-orange-500 to-red-500",
    features: [
      "Unlimited Policies",
      "Advanced Reports",
      "Multi User Access",
      "Role Management",
      "24×7 Support",
    ],
  },
];

function Plans() {
  return (
    <section
      id="plans"
      className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            Pricing
          </span>

          <h2 className="text-5xl font-black mt-6">
            Choose Your Perfect Plan
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Flexible insurance solutions for individuals,
            families and enterprises.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden border transition duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
              ${
                plan.popular
                  ? "border-cyan-400 scale-105"
                  : "border-slate-700"
              }`}
            >

              {plan.popular && (

                <div className="absolute top-5 right-5 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>

              )}

              <div
                className={`bg-gradient-to-r ${plan.color} p-8 text-center`}
              >

                <div className="flex justify-center mb-5">
                  {plan.icon}
                </div>

                <h3 className="text-3xl font-black">
                  {plan.name}
                </h3>

                <p className="text-5xl font-black mt-6">
                  {plan.price}
                </p>

                <span className="text-white/80">
                  /month
                </span>

              </div>

              <div className="bg-slate-900 p-8">

                <div className="space-y-5">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-4"
                    >

                      <FaCheckCircle
                        className="text-cyan-400"
                      />

                      <span>
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  className={`w-full mt-10 py-4 rounded-2xl font-bold bg-gradient-to-r ${plan.color} hover:scale-105 transition`}
                >
                  Get Started
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Plans;