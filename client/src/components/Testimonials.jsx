import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Health Insurance Customer",
    review:
      "InsureHub completely changed the way I manage my insurance. Everything is available in one secure dashboard.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Priya Verma",
    role: "Vehicle Insurance Customer",
    review:
      "The claim approval process was incredibly smooth and transparent. I received updates in real time.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    review:
      "Managing policies for my employees has become effortless. The platform is fast, secure and easy to use.",
    color: "from-orange-500 to-red-500",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Trusted By Professionals
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
            Thousands of customers trust InsureHub to manage their
            insurance with confidence.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]"
            >

              <div className="flex justify-between items-center">

                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                >
                  {item.name.charAt(0)}
                </div>

                <FaQuoteLeft
                  className="text-cyan-400 text-4xl opacity-30"
                />

              </div>

              <div className="flex gap-1 text-yellow-400 mt-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-slate-300 leading-8 mt-6 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-slate-400 mt-1">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;