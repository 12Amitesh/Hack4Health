
import  HospitalDepartmentsPage  from "../Header/test.jsx";
import DoctorHeader from "../Header/Header.jsx";
import DoctorList from "./DoctorList/DoctorList.jsx";
import HospitalAdminPage from "../HospitalAdmin/HospitalAdminPage.jsx";
export default function HospitalBodypage() {
  return (
   <>

     <DoctorHeader />
    
      <HospitalDepartmentsPage />
     < HospitalAdminPage />
        
   </>
  )
}
