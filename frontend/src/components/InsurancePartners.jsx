const insuranceCompanies = [
  {
    id: 1,
    name: "Star Health",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Star_Health_and_Allied_Insurance_logo.svg/512px-Star_Health_and_Allied_Insurance_logo.svg.png",
  },
  {
    id: 2,
    name: "Niva Bupa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Niva_Bupa_Logo.png",
  },
  {
    id: 3,
    name: "HDFC ERGO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/HDFC_ERGO_Logo.png",
  },
  {
    id: 4,
    name: "ICICI Lombard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/ICICI_Lombard_Logo.png",
  },
  {
    id: 5,
    name: "Care Health",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Care_Health_Insurance_Logo.png",
  },
  {
    id: 6,
    name: "Aditya Birla Health",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Aditya_Birla_Health_Insurance_Logo.png",
  },
];

const InsurancePartners = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Cashless Insurance Support
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Insurance Partners
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are associated with leading health insurance providers to ensure
            a smooth and hassle-free cashless treatment experience for our
            patients.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid  grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {insuranceCompanies.map((company) => (
            <div
              key={company.id}
              className="group flex cursor-pointer h-36 items-center justify-center rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-14 w-32 object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            Don't see your insurance provider?{" "}
            <span className="font-semibold text-blue-600">
              Contact our support team
            </span>{" "}
            to verify your coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
