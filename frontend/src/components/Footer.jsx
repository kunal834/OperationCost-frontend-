import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Doctors", path: "/doctors" },
  { label: "Treatments", path: "/treatments" },
  { label: "Contact", path: "/contact" },
];

const treatmentLinks = [
  { label: "Knee Replacement", path: "/treatment/knee-replacement" },
  { label: "Hip Replacement", path: "/treatment/hip-replacement" },
  { label: "Spine Surgery", path: "/treatment/spine-surgery" },
  { label: "ACL Reconstruction", path: "/treatment/acl-reconstruction" },
  { label: "Sports Injury", path: "/treatment/sports-injury" },
  { label: "Arthritis Treatment", path: "/treatment/arthritis" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", bg: "bg-blue-600 hover:bg-blue-700" },
  { icon: FaInstagram, href: "#", bg: "bg-pink-600 hover:bg-pink-700" },
  { icon: FaLinkedinIn, href: "#", bg: "bg-blue-500 hover:bg-blue-600" },
  { icon: FaYoutube, href: "#", bg: "bg-red-600 hover:bg-red-700" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
              OperationCost
            </h2>

            <p className="text-gray-300 mt-4 sm:mt-5 leading-7 text-sm sm:text-base">
              India's trusted healthcare platform providing advanced orthopedic
              treatments with complete patient care support.
            </p>

            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6">
              {socialLinks.map(({ icon: Icon, href, bg }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`${bg} p-2.5 sm:p-3 rounded-full transition-colors`}
                  aria-label="social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Treatments
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              {treatmentLinks.map((t) => (
                <li key={t.path}>
                  <Link
                    to={t.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base">
              <div className="flex gap-3">
                <Phone className="text-blue-400 shrink-0" size={20} />
                <span>+91 8882892502</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-400 shrink-0" size={20} />
                <span className="break-all">singhraj88828@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-400 shrink-0" size={20} />
                <span>D-17/4 GF, DLF Phase 4, Gurgaon, Haryana - 122002</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} OperationCost. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
