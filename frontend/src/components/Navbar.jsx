import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePopup } from "../context/PopupContext";

const treatments = [
  { label: "Knee Replacement", path: "/treatment/knee-replacement" },
  { label: "Hip Replacement", path: "/treatment/hip-replacement" },
  { label: "Spine Surgery", path: "/treatment/spine-surgery" },
  { label: "ACL Reconstruction", path: "/treatment/acl-reconstruction" },
  { label: "Sports Injury", path: "/treatment/sports-injury" },
  { label: "Fracture Care", path: "/treatment/fracture-care" },
  { label: "Arthritis Treatment", path: "/treatment/arthritis" },
  { label: "Joint Replacement", path: "/treatment/joint-replacement" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Doctors", path: "/doctors" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// Reusable nav link with animated underline + active state
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative py-2 transition-colors duration-200 ${
        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

const Navbar = () => {
  const { openPopup } = usePopup();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
    setMobileTreatmentsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          OperationCost
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <span className="group">
            <NavLink to="/">Home</NavLink>
          </span>

          {/* Treatments Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
              Treatments
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            {/* Underline for the trigger itself */}
            <span className="absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300 ease-out" />

            <div
              className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100
                         translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out"
            >
              <div className="bg-white shadow-xl rounded-xl w-64 py-2 ring-1 ring-black/5">
                {treatments.map((t) => (
                  <Link
                    key={t.path}
                    to={t.path}
                    className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <span className="group" key={link.path}>
              <NavLink to={link.path}>{link.label}</NavLink>
            </span>
          ))}

          <button
            onClick={openPopup}
            className="bg-blue-600 cursor-pointer text-white px-5 py-3 rounded-xl
                       hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
                       transition-all duration-200"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-1 border-t border-gray-100">
          <Link
            to="/"
            onClick={handleMobileLinkClick}
            className="py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-50"
          >
            Home
          </Link>

          {/* Mobile Treatments Accordion */}
          <button
            onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
            className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-50"
          >
            Treatments
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                mobileTreatmentsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              mobileTreatmentsOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="flex flex-col pl-4">
              {treatments.map((t) => (
                <Link
                  key={t.path}
                  to={t.path}
                  onClick={handleMobileLinkClick}
                  className="py-2.5 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleMobileLinkClick}
              className="py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-50"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              openPopup();
              handleMobileLinkClick();
            }}
            className="mt-4 bg-blue-600 text-white px-10 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
