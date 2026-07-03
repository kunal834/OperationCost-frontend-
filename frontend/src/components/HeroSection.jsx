import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Calendar,
  Play,
  Users,
  ShieldPlus,
  HeartHandshake,
  Trophy,
  PhoneCall,
} from "lucide-react";
import { usePopup } from "../context/PopupContext";

const features = [
  { icon: Users, title: "Expert Surgeons", subtitle: "Highly Experienced" },
  { icon: ShieldPlus, title: "Advanced Care", subtitle: "Latest Technology" },
  {
    icon: HeartHandshake,
    title: "Complete Support",
    subtitle: "Every Step of the Way",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: Trophy, value: "500+", label: "Successful Surgeries" },
  { icon: ShieldCheck, value: "50+", label: "Expert Doctors" },
  { icon: PhoneCall, value: "24/7", label: "Patient Support" },
];

const HeroSection = () => {
  const { openPopup } = usePopup();

  return (
    <section className="relative bg-[#eef4fc] py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* soft ambient glow blobs to match reference bg */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
            <ShieldCheck size={16} /> Trusted Orthopedic Care
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-5 sm:mt-6 leading-[1.05] tracking-tight">
            <span className="text-gray-900">Better Movement.</span>
            <br />
            <span className="text-blue-600">Better Life.</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mt-5 sm:mt-6 max-w-md">
            Advanced orthopedic treatments with expert surgeons, modern
            technology & compassionate care.
          </p>

          {/* Mini feature cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8">
            {features.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(30,64,175,0.12)]"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600 mb-2">
                  <Icon size={18} />
                </span>
                <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">
                  {title}
                </p>
                <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
            <button
              onClick={openPopup}
              className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/20 transition-colors"
            >
              <Calendar size={18} /> Book Free Consultation
            </button>
            <Link
              to="/about"
              className="cursor-pointer flex items-center gap-2 border border-blue-200 bg-white/60 backdrop-blur-sm text-blue-600 hover:bg-blue-50 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors"
            >
              <Play size={16} /> How We Help
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 border-t border-blue-900/10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm text-blue-600 shrink-0">
                  <Icon size={17} />
                </span>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                    {value}
                  </p>
                  <p className="text-gray-500 text-[11px] sm:text-xs">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image, blended into bg (no floating sticker look) */}
        <div className="relative h-75 sm:h-100  lg:h-137.5">
          <img
            src="/Hero Img/doctor2.png"
            alt="Doctor consulting patient"
            className="w-full h-full object-cover rounded-3xl"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%), radial-gradient(ellipse at center, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          />
          {/* left-edge fade so image blends into section bg instead of looking pasted */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#eef4fc] to-transparent rounded-l-3xl" />

          {/* Floating trust badge */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-700/95 backdrop-blur-sm text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-[80%] sm:max-w-xs flex items-start gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 shrink-0">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="font-bold text-sm sm:text-base leading-tight">
                Safe. Trusted. Proven Care.
              </p>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                Your health is our priority. We are with you, every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
