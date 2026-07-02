import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../src/admin/Admin";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";
import Footer from "./components/Footer";
import TreatmentDetails from "./pages/TreatmentDetails";
import PopupForm from "./components/PopupForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatment/:id" element={<TreatmentDetails />} />

        {/* admin routes */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <PopupForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
