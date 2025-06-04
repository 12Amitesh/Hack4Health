
import '../src/index.css'
import React from 'react'
import DoctorHeader from './Header/Header.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HospitalBodypage from './Body/HospitalBody.jsx'
import SingleDepartment from './departments/Department.jsx';
import AssignedPatients from './DoctorProfile/PatienList.jsx';
import HospitalAdminPage from './HospitalAdmin/HospitalAdminPage.jsx';
import HospitalDepartmentsPage from './Body/HospitalDepartmentPage..jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HospitalBodypage/>,
    children: [
     
      { path: "/departments/:departmentName", element: <SingleDepartment/>},
      { path: "/departments/:departmentName/Doctor/:DocotorId", element: <AssignedPatients />},
    ],
    
  },
  {
    path :"/AdminProfilePage",
    element : < HospitalAdminPage/>

  }
]);


function App() {


  return (
    <>
 <RouterProvider router={router} />;
     {/* <Router>
      <Routes>
        <Route path="/" element={   } />
        <Route path="" element={  } />
        <Route path="" element={} />
        <Route path="Profile" element={<HospitalAdminPage/>} />
      </Routes>
    </Router> */}


    </>
  )
}

export default App
