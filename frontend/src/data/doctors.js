import dr1Image from "../assets/doctors/dr-shekh-mohammed-khan.webp";

export const doctors = [
  {
    id: 1,
    name: "Dr. Shekh Mohammed Khan",
    speciality: "Orthopedic & Joint Replacement Surgeon",
    qualification: "MS Orthopaedics",
    experience: "15+ Years Experience", // Update if you get official data
    rating: 4.9,
    reviews: 78, // Update if using verified review source
    available: true,
    image: dr1Image,

    about:
      "Dr. Shekh Mohammed Khan is an Orthopedic & Joint Replacement Surgeon specializing in knee, hip replacement, arthroscopy, sports injuries, and trauma care. He is known for advanced orthopedic treatments and robotic-assisted joint replacement surgeries.",

    languages: ["English", "Hindi"],

    services: [
      "Total Knee Replacement",
      "Hip Replacement",
      "Arthroscopy",
      "Sports Injury Treatment",
      "Trauma Surgery",
      "Robotic Joint Replacement",
    ],

    education: ["MS Orthopaedics"],

    timings: {
      days: "Mon - Sat",
      time: "06:00 AM - 08:00 PM", // Change if official timings are available
    },

    location: {
      clinic: "Dr. Shekh Orthocare",
      address:
        "34, Boring Rd, Bismilla Colony, Jagannath Puri, Jhotwara, Jaipur, Rajasthan 302012",
    },

    fee: 800, // Replace with actual consultation fee if known

    phone: "+91 97850 22211",
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
    about:
      "Dr. Amit Verma is known for his patient-first approach to joint replacement, combining evidence-based protocols with personalized rehab plans to help patients return to daily life faster.",
    languages: ["English", "Hindi"],
    services: [
      "Knee Replacement",
      "Shoulder Arthroscopy",
      "Joint Preservation",
    ],
    education: [
      "MBBS - Government Medical College, Chandigarh",
      "MS Orthopedics - PGIMER Chandigarh",
    ],
    timings: { days: "Mon - Fri", time: "11:00 AM - 05:00 PM" },
    location: {
      clinic: "OperationCost Ortho Center",
      address: "Sector 34, Chandigarh",
    },
    fee: 700,
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
    about:
      "Dr. Priya Mehta works closely with athletes and active individuals to diagnose and treat sports-related injuries, with a focus on non-surgical recovery wherever possible.",
    languages: ["English", "Hindi", "Gujarati"],
    services: ["ACL Reconstruction", "Ligament Injuries", "Sports Rehab"],
    education: [
      "MS Orthopedics - KEM Hospital, Mumbai",
      "Diploma in Sports Medicine - IOC Course",
    ],
    timings: { days: "Tue - Sat", time: "09:00 AM - 03:00 PM" },
    location: {
      clinic: "OperationCost Sports Injury Clinic",
      address: "Sector 22, Chandigarh",
    },
    fee: 750,
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
    about:
      "Dr. Neha Kapoor treats spine conditions ranging from disc herniation to scoliosis, prioritizing conservative management before recommending surgical intervention.",
    languages: ["English", "Hindi"],
    services: ["Spine Surgery", "Disc Replacement", "Scoliosis Correction"],
    education: [
      "MS Orthopedics - Maulana Azad Medical College",
      "Spine Fellowship - Ganga Hospital, Coimbatore",
    ],
    timings: { days: "Mon - Sat", time: "12:00 PM - 06:00 PM" },
    location: {
      clinic: "OperationCost Spine Care",
      address: "Sector 34, Chandigarh",
    },
    fee: 900,
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
    about:
      "Dr. Vikram Singh leads trauma and emergency orthopedic care, with extensive experience managing complex fractures and polytrauma cases.",
    languages: ["English", "Hindi"],
    services: ["Fracture Care", "Polytrauma Management", "Bone Reconstruction"],
    education: [
      "MBBS - PGIMER Chandigarh",
      "MS Orthopedics, Trauma Fellowship - CMC Vellore",
    ],
    timings: { days: "All Days", time: "24 Hours (Emergency)" },
    location: {
      clinic: "OperationCost Trauma Center",
      address: "Sector 43, Chandigarh",
    },
    fee: 850,
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
    about:
      "Dr. Anjali Verma specializes in arthroplasty procedures for patients with advanced arthritis, helping restore mobility through precision implant techniques.",
    languages: ["English", "Hindi"],
    services: ["Hip Arthroplasty", "Knee Arthroplasty", "Arthritis Management"],
    education: [
      "MS Orthopedics - Lady Hardinge Medical College",
      "Fellowship in Arthroplasty - Apollo Hospitals",
    ],
    timings: { days: "Mon - Fri", time: "10:00 AM - 04:00 PM" },
    location: {
      clinic: "OperationCost Ortho Center",
      address: "Sector 34, Chandigarh",
    },
    fee: 650,
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
    about:
      "Dr. Karan Malhotra focuses exclusively on musculoskeletal conditions in children, from congenital deformities to growth-related bone issues.",
    languages: ["English", "Hindi"],
    services: [
      "Pediatric Fracture Care",
      "Limb Deformity Correction",
      "Congenital Disorders",
    ],
    education: [
      "MS Orthopedics - AIIMS Delhi",
      "Fellowship in Pediatric Orthopedics - Great Ormond Street, London",
    ],
    timings: { days: "Mon - Sat", time: "09:00 AM - 02:00 PM" },
    location: {
      clinic: "OperationCost Children's Ortho Clinic",
      address: "Sector 22, Chandigarh",
    },
    fee: 700,
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
    about:
      "Dr. Simran Kaur manages chronic autoimmune and inflammatory joint conditions, combining medication management with lifestyle-based care plans.",
    languages: ["English", "Hindi", "Punjabi"],
    services: [
      "Rheumatoid Arthritis",
      "Osteoarthritis",
      "Autoimmune Disorders",
    ],
    education: [
      "MD Internal Medicine - GMCH Chandigarh",
      "DM Rheumatology - PGIMER Chandigarh",
    ],
    timings: { days: "Mon - Thu", time: "11:00 AM - 03:00 PM" },
    location: {
      clinic: "OperationCost Rheumatology Wing",
      address: "Sector 34, Chandigarh",
    },
    fee: 600,
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
    about:
      "Dr. Arjun Reddy specializes in arthroscopic ACL reconstruction and ligament repair, helping athletes return to competitive sport safely.",
    languages: ["English", "Hindi", "Telugu"],
    services: ["ACL Reconstruction", "Meniscus Repair", "Arthroscopic Surgery"],
    education: [
      "MS Orthopedics - NIMS Hyderabad",
      "Diploma in Sports Surgery - ISAKOS Fellowship",
    ],
    timings: { days: "Mon - Sat", time: "10:00 AM - 05:00 PM" },
    location: {
      clinic: "OperationCost Sports Injury Clinic",
      address: "Sector 22, Chandigarh",
    },
    fee: 750,
  },
];
