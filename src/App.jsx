
import '../src/index.css'
import React from 'react'
import DoctorHeader from './Header/Header.jsx'
import Signup from './auth/SignUp.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HospitalBodypage from './Body/HospitalBody.jsx'
import SingleDepartment from './departments/Department.jsx';
import AssignedPatients from './DoctorProfile/PatienList.jsx';
import HospitalAdminPage from './HospitalAdmin/HospitalAdminPage.jsx';
import HospitalDepartmentsPage from './Body/HospitalDepartmentPage..jsx';
import HomePage from './HomePage.jsx';
import Login from './auth/LoginPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
     {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/home",
    element: <HospitalBodypage />,
    children: [
      { path: "departments", element: <HospitalDepartmentsPage /> },
      { path: "departments/:departmentName", element: <SingleDepartment /> },
      { path: "departments/:departmentName/Doctor/:DoctorId", element: <AssignedPatients /> },
      { path: "HospitalAdmin", element: <HospitalAdminPage /> }
    ]
  },
  {
    path: "/AdminProfilePage",
    element: <HospitalAdminPage />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }
]);


function App() {


  return (
    <>
 <RouterProvider router={router} />
    


    </>
  )
}

export default App
