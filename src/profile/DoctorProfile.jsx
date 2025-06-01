import React from "react";

const doctorData = {
  name: "Dr. Priya Sharma",
  specialization: "Cardiologist",
  email: "priya.sharma@hospital.com",
  phone: "+91-9876543210",
  experience: "12 years",
  department: "Cardiology",
  location: "Apollo Hospital, Delhi",
  assignedPatients: [
    {
      name: "Ramesh Kumar",
      age: 56,
      condition: "Hypertension",
      lastVisit: "2025-05-20",
    },
    {
      name: "Sita Devi",
      age: 63,
      condition: "Arrhythmia",
      lastVisit: "2025-04-15",
    },
  ],
};

const DoctorProfile = () => {
return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-2xl rounded-2xl mt-12">
        <div className="flex items-center mb-8">
            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Doctor Profile"
                className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg mr-8"
            />
            <div>
                <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Dr. {doctorData.name.split(' ').slice(1).join(' ')}</h1>
                <p className="text-lg text-green-700 font-semibold">{doctorData.specialization}</p>
                <p className="text-gray-600">{doctorData.department} &bull; {doctorData.location}</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-100 rounded-lg p-5 shadow">
                <p className="mb-2"><span className="font-semibold text-blue-700">Email:</span> {doctorData.email}</p>
                <p className="mb-2"><span className="font-semibold text-blue-700">Phone:</span> {doctorData.phone}</p>
                <p className="mb-2"><span className="font-semibold text-blue-700">Experience:</span> {doctorData.experience}</p>
            </div>
            <div className="bg-green-100 rounded-lg p-5 shadow">
                <p className="mb-2"><span className="font-semibold text-green-700">Department:</span> {doctorData.department}</p>
                <p className="mb-2"><span className="font-semibold text-green-700">Location:</span> {doctorData.location}</p>
            </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-blue-700 border-b-2 border-blue-200 pb-2">Assigned Patients</h2>
        <div className="bg-white p-6 rounded-xl shadow-inner">
            {doctorData.assignedPatients.length > 0 ? (
                <ul className="space-y-4">
                    {doctorData.assignedPatients.map((patient, index) => (
                        <li key={index} className="p-4 rounded-lg bg-gradient-to-r from-green-50 via-white to-blue-50 border-l-4 border-green-400 shadow">
                            <p className="font-semibold text-green-800"><span className="text-gray-700">Name:</span> {patient.name}</p>
                            <p><span className="font-semibold text-blue-700">Age:</span> {patient.age}</p>
                            <p><span className="font-semibold text-blue-700">Condition:</span> {patient.condition}</p>
                            <p><span className="font-semibold text-blue-700">Last Visit:</span> {patient.lastVisit}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No patients assigned.</p>
            )}
        </div>
    </div>
);
};

export default DoctorProfile;
