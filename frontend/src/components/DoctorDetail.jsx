import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  CalendarCheck,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Stethoscope,
  Languages as LanguagesIcon,
  Phone,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import { usePopup } from "../context/PopupContext";
import { doctors } from "../data/doctors";

const CLINIC_PHONE = "918882892502";

const AccordionSection = ({
  title,
  intro,
  items,
  defaultOpen = true,
  icon: Icon,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left py-5 sm:py-6 group"
      >
        <div className="flex items-center gap-3 min-w-0">
          {Icon && (
            <span className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Icon size={18} />
            </span>
          )}
          <h2 className="text-base sm:text-xl font-bold text-gray-900 truncate">
            {title}
          </h2>
        </div>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-50 text-blue-900 shrink-0 transition-colors">
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 sm:pb-6">
            {intro && (
              <p className="text-sm sm:text-base text-gray-600 mb-4">{intro}</p>
            )}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorDetail = () => {
  const { id } = useParams();
  const { openPopup } = usePopup();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
        <p className="text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
          RECORD NOT FOUND
        </p>
        <h1 className="text-2xl font-bold text-gray-900">
          We couldn't find that doctor
        </h1>
        <Link
          to="/doctors"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
        >
          Back to all doctors
        </Link>
      </div>
    );
  }

  const similarDoctors = doctors
    .filter((d) => d.id !== doctor.id && d.speciality === doctor.speciality)
    .slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Hi, I want to book an appointment with ${doctor.name} Doctor-ID=${doctor.id} Hospital-ID=2 Tier-ID=2`,
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <Link
          to="/doctors"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft size={16} /> All Doctors
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4">
        {/* Main profile card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Photo — first on mobile, right on desktop */}
          <div className="lg:col-span-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[16/10] md:aspect-[4/5] max-h-64 md:max-h-none">
              <img
                src={doctor.image}
                alt={doctor.name}
                loading="lazy"
                decoding="async"
                width={480}
                height={600}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-3 flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5 text-sm">
              <span className="text-gray-500">Consultation Fee</span>
              <span className="font-bold text-gray-900">₹{doctor.fee}</span>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 lg:order-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900 wrap-words">
                {doctor.name}
              </h1>
              <ShieldCheck
                size={20}
                className="text-blue-500 fill-blue-100 shrink-0"
              />
            </div>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {doctor.speciality}
              {doctor.location?.address && ` in ${doctor.location.address}`}
            </p>
            <p className="text-gray-500 mt-1 text-sm">{doctor.qualification}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5">
              <div className="flex items-center gap-2">
                <span className="bg-purple-50 text-purple-600 p-1.5 rounded-lg">
                  <Stethoscope size={16} />
                </span>
                <p className="font-bold text-gray-900 text-sm">
                  {doctor.experience}
                </p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="bg-green-50 text-green-600 p-1.5 rounded-lg">
                  <Star size={16} className="fill-green-600" />
                </span>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">
                    {doctor.rating} Rating
                  </p>
                  <p className="text-gray-500 text-xs">
                    ({doctor.reviews} reviews)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-amber-50 border border-amber-100 text-amber-800 text-xs sm:text-sm px-4 py-2.5 rounded-xl inline-block">
              {Math.floor(doctor.reviews / 8)} patients enquired about{" "}
              {doctor.name.split(" ").slice(-1)[0]} in the last hour
            </div>

            <div className="mt-5 bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
                  <Clock size={15} /> Available Timings
                </p>
                {doctor.location && (
                  <span className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                    <MapPin size={14} /> View Location
                  </span>
                )}
              </div>
              <div className="bg-white rounded-xl px-4 py-3 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-gray-900">
                  {doctor.timings.days}
                </span>
                <span className="text-gray-500">{doctor.timings.time}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => openPopup()}
                disabled={!doctor.available}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                <CalendarCheck size={17} />
                {doctor.available ? "Book Appointment" : "Fully Booked"}
              </button>
              <a
                href={`tel:+${CLINIC_PHONE}`}
                className="flex items-center gap-2 border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                <Phone size={17} /> Call Clinic
              </a>
              <a
                href={`https://wa.me/${CLINIC_PHONE}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-green-200 text-green-700 hover:bg-green-50 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-4 italic">
              Disclaimer: Consultation fees and timings are indicative and may
              vary. Please confirm at the time of booking.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-10 mt-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            About {doctor.name}
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {doctor.about}
          </p>
          <div className="flex items-center gap-2 mt-5 text-sm text-gray-600">
            <LanguagesIcon size={16} className="text-gray-400" /> Speaks{" "}
            {doctor.languages.join(", ")}
          </div>
        </div>

        {/* Specialities + Education — accordion style */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-5 sm:px-8 mt-6">
          <AccordionSection
            title={`${doctor.name.replace(/^Dr\.?\s*/i, "")}'s Specialities & Expertise`}
            intro={`${doctor.name} performs major interventions in the following specialities:`}
            items={doctor.services}
            icon={Stethoscope}
          />
          <AccordionSection
            title="Education & Achievements"
            items={doctor.education}
            icon={GraduationCap}
          />
        </div>

        {/* Location */}
        {doctor.location && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8 mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" /> Clinic Location
            </h2>
            <p className="text-sm font-semibold text-gray-800">
              {doctor.location.clinic}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {doctor.location.address}
            </p>
          </div>
        )}

        {/* Similar doctors */}
        {similarDoctors.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Other {doctor.speciality}s
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {similarDoctors.map((d) => (
                <Link
                  key={d.id}
                  to={`/doctors/${d.id}`}
                  className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    decoding="async"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {d.name}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Star
                        size={11}
                        className="fill-yellow-500 text-yellow-500"
                      />{" "}
                      {d.rating} · {d.experience.split(" ")[0]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetail;
