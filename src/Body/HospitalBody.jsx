
import  HospitalDepartmentsPage  from "./HospitalDepartmentPage..jsx";
import DoctorHeader from "../Header/Header.jsx";
import DoctorList from "./DoctorList/DoctorList.jsx";
import HospitalAdminPage from "../HospitalAdmin/HospitalAdminPage.jsx";
import { Outlet } from "react-router-dom";
export default function HospitalBodypage() {
  return (
   <>

      <DoctorHeader />
      <HospitalDepartmentsPage/>
      <Outlet/>
     

      <footer>
        this footer section
      </footer>
 
        
   </>
  )
}
