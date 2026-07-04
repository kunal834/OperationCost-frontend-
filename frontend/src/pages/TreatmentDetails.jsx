import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Hospital,
  ShieldCheck,
} from "lucide-react";
import { useParams } from "react-router-dom";
import treatmentDetails from "../data/treatments/index.js";
import { useState } from "react";
import { usePopup } from "../context/PopupContext";

const TreatmentDetails = () => {
  const { id } = useParams();
  const { openPopup } = usePopup();
  const treatment = treatmentDetails[id];

  const [openFaq, setOpenFaq] = useState(null);

  if (!treatment) {
    return (
      <h1 className="py-24 text-center text-4xl font-bold">
        Treatment Not Found
      </h1>
    );
  }

  return (
    <div className="bg-slate-50">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">
          <div className="grid w-full gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div className="text-white">
              {/* Breadcrumb */}

              <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
                <span>Home</span>

                <ChevronRight size={16} />

                <span>Treatments</span>

                <ChevronRight size={16} />

                <span className="text-white">{treatment.title}</span>
              </div>

              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium backdrop-blur">
                <ShieldCheck size={18} />
                Advanced Orthopedic Care
              </div>

              {/* Title */}

              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                {treatment.title}
              </h1>

              {/* Description */}

              <p className="max-w-2xl text-lg leading-9 text-slate-200">
                {treatment.heroDescription}
              </p>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <Hospital className="mb-3 text-cyan-300" size={28} />

                  <p className="text-xs uppercase tracking-widest text-slate-300">
                    Hospital Stay
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {treatment.treatmentInfo?.hospitalStay}
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <Clock3 className="mb-3 text-cyan-300" size={28} />

                  <p className="text-xs uppercase tracking-widest text-slate-300">
                    Duration
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {treatment.treatmentInfo?.duration}
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <Activity className="mb-3 text-cyan-300" size={28} />

                  <p className="text-xs uppercase tracking-widest text-slate-300">
                    Recovery
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {treatment.treatmentInfo?.recoveryTime}
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <CheckCircle2 className="mb-3 text-cyan-300" size={28} />

                  <p className="text-xs uppercase tracking-widest text-slate-300">
                    Success
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {treatment.treatmentInfo?.successRate}
                  </h4>
                </div>
              </div>

              {/* CTA */}

              <div className="mt-10 flex flex-wrap gap-5">
                <button
                  onClick={() => openPopup()}
                  className="flex items-center cursor-pointer gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600"
                >
                  Book Consultation
                  <ArrowRight size={20} />
                </button>

                <button className="rounded-xl border cursor-pointer border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900">
                  <a href="tel:+88828 92502">Call Now</a>
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex justify-end">
              <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
                <h3 className="mb-8 text-2xl font-bold text-slate-900">
                  Treatment Information
                </h3>

                <div className="space-y-6">
                  <div className="flex justify-between border-b pb-4">
                    <span className="text-slate-500">Procedure</span>

                    <span className="font-semibold">
                      {treatment.treatmentInfo?.surgery}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-4">
                    <span className="text-slate-500">Duration</span>

                    <span className="font-semibold">
                      {treatment.treatmentInfo?.duration}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-4">
                    <span className="text-slate-500">Hospital Stay</span>

                    <span className="font-semibold">
                      {treatment.treatmentInfo?.hospitalStay}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-4">
                    <span className="text-slate-500">Anaesthesia</span>

                    <span className="font-semibold">
                      {treatment.treatmentInfo?.anaesthesia}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-4">
                    <span className="text-slate-500">Recovery</span>

                    <span className="font-semibold">
                      {treatment.treatmentInfo?.recoveryTime}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Success Rate</span>

                    <span className="font-bold text-emerald-600">
                      {treatment.treatmentInfo?.successRate}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openPopup()}
                  className="mt-10 w-full cursor-pointer rounded-xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* LEFT */}

          <div>
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Overview
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              What is {treatment.title}?
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {treatment.overview}
            </p>
          </div>

          {/* RIGHT */}

          <div className="sticky top-24 h-fit rounded-3xl bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl">
            <Calendar size={42} />

            <h3 className="mt-6 text-2xl font-bold">Book Your Appointment</h3>

            <p className="mt-4 leading-8 text-cyan-50">
              Speak with our experienced orthopedic specialists and receive a
              personalized treatment plan.
            </p>

            <button
              onClick={() => openPopup()}
              className="mt-8 w-full cursor-pointer rounded-xl bg-white py-4 font-semibold text-sky-700 transition hover:bg-slate-100"
            >
              Schedule Consultation
            </button>

            <div className="mt-8 border-t border-white/20 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 size={20} />

                <span>Experienced Specialists</span>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 size={20} />

                <span>Advanced Technology</span>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 size={20} />

                <span>Cashless Insurance</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} />

                <span>95%+ Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= TYPES ================= */}

      {treatment.types && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Treatment Types
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Types of {treatment.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Depending on your condition, our orthopedic specialists recommend
              the most suitable treatment approach for better recovery and long
              term results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {treatment.types.map((type, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                  <Activity className="text-cyan-700" size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {type.title}
                </h3>

                <p className="leading-8 text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SYMPTOMS ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
              Symptoms
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Common Symptoms
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {treatment.symptoms.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-500 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle2 className="text-cyan-700" size={24} />
                </div>

                <p className="font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEEL LIKE ================= */}

      {treatment.feelLike && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                Patient Experience
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">
                What Does It Feel Like?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Patients with this condition commonly experience the following
                discomforts during daily activities.
              </p>
            </div>

            <div className="space-y-5">
              {treatment.feelLike.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border-l-4 border-cyan-600 bg-white p-6 shadow-sm"
                >
                  <p className="text-lg leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CAUSES & RISK ================= */}

      <section className="bg-slate-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h2 className="mb-8 text-4xl font-bold text-slate-900">Causes</h2>

            <div className="space-y-5">
              {treatment.causes.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-cyan-600"
                    size={22}
                  />

                  <p className="leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {treatment.riskFactors && (
            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h2 className="mb-8 text-4xl font-bold text-slate-900">
                Risk Factors
              </h2>

              <div className="space-y-5">
                {treatment.riskFactors.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <ShieldCheck
                      className="mt-1 shrink-0 text-red-500"
                      size={22}
                    />

                    <p className="leading-8 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= DIAGNOSIS ================= */}

      {treatment.diagnosis && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Diagnosis
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Diagnosis Process
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {treatment.diagnosis.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <Hospital className="text-cyan-700" size={30} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= TREATMENT OPTIONS ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Treatment
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Treatment Options
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {treatment.nonSurgicalTreatment && (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
                <h3 className="mb-8 text-3xl font-bold text-slate-900">
                  Non-Surgical Treatment
                </h3>

                <div className="space-y-5">
                  {treatment.nonSurgicalTreatment.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle2
                        className="mt-1 shrink-0 text-emerald-600"
                        size={22}
                      />

                      <p className="leading-8 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {treatment.surgicalTreatment && (
              <div className="rounded-3xl bg-gradient-to-br from-cyan-700 to-sky-800 p-10 text-white">
                <h3 className="mb-8 text-3xl font-bold">Surgical Treatment</h3>

                <p className="leading-9 text-slate-100">
                  {treatment.surgicalTreatment}
                </p>

                <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:bg-slate-100">
                  <a href="tel:+88828 92502">Call Now</a>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= RECOVERY ================= */}

      {treatment.recovery && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Recovery
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Recovery Timeline
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Recovery may vary depending on your condition and overall health,
              but most patients can expect the following timeline.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(treatment.recovery).map(([key, value], index) => (
              <div
                key={key}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
                  {index + 1}
                </div>

                <Clock3 className="mb-5 mt-6 text-cyan-600" size={30} />

                <h3 className="mb-3 text-2xl font-bold capitalize text-slate-900">
                  {key.replace(/([A-Z])/g, " $1")}
                </h3>

                <p className="leading-8 text-slate-600">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= COMPLICATIONS ================= */}

      {treatment.complications && (
        <section className="bg-red-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
                Risks
              </span>

              <h2 className="mt-5 text-5xl font-bold text-slate-900">
                Possible Complications
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {treatment.complications.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-red-200 bg-white p-6 transition hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <ShieldCheck className="text-red-600" size={22} />
                  </div>

                  <p className="leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PREVENTION ================= */}

      {treatment.prevention && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Prevention
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              How to Prevent This Condition
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {treatment.prevention.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 transition hover:-translate-y-2 hover:bg-white hover:shadow-lg"
              >
                <CheckCircle2 className="mb-5 text-emerald-600" size={28} />

                <p className="leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= TREATMENT INFO ================= */}

      {treatment.treatmentInfo && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700">
                Information
              </span>

              <h2 className="mt-5 text-5xl font-bold text-slate-900">
                Treatment Information
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <table className="w-full">
                <tbody>
                  {Object.entries(treatment.treatmentInfo).map(
                    ([key, value]) => (
                      <tr key={key} className="border-b last:border-none">
                        <td className="bg-slate-50 p-6 font-semibold capitalize text-slate-800">
                          {key.replace(/([A-Z])/g, " $1")}
                        </td>

                        <td className="p-6 text-slate-600">{value}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ================= COST ================= */}

      {treatment.cost && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-700 to-sky-800 text-white shadow-2xl">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="p-12">
                  <span className="rounded-full bg-white/20 px-5 py-2 text-sm">
                    Estimated Cost
                  </span>

                  <h2 className="mt-6 text-5xl font-bold">
                    {treatment.cost.india}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-100">
                    The treatment cost may vary depending on multiple medical
                    and hospital-related factors.
                  </p>
                </div>

                <div className="bg-white p-12 text-slate-800">
                  <h3 className="mb-8 text-3xl font-bold">Cost Depends On</h3>

                  <div className="space-y-5">
                    {treatment.cost.dependsOn.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <CheckCircle2
                          className="mt-1 shrink-0 text-cyan-600"
                          size={22}
                        />

                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}

      {treatment.faq && (
        <section className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
              FAQs
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {treatment.faq.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <span className="text-3xl">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="border-t px-6 py-6">
                    <p className="leading-8 text-slate-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= VIDEO ================= */}

      {treatment.youtube && (
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
                Video Guide
              </span>

              <h2 className="mt-5 text-5xl font-bold text-slate-900">
                Watch Treatment Video
              </h2>
            </div>

            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <iframe
                className="h-[550px] w-full"
                src={treatment.youtube}
                title={treatment.title}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-800 p-14 text-center text-white shadow-2xl">
          <h2 className="text-5xl font-bold">Ready to Begin Your Recovery?</h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-100">
            Our experienced orthopedic specialists provide personalized
            treatment plans, advanced surgical care, and comprehensive
            rehabilitation to help you recover faster and return to your daily
            life with confidence.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button
              onClick={() => openPopup()}
              className="rounded-xl  cursor-pointer bg-white px-10 py-4 font-semibold text-cyan-700 transition hover:bg-slate-100"
            >
              Book Appointment
            </button>

            <button className="rounded-xl cursor-pointer border border-white px-10 py-4 font-semibold transition hover:bg-white hover:text-cyan-700">
              <a href="tel:+88828 92502">Call Now</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetails;
