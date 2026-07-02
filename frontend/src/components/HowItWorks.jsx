import {
  CalendarCheck,
  Stethoscope,
  Activity,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <CalendarCheck size={40} />,
    title: "Book Consultation",
    desc: "Schedule a free consultation with our care experts.",
  },
  {
    id: 2,
    icon: <Stethoscope size={40} />,
    title: "Meet Specialist",
    desc: "Consult with experienced orthopedic surgeons.",
  },
  {
    id: 3,
    icon: <Activity size={40} />,
    title: "Treatment & Surgery",
    desc: "Receive advanced treatment using modern techniques.",
  },
  {
    id: 4,
    icon: <HeartHandshake size={40} />,
    title: "Recovery Support",
    desc: "Get complete post-surgery care and recovery support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="text-gray-600 mt-4">
            Your journey to better health in 4 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex justify-center text-blue-600 mb-5">
                {step.icon}
              </div>

              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 font-bold">
                {step.id}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;