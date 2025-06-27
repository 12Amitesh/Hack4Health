
// import  HospitalDepartmentsPage  from "./HospitalDepartmentPage..jsx";
import DoctorHeader from "../Header/Header.jsx";
// import DoctorList from "./DoctorList/DoctorList.jsx";
// import HospitalAdminPage from "../HospitalAdmin/HospitalAdminPage.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer.jsx";
// import HomePage from "./HomePage.jsx";
export default function HospitalBodypage() {
  return (
   <>

      <DoctorHeader />
    
      <Outlet/>
     <Footer/>

    
 
        
   </>
  )
}
