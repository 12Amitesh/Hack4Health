import React from "react";
import { FaUserAlt, FaHeartbeat, FaCalendarAlt, FaStethoscope } from "react-icons/fa";
import { useParams } from "react-router-dom";

// Mock Data
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

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const AssignedPatients = () => {
  const { departmentName, DocotorId } = useParams();

  const doctor = doctors.find((d) => d.id === DocotorId);
  const patients = allPatients[DocotorId] || [];

  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-2xl rounded-2xl animate-fade-in space-y-10">
      {/* Doctor Info */}
      <div className="border-b pb-6">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center">
          🧑‍⚕️ Doctor Profile
        </h1>
        {doctor ? (
          <div className="space-y-2 text-lg text-gray-700 text-center">
            <p><strong>Name:</strong> {doctor.name}</p>
            <p><strong>Department:</strong> {doctor.departmentName}</p>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Qualification:</strong> {doctor.qualification}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Assigned Patients:</strong> {patients.length}</p>
          </div>
        ) : (
          <p className="text-red-500 text-center">Doctor not found.</p>
        )}
      </div>

      {/* Patient List */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">🩺 Assigned Patients</h2>
        {patients.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className="p-6 bg-blue-50 rounded-xl shadow-md border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-md">
                    {getInitials(patient.name)}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{patient.name}</h2>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaUserAlt className="text-blue-500" />
                    <strong>Age:</strong> {patient.age}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaHeartbeat className="text-red-500" />
                    <strong>Condition:</strong> {patient.condition}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-green-500" />
                    <strong>Last Visit:</strong> {patient.lastVisit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg">No patients assigned yet.</p>
        )}
      </div>
    </div>
  );
};

export default AssignedPatients;
