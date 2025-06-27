import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {departmentIcons,cardColors}  from "../assets/constants/constants.jsx"

// Example icons for departments (can be replaced with real icons)



const DepartmentCard = ({ name, icon, colorIdx }) => (
    <div
        className={`bg-gradient-to-br ${cardColors[colorIdx % cardColors.length]} border border-gray-200 rounded-xl p-6 shadow-lg flex flex-col items-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] transition-transform hover:scale-105 hover:shadow-2xl`}
    >
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="m-0 text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mt-2">Learn more</p>
    </div>
);


const HospitalDepartmentsPage = () => {
    const [departmentsData, setDepartmentsData] = useState([]);

    useEffect(() => {
        // Example API call, replace URL with your endpoint
        const fetchDoctors = async () => {
      try {
        const res = await axios.get(`http://localhost:2000/departments`);
        console.log(res.data)
      setDepartmentsData(res.data)
       
      } catch (err) {
        console.error(err);
     
      
      }
    };
 fetchDoctors()
   
    }, []);

    return (
        <div className=" bg-gradient-to-br from-blue-50 to-white " >
            <div className=" p-6 shadow-xl bg-white/80 " >
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10 text-blue-700 drop-shadow">
                    Hospital Departments
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 sm:gap-6 justify-items-center">
                    {departmentsData.map((dept, idx) => (
                        <Link
                            key={dept._id}
                            to={`/departments/${dept.departmentName}`}
                            className="w-full flex justify-center"
                            style={{ textDecoration: "none" }}
                        >
                            <DepartmentCard
                                name={dept.departmentName}
                                  icon={departmentIcons[dept.departmentName] || "🏥"}
                                colorIdx={idx}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HospitalDepartmentsPage;
