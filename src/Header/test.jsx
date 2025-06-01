import React from "react";

const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
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

// Example icons for departments (can be replaced with real icons)
const departmentIcons = {
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
const cardColors = [
    "from-pink-100 to-pink-50",
    "from-blue-100 to-blue-50",
    "from-green-100 to-green-50",
    "from-yellow-100 to-yellow-50",
    "from-purple-100 to-purple-50",
    "from-teal-100 to-teal-50"
];

const DepartmentCard = ({ name, icon, colorIdx }) => (
    <div
        className={`bg-gradient-to-br ${cardColors[colorIdx % cardColors.length]} border border-gray-200 rounded-xl p-6 shadow-lg flex flex-col items-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] transition-transform hover:scale-105 hover:shadow-2xl`}
    >
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="m-0 text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mt-2">Learn more</p>
    </div>
);

const HospitalDepartmentsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto mt-12 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl bg-white/80">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10 text-blue-700 drop-shadow">
                Hospital Departments
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                {departments.map((dept, idx) => (
                    <DepartmentCard
                        key={dept}
                        name={dept}
                        icon={departmentIcons[dept] || "🏥"}
                        colorIdx={idx}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default HospitalDepartmentsPage;
