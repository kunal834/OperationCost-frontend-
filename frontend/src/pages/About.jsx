import {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";
import { usePopup } from "../context/PopupContext"; // ✅ sirf named import, duplicate hataya

const stats = [
  { label: "Surgeries Performed", value: "500+", icon: Stethoscope },
  { label: "Years of Experience", value: "15+", icon: Award },
  { label: "Success Rate", value: "98%", icon: HeartPulse },
  { label: "Support Available", value: "24/7", icon: Clock },
];

const doctors = [
  {
    name: "Dr. Ramesh Kapoor",
    specialization: "Joint Replacement Surgeon",
    qualification: "MS Ortho, Fellowship in Joint Replacement",
    experience: "18 Years Experience",
    image: "/doctors/doctor1.jpg",
  },
  {
    name: "Dr. Anjali Mehta",
    specialization: "Spine Specialist",
    qualification: "MBBS, MS Ortho, Spine Fellowship",
    experience: "12 Years Experience",
    image: "/doctors/doctor2.jpg",
  },
  {
    name: "Dr. Vikram Sharma",
    specialization: "Sports Injury & ACL Surgeon",
    qualification: "MS Ortho, Diploma Sports Medicine",
    experience: "10 Years Experience",
    image: "/doctors/doctor3.jpg",
  },
];

const features = [
  {
    icon: Stethoscope,
    title: "Advanced Technology",
    desc: "Latest diagnostic and surgical equipment for accurate, minimally invasive treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Surgeons",
    desc: "Board-certified orthopedic surgeons with 10+ years of specialized experience.",
  },
  {
    icon: HeartPulse,
    title: "Personalized Care",
    desc: "Every treatment plan is tailored to the patient's condition and recovery goals.",
  },
  {
    icon: Award,
    title: "Affordable Treatment",
    desc: "Transparent pricing with insurance support and flexible payment options.",
  },
];

const testimonials = [
  {
    name: "Suresh Kumar",
    treatment: "Knee Replacement",
    text: "The care I received was excellent. Dr. Kapoor and his team made my recovery smooth and stress-free.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    treatment: "Spine Surgery",
    text: "Very professional staff and clean facility. I felt confident throughout my treatment journey.",
    rating: 5,
  },
];

const AboutUs = () => {
  const { openPopup } = usePopup(); // ✅ context se function le rahe hain, local state nahi

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full mb-4">
              <Users size={14} />
              ABOUT OPERATIONCOST
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Trusted Orthopedic Care,{" "}
              <span className="text-blue-600">Built Around You</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We are committed to providing world-class orthopedic treatment at
              affordable prices, combining advanced technology with
              compassionate, personalized care for every patient who walks
              through our doors.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={openPopup} // ✅ pehle: () => showPopup() jo error deta tha
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Book Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our hospital team"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 py-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Icon size={20} className="text-blue-600 mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl order-2 md:order-1 ring-1 ring-black/5">
          <img
            src="https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our facility"
            className="w-full h-72 object-cover"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            OUR JOURNEY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            What started as a small orthopedic clinic has grown into a trusted
            center for joint, spine, and sports injury treatment. Our journey
            has been driven by one simple goal — helping patients move freely
            and live pain-free.
          </p>
          <ul className="space-y-3">
            {[
              "Patient-first approach to every treatment",
              "Continuous investment in modern technology",
              "A team that treats every patient like family",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-600">
                <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} className="text-blue-600" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              OUR SPECIALISTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
              Meet Our Doctors
            </h2>
            <p className="text-gray-500 mt-2">
              Experienced specialists dedicated to your recovery
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-56 object-cover bg-gray-100"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">
                    {doc.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {doc.specialization}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {doc.qualification}
                  </p>
                  <p className="text-gray-400 text-xs mt-3 flex items-center gap-1 pt-3 border-t border-gray-100">
                    <Clock size={14} /> {doc.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            WHY US
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            Why Choose Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md hover:border-blue-100 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-6 shadow-lg relative"
              >
                <Quote
                  size={28}
                  className="text-blue-100 absolute top-5 right-5"
                />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{t.text}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 text-center bg-gradient-to-b from-white to-blue-50/40">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Ready to Start Your Recovery Journey?
        </h2>
        <p className="text-gray-500 mb-6">
          Book a free consultation with our orthopedic experts today.
        </p>
        <button
          onClick={openPopup} // ✅ ye pehle missing tha
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center gap-2"
        >
          Book Free Consultation
          <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
