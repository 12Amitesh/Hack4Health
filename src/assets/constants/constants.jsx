export const departmentIcons = {
    Cardiology: "❤️",
    Neurology: "🧠",
    Orthopedics: "🦴",
    Pediatrics: "🧒",
    Oncology: "🎗️",
    Radiology: "🩻",
    Emergency: "🚑",
    Dermatology: "🧴",
    Gynecology: "👩‍⚕️",
    ENT: "👂",
    Urology: "🚻",
    Gastroenterology: "🍽️",
    Psychiatry: "🧘",
    Ophthalmology: "👁️",
    Dentistry: "🦷"
};

export const cardColors = [
    "from-pink-100 to-pink-50",
    "from-blue-100 to-blue-50",
    "from-green-100 to-green-50",
    "from-yellow-100 to-yellow-50",
    "from-purple-100 to-purple-50",
    "from-teal-100 to-teal-50"
];

const departments = [
    "cardio",
    "Neurology",
    "ortho",
    "Pediatrics",
    "Oncology",
    "Radiology",
    "Emergency",
    "Dermatology",
    "Gynecology",
    "ENT",
    "Urology",
    "Gastroenterology",
    "Psychiatry",
    "Ophthalmology",
    "Dentistry"
];



 const doctorsname = [
        {
            id: 1,
            name: "Dr. A. Sharma",
            specialization: "Cardiologist",
            qualification: "MD, DM (Cardiology)",
            experience: "10 years",
            contact: "asharma@hospital.com",
            phone: "+91-9876543210",
        },
        {
            id: 2,
            name: "Dr. B. Gupta",
            specialization: "Cardiologist",
            qualification: "MBBS, MD",
            experience: "8 years",
            contact: "bgupta@hospital.com",
            phone: "+91-9876543211",
        },
        {
            id: 3,
            name: "Dr. C. Singh",
            specialization: "Cardiologist",
            qualification: "MD (Medicine), DM (Cardiology)",
            experience: "12 years",
            contact: "csingh@hospital.com",
            phone: "+91-9876543212",
        },
        {
            id: 4,
            name: "Dr. D. Verma",
            specialization: "Cardiologist",
            qualification: "MBBS, MD, DM",
            experience: "15 years",
            contact: "dverma@hospital.com",
            phone: "+91-9876543213",
        },
    ];



const doctors = [
  {
    id: "d1",
    name: "Dr. Arjun Mehta",
    specialization: "Orthopedics",
    qualification: "MBBS, MS (Ortho)",
    experience: "12 years",
    departmentId: "ortho",
    departmentName: "Orthopedics",
  },
  {
    id: "d2",
    name: "Dr. Priya Sen",
    specialization: "Neurology",
    qualification: "MBBS, DM (Neuro)",
    experience: "9 years",
    departmentId: "neuro",
    departmentName: "Neurology",
  },
];


const allPatients = {
  d1: [
    {
      id: 1,
      name: "Amit Sharma",
      age: 42,
      condition: "Fracture",
      lastVisit: "2025-05-10",
    },
    {
      id: 2,
      name: "Neha Verma",
      age: 36,
      condition: "Arthritis",
      lastVisit: "2025-04-28",
    },
  ],
  d2: [
    {
      id: 3,
      name: "Ravi Kumar",
      age: 58,
      condition: "Seizure",
      lastVisit: "2025-05-15",
    },
  ],
};

//  const user = useSelector((state) => state.user);
//       console.log("header component",user.user);
      
//       const dispatch = useDispatch();
//       const handleLogout = () => {
//         console.log("logout ");
//         dispatch(logoutUser());
//         navigate("/Login");
//       };