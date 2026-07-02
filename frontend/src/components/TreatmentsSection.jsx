import { Link } from "react-router-dom";
import treatments from "../data/treatments";

const TreatmentsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our Orthopedic Treatments
          </h2>

          <p className="text-gray-600 mt-4">
            Advanced orthopedic treatments with expert care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {treatments.map((item) => (
            <Link
              key={item.id}
              to={`/treatment/${item.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-blue-600 mt-3 font-semibold">
                  Learn More →
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;