// import React from "react";
// import { usePopup } from "../context/PopupContext";

// const HeroSection = () => {
//   const { openPopup } = usePopup();
//   return (
//     <section className="bg-gradient-to-r from-blue-50 to-white py-16">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
//         {/* Left Side */}
//         <div>
//           <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
//             Trusted Surgical Care Across India
//           </span>
//           <h1 className="text-5xl font-bold mt-6 leading-tight text-gray-900">
//             Advanced Orthopedic Care <br />
//             With Expert Surgeons
//           </h1>
//           <p className="text-gray-600 text-lg mt-6">
//             Get affordable and advanced orthopedic treatments with experienced
//             doctors, cashless insurance and complete care support.
//           </p>

//           <div className="flex flex-wrap gap-4 mt-8">
//             <button
//               onClick={openPopup}
//               className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
//             >
//               Book Free Consultation
//             </button>

//             <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold">
//               Learn More
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6 mt-12">
//             <div>
//               <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
//               <p className="text-gray-500">Successful Surgeries</p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-blue-600">100+</h2>
//               <p className="text-gray-500">Expert Doctors</p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
//               <p className="text-gray-500">Patient Support</p>
//             </div>
//           </div>
//         </div>
//         {/* Right Side */}
//         <div className="relative">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Doctor with Patient"
//             className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
//           />
//           {/* Floating Card */}
//           <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-xl">
//             <h3 className="font-bold text-lg text-gray-900">
//               Free Consultation Available
//             </h3>
//             <p className="text-gray-500 text-sm mt-1">
//               Book your appointment today.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { usePopup } from "../context/PopupContext";

const HeroSection = () => {
  const { openPopup } = usePopup();
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
            Trusted Surgical Care Across India
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 sm:mt-6 leading-tight text-gray-900">
            Advanced Orthopedic Care
            <br className="hidden sm:block" />
            With Expert Surgeons
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6">
            Get affordable and advanced orthopedic treatments with experienced
            doctors, cashless insurance and complete care support.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={openPopup}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors"
            >
              Book Free Consultation
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                10K+
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                Successful Surgeries
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                100+
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                Expert Doctors
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                24/7
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                Patient Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Doctor with Patient"
            className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-[85%] sm:max-w-none">
            <h3 className="font-bold text-base sm:text-lg text-gray-900">
              Free Consultation Available
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Book your appointment today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
