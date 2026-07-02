import { useState } from "react";
import axios from "axios";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  User,
  MessageSquare,
  ChevronDown,
  Loader2,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "care@operationcost.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Mon - Sat: 9:00 AM - 8:00 PM",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "SCO 123, Sector 34-A, Chandigarh",
  },
];

const cities = ["Chandigarh", "Mohali", "Panchkula", "Delhi NCR", "Other"];

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.patientName.trim())
      newErrors.patientName = "Name is required";
    if (formData.phoneNumber.length !== 10)
      newErrors.phoneNumber = "Enter a valid 10-digit number";
    if (!formData.city) newErrors.city = "Please select a city";
    if (!formData.message.trim())
      newErrors.message = "Please type your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // form handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await axios.post(`http://localhost:3000/api/appointments/contact-us`, {
        patientName: formData.patientName,
        phoneNumber: formData.phoneNumber,
        patientCity: formData.city,
        patientMessage: formData.message,
      });
      setIsSuccess(true);
      setFormData({ patientName: "", phoneNumber: "", city: "", message: "" });
    } catch (error) {
      console.log(error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);

      setFormData({ patientName: "", phoneNumber: "", city: "", message: "" });
      setTimeout(() => setIsSuccess(false), 2000);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="text-center pt-16 pb-10 px-4">
        <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          We're Here To Help
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Questions about a treatment or need to book a consultation? Reach out
          and our care team will get back to you shortly.
        </p>
      </section>

      {/* Split Section: Info card + Form card */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Contact Info Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Contact Information
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Have questions or need help with your treatment? Our team is always
            ready to assist you with professional, reliable support. Feel free
            to reach out anytime.
          </p>

          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, title, value }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon size={19} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    {title}
                  </p>
                  <p className="text-gray-900 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-red-600 text-sm font-medium">
            <PhoneCall size={16} />
            Emergency? Call{" "}
            <a href="tel:+919876543210" className="underline font-bold">
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Right: Form Card (dark navy) */}
        <div className="bg-[#0b1f3a] rounded-3xl shadow-xl p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 size={56} className="text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white">Query Submitted!</h3>
              <p className="text-blue-200 mt-1 text-sm">
                Our care coordinator will call you shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Please Submit Your Query
              </h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      name="patientName"
                      placeholder="Patient Name"
                      value={formData.patientName}
                      onChange={handleChange}
                      className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3 outline-none text-sm transition-colors focus:ring-2 focus:ring-orange-400/40 ${
                        errors.patientName
                          ? "border-red-400"
                          : "border-transparent"
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-red-300 text-xs mt-1 ml-1">
                      {errors.patientName}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Mobile Number"
                      value={formData.phoneNumber}
                      maxLength={10}
                      onChange={handleChange}
                      onInput={(e) => {
                        e.target.value = e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 10);
                      }}
                      className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3 outline-none text-sm transition-colors focus:ring-2 focus:ring-orange-400/40 ${
                        errors.phoneNumber
                          ? "border-red-400"
                          : "border-transparent"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-300 text-xs mt-1 ml-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full appearance-none bg-white border rounded-xl pl-4 pr-10 py-3 outline-none text-sm transition-colors focus:ring-2 focus:ring-orange-400/40 ${
                        formData.city ? "text-gray-900" : "text-gray-400"
                      } ${errors.city ? "border-red-400" : "border-transparent"}`}
                    >
                      <option value="">Select City</option>
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                  {errors.city && (
                    <p className="text-red-300 text-xs mt-1 ml-1">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-3 text-gray-400"
                    />
                    <textarea
                      name="message"
                      placeholder="Type your message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3 outline-none text-sm resize-none transition-colors focus:ring-2 focus:ring-orange-400/40 ${
                        errors.message ? "border-red-400" : "border-transparent"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-300 text-xs mt-1 ml-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {errors.submit && (
                  <p className="text-red-300 text-sm text-center">
                    {errors.submit}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Your Query"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
