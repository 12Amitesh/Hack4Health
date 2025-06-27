import React, { useState } from "react";
import { FaUserAlt, FaHeartbeat, FaCalendarAlt, FaStethoscope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

// Mock Data





const AssignedPatients = () => {
  
  const { departmentName, DocotorId } = useParams();
  // console.log("assigned patienrrs",departmentName,DocotorId)
const [doctor, setDoctor] = useState({
  _id:"",
  patientName:"",
   disease:""
   , 
   doctor:"", 
   departmentName:"", __v:""
}
);
const [patients, setPatients] = useState([]);

useEffect(() => {
  
  async function fetchDoctorPatient() {
      try {
        const res = await axios.get(`http://localhost:2000/patients`);
        console.log("doctor profile api", res.data[0]);
        setDoctor(res.data[0] || {}); // Set the first doctor object or empty if not found
        setPatients(res.data || []);
      } catch (error) {
        console.error("Failed to fetch doctor and patients", error);
      }
   
  }

  fetchDoctorPatient();
}, [departmentName, DocotorId]);

  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-2xl rounded-2xl animate-fade-in space-y-10">
      {/* Doctor Info */}
      <div className="border-b pb-6">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center">
          🧑‍⚕️ Doctor Profile
        </h1>
        {doctor ? (
          <div className="space-y-2 text-lg text-gray-700 text-center">
            <p><strong>Name:</strong> {doctor.doctor.name}</p>
            <p><strong>Department</strong> {doctor.departmentName.departmentName}</p>
            <p><strong>Specialization:</strong> {doctor.doctor.specialization}</p>

          
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
                key={patient}
                className="p-6 bg-blue-50 rounded-xl shadow-md border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-md">
                    {}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{patient.patientName}</h2>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaUserAlt className="text-blue-500" />
                    <strong>Age:</strong> {patient.age}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaHeartbeat className="text-red-500" />
                    <strong>Condition:</strong> {patient.disease}
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
