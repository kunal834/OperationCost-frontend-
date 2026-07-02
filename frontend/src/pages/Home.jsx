import HeroSection from "../components/HeroSection";
import TreatmentsSection from "../components/TreatmentsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PopupForm from "../components/PopupForm";
import WhatsAppButton from "../components/WhatsAppButton";
import DoctorSection from "../components/DoctorSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import InsurancePartners from "../components/InsurancePartners";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />
      <WhatsAppButton />
      <HeroSection setShowPopup={setShowPopup} />
      <TreatmentsSection />
      <WhyChooseUs />
      <DoctorSection />
      <Testimonials />
      <InsurancePartners />
      <HowItWorks />
      <FAQ />
      
    </>
  );
};

export default Home;
