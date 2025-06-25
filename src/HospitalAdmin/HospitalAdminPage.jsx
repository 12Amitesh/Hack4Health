import React from "react";
import { FaUserMd, FaUserTie, FaUserNurse, FaPhone, FaEnvelope } from "react-icons/fa";
import { useSelector } from 'react-redux';

const managementUser = {
    name: "Dr. Priya Sharma",
    role: "Chief Medical Officer",
    icon: <FaUserMd className="text-blue-600 text-5xl mb-4" />,
    email: "priya.sharma@hospital.com",
    phone: "+91 98765 43210",
    department: "Medical Administration",
    qualifications: "MBBS, MD (Hospital Administration)",
    experience: "15+ years in hospital management and patient care",
    bio: "Dr. Priya Sharma leads th hospital's medical team, ensuring the highest standards of patient care and safety. She is passionate about healthcare innovation and staff development.",
    office: "Room 201, Admin Block",
    workingHours: "Mon-Fri, 9:00 AM - 5:00 PM",
};

export default function HospitalAdminPage() {
    const {user} = useSelector((state) => state.user);
    console.log("admin", user);
    if (!user) return <p>Not logged in</p>;
    return (
        <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
                {managementUser.icon}
                <h1 className="text-3xl font-extrabold text-purple-700 mb-1">{user.email}</h1>
                <div className="text-lg text-purple-600 mb-2">{managementUser.role}</div>
                <div className="text-gray-600 mb-2">{managementUser.department}</div>
                <div className="text-sm text-gray-500 mb-4">{managementUser.qualifications}</div>
                <div className="text-gray-700 mb-4 text-center">{managementUser.bio}</div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-gray-500">
                        <FaEnvelope className="mr-2 text-blue-400" />
                        <span> data from api </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaPhone className="mr-2 text-green-400" />
                        <span>{managementUser.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="font-semibold mr-2">Office:</span>
                        <span>{managementUser.office}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="font-semibold mr-2">Working Hours:</span>
                        <span>{managementUser.workingHours}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="font-semibold mr-2">Experience:</span>
                        <span>{managementUser.experience}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
