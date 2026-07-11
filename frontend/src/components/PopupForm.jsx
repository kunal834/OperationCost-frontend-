import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import axios from "axios";
import { BASE_URL } from "../config/url";
import { popupOpen, closePopup, scheduleAutoOpen } from "../stores/popup";

import {
  X,
  User,
  Phone,
  Stethoscope,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const treatments = [
  "Knee Replacement",
  "Hip Replacement",
  "Spine Surgery",
  "ACL Reconstruction",
  "Sports Injury",
  "Fracture Care",
  "Arthritis Treatment",
];

const PopupForm = () => {
  const showPopup = useStore(popupOpen);
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    treatment: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    return scheduleAutoOpen();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.patientName.trim()) {
      newErrors.patientName = "Patient name is required";
    }
    if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Enter a valid 10-digit number";
    }
    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await axios.post(
        `${BASE_URL}/api/appointments/createAppointment`,
        formData,
      );

      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ patientName: "", phoneNumber: "", treatment: "" });
        setIsSuccess(false);
        closePopup();
      }, 1500);
    } catch (error) {
      console.log(error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center px-4 animate-in fade-in duration-200"
      onClick={() => closePopup()}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => closePopup()}
          className="absolute cursor-pointer top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 size={56} className="text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Request Sent!</h3>
            <p className="text-gray-500 mt-1">
              Our care expert will call you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                100% FREE • NO OBLIGATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Book Your Free Consultation
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Fill your details and our care expert will call you shortly.
              </p>
            </div>

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
                    className={`w-full border rounded-xl pl-11 pr-4 py-3 outline-none transition-colors focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${
                      errors.patientName ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
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
                    className={`w-full border rounded-xl pl-11 pr-4 py-3 outline-none transition-colors focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${
                      errors.phoneNumber ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Stethoscope
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className={`w-full appearance-none border rounded-xl pl-11 pr-4 py-3 outline-none transition-colors focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${
                      errors.treatment ? "border-red-400" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Treatment</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.treatment && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.treatment}
                  </p>
                )}
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm text-center">
                  {errors.submit}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Free Consultation"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to be contacted by our team.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
