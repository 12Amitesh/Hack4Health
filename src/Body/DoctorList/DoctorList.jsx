import React, { useEffect ,useState} from "react";
import { useParams ,useNavigate, Link} from "react-router-dom";
import axios from 'axios';
import AssignedPatients from "../../DoctorProfile/PatienList.jsx";
const avatarColors = [
    "bg-blue-400",
    "bg-pink-400",
    "bg-green-400",
    "bg-yellow-400",
];

// Example avatar images (replace with real URLs or doctor images if available)
const avatarImages = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/65.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function DoctorList() {
    const d="ortho"
    const {departmentName,}=useParams() 
    const [doctorsList, setDoctorsList] = useState([]);
 
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(`http://localhost:2000/doctor/${departmentName}`);
      setDoctorsList(res.data);
       
      } catch (err) {
        console.error(err);
     
      
      }
    };

    if (departmentName) fetchDoctors();
  }, [departmentName]);
  console.log(doctorsList)
    const doctors = [
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
   
    return (
        <>
          <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10 tracking-wide drop-shadow">
                   {departmentName}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {doctorsList.map((doc, idx) => (
                  <Link key={doc._id} to={`/departments/${departmentName}/Doctor/d${doc.id}`}> 
                  
                        <div
                            key={doc._id}
                            className="relative bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                        >
                            <div className="relative flex-shrink-0">
                                {/* <img
                                    src={avatarImages[idx % avatarImages.length]}
                                    alt={doc.name}
                                    className={`w-20 h-20 rounded-full object-cover shadow-lg ring-4 ring-blue-200 border-2 border-white ${avatarColors[idx % avatarColors.length]}`}
                                /> */}
                               
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-700 mb-1">
                                    {doc.name}
                                </h3>
                                <p className="text-blue-500 font-medium mb-1">
                                          "specialization"
                                </p>
                                <p className="text-gray-600 text-sm mb-1">
                                    <span className="font-semibold">Qualification:</span> {doc.qualification}
                                </p>
                                <p className="text-gray-600 text-sm mb-1">
                                    <span className="font-semibold">Experience:</span> {doc.experience}
                                </p>
                               
                            </div>
                        </div>
                  </Link>
                    ))}
                </div>
            </div>
            {/* Animation keyframes for fade-in */}
            <style>
                {`
                    .animate-fade-in {
                        opacity: 0;
                        transform: translateY(30px);
                        animation: fadeInCard 0.8s forwards;
                    }
                    @keyframes fadeInCard {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
      
        </>
      
        
    );
}
