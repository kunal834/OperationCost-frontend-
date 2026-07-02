import { Link } from "react-router-dom";
import { Star, GraduationCap, CalendarCheck } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    speciality: "Senior Orthopedic Surgeon",
    qualification: "MS Ortho, Fellowship Joint Replacement",
    experience: "15+ Years Experience",
    rating: 4.9,
    reviews: 320,
    available: true,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Amit Verma",
    speciality: "Joint Replacement Specialist",
    qualification: "MBBS, MS Ortho",
    experience: "12+ Years Experience",
    rating: 4.8,
    reviews: 210,
    available: true,
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Priya Mehta",
    speciality: "Sports Injury Specialist",
    qualification: "MS Ortho, Diploma Sports Medicine",
    experience: "10+ Years Experience",
    rating: 4.9,
    reviews: 275,
    available: false,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Dr. Neha Kapoor",
    speciality: "Spine Surgeon",
    qualification: "MS Ortho, Spine Fellowship",
    experience: "11+ Years Experience",
    rating: 4.7,
    reviews: 189,
    available: true,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    speciality: "Trauma Specialist",
    qualification: "MBBS, MS Ortho, Trauma Care",
    experience: "14+ Years Experience",
    rating: 4.8,
    reviews: 240,
    available: true,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Dr. Anjali Verma",
    speciality: "Joint Replacement Expert",
    qualification: "MS Ortho, Fellowship Arthroplasty",
    experience: "9+ Years Experience",
    rating: 4.6,
    reviews: 156,
    available: true,
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 7,
    name: "Dr. Karan Malhotra",
    speciality: "Pediatric Orthopedic Surgeon",
    qualification: "MS Ortho, Fellowship Pediatric Ortho",
    experience: "13+ Years Experience",
    rating: 4.9,
    reviews: 198,
    available: true,
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Dr. Simran Kaur",
    speciality: "Arthritis & Rheumatology",
    qualification: "MD, DM Rheumatology",
    experience: "8+ Years Experience",
    rating: 4.7,
    reviews: 142,
    available: false,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Dr. Arjun Reddy",
    speciality: "ACL & Sports Reconstruction",
    qualification: "MS Ortho, Diploma Sports Surgery",
    experience: "10+ Years Experience",
    rating: 4.8,
    reviews: 176,
    available: true,
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop",
  },
];

const DoctorSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
            OUR SPECIALISTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet Our Specialists
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base max-w-lg mx-auto">
            Experienced, board-certified doctors committed to your recovery and
            long-term mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full cursor-pointer  h-56 sm:h-72 md:h-80  object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                {/* Availability badge */}
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                    doctor.available
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      doctor.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                  {doctor.available ? "Available Today" : "Fully Booked"}
                </span>

                {/* Rating badge */}
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 text-gray-800 shadow-sm">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  {doctor.rating}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 mt-1.5 text-sm sm:text-base font-medium">
                  {doctor.speciality}
                </p>

                <div className="flex items-start gap-1.5 mt-2 text-gray-500 text-xs sm:text-sm">
                  <GraduationCap size={15} className="mt-0.5 shrink-0" />
                  <span>{doctor.qualification}</span>
                </div>

                <div className="flex items-center justify-between mt-2 text-gray-500 text-xs sm:text-sm">
                  <span>{doctor.experience}</span>
                  <span className="text-gray-400">
                    {doctor.reviews} reviews
                  </span>
                </div>

                <div className="flex gap-2 mt-5 sm:mt-6">
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="flex-1 text-center border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors"
                  >
                    View Profile
                  </Link>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors flex items-center justify-center gap-1.5">
                    <CalendarCheck size={16} />
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/doctors"
            className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors"
          >
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
