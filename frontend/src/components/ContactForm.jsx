import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/url";
import {
  Phone,
  User,
  MessageSquare,
  ChevronDown,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const cities = ["Delhi", "Noida", "Jaipur", "Gurgaon", "NCR", "Others"];

const ContactForm = () => {
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await axios.post(`${BASE_URL}/api/appointments/contact-us`, {
        patientName: formData.patientName,
        phoneNumber: formData.phoneNumber,
        patientCity: formData.city,
        patientMessage: formData.message,
      });
      setIsSuccess(true);
    } catch (error) {
      console.log(error.response);
      setErrors({
        submit:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setFormData({ patientName: "", phoneNumber: "", city: "", message: "" });
      setTimeout(() => setIsSuccess(false), 2000);
    }
  };

  return (
    <div className="bg-brand-950 rounded-3xl shadow-xl p-8">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <CheckCircle2 size={56} className="text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white">Query Submitted!</h3>
          <p className="text-brand-200 mt-1 text-sm">
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  name="patientName"
                  placeholder="Patient Name"
                  value={formData.patientName}
                  onChange={handleChange}
                  className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3 outline-none text-sm transition-colors focus:ring-2 focus:ring-accent-500/40 ${
                    errors.patientName ? "border-red-400" : "border-transparent"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
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
                  className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3 outline-none text-sm transition-colors focus:ring-2 focus:ring-accent-500/40 ${
                    errors.phoneNumber ? "border-red-400" : "border-transparent"
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
                  className={`w-full appearance-none bg-white border rounded-xl pl-4 pr-10 py-3 outline-none text-sm transition-colors focus:ring-2 focus:ring-accent-500/40 ${
                    formData.city ? "text-neutral-900" : "text-neutral-400"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                />
              </div>
              {errors.city && (
                <p className="text-red-300 text-xs mt-1 ml-1">{errors.city}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-3 text-neutral-400"
                />
                <textarea
                  name="message"
                  placeholder=" Type your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-white border rounded-xl pl-11 pr-4 py-3 outline-none text-sm resize-none transition-colors focus:ring-2 focus:ring-accent-500/40 ${
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
              className="w-full cursor-pointer bg-accent-600 hover:bg-accent-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-600/30 disabled:bg-accent-300 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
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
  );
};

export default ContactForm;
