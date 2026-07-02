import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation free?",
    answer:
      "Yes, OperationCost provides a free consultation with our experienced care experts to understand your condition and recommend the best treatment options.",
  },
  {
    question: "Do you provide cashless insurance?",
    answer:
      "Yes. We support cashless insurance through leading insurance providers across our partner hospitals in India.",
  },
  {
    question: "How long does recovery take after knee replacement?",
    answer:
      "Most patients recover within 4–6 weeks, although complete recovery depends on age, health condition, and physiotherapy.",
  },
  {
    question: "Do you provide post-surgery support?",
    answer:
      "Absolutely. Our care coordinators stay connected with you before surgery, during hospitalization, and throughout your recovery.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes. You can book an appointment online, request a callback, or contact us directly via WhatsApp.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Get quick answers to the most common questions about our treatments,
            insurance support, appointments, and recovery process.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-blue-200 bg-white shadow-xl"
                  : "border-slate-200 bg-white hover:border-blue-100 hover:shadow-lg"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3
                  className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-blue-700" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </h3>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                    openIndex === index
                      ? "rotate-180 bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p className="text-slate-500">
            Still have questions?{" "}
            <span className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700">
              Contact our care team
            </span>{" "}
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
