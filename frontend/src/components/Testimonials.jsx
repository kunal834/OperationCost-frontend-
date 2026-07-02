import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    treatment: "Knee Replacement",
    review:
      "Excellent experience with OperationCost. The entire surgery journey was smooth and hassle-free.",
  },
  {
    id: 2,
    name: "Priya Verma",
    treatment: "Hip Replacement",
    review:
      "Doctors and care coordinators were very supportive. Highly recommended.",
  },
  {
    id: 3,
    name: "Amit Singh",
    treatment: "Spine Surgery",
    review:
      "Transparent pricing and excellent medical support throughout the treatment.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted by thousands of happy patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.treatment}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;