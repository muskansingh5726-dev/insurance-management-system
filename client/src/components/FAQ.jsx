import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I purchase an insurance policy?",
    answer:
      "Create an account, browse available plans, choose the one that suits your needs, and complete the payment securely.",
  },
  {
    question: "Can I renew my insurance online?",
    answer:
      "Yes. You can renew your policy anytime directly from your dashboard with just a few clicks.",
  },
  {
    question: "How do I file an insurance claim?",
    answer:
      "Go to the Claims section, submit the required documents, and track your claim status in real time.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use secure authentication and encrypted communication to protect your personal information.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-800">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to know about our insurance platform.
          </p>
        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md mb-5 overflow-hidden"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className="font-semibold text-lg">
                {faq.question}
              </span>

              {open === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;