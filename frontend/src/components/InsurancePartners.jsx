import { ShieldCheck, Zap } from "lucide-react";
import { usePopup } from "../context/PopupContext";

const insuranceCompanies = [
  {
    id: 1,
    name: "Star Health",
    logo: "https://logowik.com/content/uploads/images/t_star-health-and-allied-insurance4678.logowik.com.webp",
  },
  {
    id: 2,
    name: "HDFC ERGO",
    logo: "https://logowik.com/content/uploads/images/hdfc-ergo-general-insurance-company9922.logowik.com.webp",
  },
  {
    id: 3,
    name: "ICICI Lombard",
    logo: "https://img.pristyncare.com/new_brand/elements/updtHome/iciciPartner.png",
  },
  {
    id: 4,
    name: "Care Health",
    logo: "https://img.pristyncare.com/new_brand/elements/updtHome/carepartner.png",
  },
  {
    id: 5,
    name: "Niva Bupa",
    logo: "https://img.pristyncare.com/new_brand/elements/updtHome/nivaPartner.png",
  },
  {
    id: 6,
    name: "Aditya Birla Health",
    logo: "https://imgs.search.brave.com/po8IoIpPGwJmFmprM9FEsGQ_H5q9mCZ8MKlGFrz2RHw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQxLzEvYWRpdHlh/LWJpcmxhLWNhcGl0/YWwtbG9nby1wbmdf/c2Vla2xvZ28tNDEx/MzExLnBuZw",
  },
];

const InsurancePartners = () => {
  const { openPopup } = usePopup();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy + CTAs */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 mb-4">
              <ShieldCheck size={14} /> Cashless Insurance Support
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Cashless Surgery on 100+ Insurers
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              Don't let finances delay your health. Our dedicated insurance team
              handles all paperwork for a hassle-free cashless experience.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => openPopup()}
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm sm:text-base transition-colors"
              >
                Check Eligibility
              </button>
              <button
                onClick={() => openPopup()}
                className="cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-6 py-3 rounded-xl text-sm sm:text-base transition-colors border border-blue-200"
              >
                No-Cost EMI Plans
              </button>
            </div>
          </div>

          {/* Right: dark card with logos */}
          <div className="bg-blue-800 rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-5">
              Featured Insurance Partners
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {insuranceCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white rounded-xl h-20 flex items-center justify-center px-4 hover:scale-[1.03] transition-transform"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className="max-h-20  max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-7">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 shrink-0">
                <Zap size={20} className="text-white" fill="white" />
              </span>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">
                  30-Minute Approval
                </p>
                <p className="text-blue-200 text-xs sm:text-sm">
                  Express insurance processing for emergencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
