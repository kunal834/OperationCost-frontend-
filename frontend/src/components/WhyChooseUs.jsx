import {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Stethoscope size={40} />,
    title: "Expert Surgeons",
    desc: "Highly experienced orthopedic specialists.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Cashless Insurance",
    desc: "Hassle-free cashless treatment facility.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Complete Care Support",
    desc: "Dedicated care coordinators for every patient.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Advanced Technology",
    desc: "Latest minimally invasive surgical techniques.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose OperationCost?
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted by thousands of patients across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-3xl p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;