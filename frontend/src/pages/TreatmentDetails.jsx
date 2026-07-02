import { useParams } from "react-router-dom";
import treatmentDetails from "../data/treatmentDetails";

const TreatmentDetails = () => {
  const { id } = useParams();

  const treatment = treatmentDetails[id];

  if (!treatment) {
    return <h1 className="text-center text-4xl mt-20">Treatment Not Found</h1>;
  }

  return (
    <div>
      {/* Hero */}

      <section className="relative h-[500px]">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">{treatment.title}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Description */}

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What is {treatment.title}?
          </h2>

          <p className="text-gray-600 text-lg">{treatment.description}</p>
        </section>

        {/* Symptoms */}

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Symptoms</h2>

          <ul className="list-disc pl-6 space-y-2">
            {treatment.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </section>

        {/* Causes */}

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Causes</h2>

          <ul className="list-disc pl-6 space-y-2">
            {treatment.causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
        </section>

        {/* Treatment */}

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Treatment</h2>

          <p className="text-gray-600 text-lg">{treatment.treatment}</p>
        </section>

        {/* Recovery */}

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Recovery Timeline</h2>

          <p className="text-gray-600 text-lg">{treatment.recovery}</p>
        </section>

        {/* Video */}

        <section>
          <h2 className="text-3xl font-bold mb-6">Watch Video</h2>

          <iframe
            className="w-full h-[500px] rounded-3xl"
            src={treatment.youtube}
            title="Treatment Video"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default TreatmentDetails;
