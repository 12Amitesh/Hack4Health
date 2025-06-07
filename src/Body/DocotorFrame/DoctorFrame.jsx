import React from "react";

const patientSummary = [
  { label: "Total Patients", value: 128 },
  { label: "Appointments Today", value: 16 },
  { label: "Lab Reports Pending", value: 5 },
  { label: "Discharged Patients", value: 11 },
];

export default function DoctorFrameHomePage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Dr. Ibrahim</h1>
          <p className="text-gray-500">Here's a quick overview of your hospital dashboard</p>
        </div>
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src="/doctor-profile.png" alt="Doctor Profile" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Patient Summary */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {patientSummary.map((item, idx) => (
          <div key={idx} className="p-4 bg-white border shadow-sm text-center rounded-xl">
            <h4 className="text-2xl font-bold text-blue-600">{item.value}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-6 rounded-xl shadow-md w-full">View Patients</button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl shadow-md w-full">Appointments</button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-6 rounded-xl shadow-md w-full">Lab Reports</button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-6 rounded-xl shadow-md w-full">Messages</button>
        </div>
      </section>

      {/* Department Notices */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Department Notices</h2>
        <div className="p-4 border shadow-sm rounded-xl bg-white">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Weekly surgery planning meeting at 4 PM.</li>
            <li>ICU equipment inspection scheduled for tomorrow.</li>
            <li>New patient admission protocol in effect starting next week.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
