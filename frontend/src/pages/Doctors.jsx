import DoctorSection from "../components/DoctorSection";

const Doctors = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-10">
        Our Expert Doctors
      </h1>

      <p className="text-center text-gray-600">
        Here you can show all 8-9 doctors with complete details.
      </p>

      <DoctorSection />
    </div>
  );
};

export default Doctors;
