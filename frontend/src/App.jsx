import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import Footer from "./components/Footer";
import TreatmentDetails from "./pages/TreatmentDetails";
import PopupForm from "./components/PopupForm";
import DoctorDetail from "./components/DoctorDetail";
import ScrollToTop from "./pages/ScrollToTop";

const About = React.lazy(() => import("./pages/About"));
const Doctors = React.lazy(() => import("./pages/Doctors"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:id" element={<TreatmentDetails />} />
          <Route path="/treatment/" element={<TreatmentDetails />} />
          <Route path="/treatment/:id" element={<TreatmentDetails />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <PopupForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
