
// import  HospitalDepartmentsPage  from "./HospitalDepartmentPage..jsx";
import DoctorHeader from "../Header/Header.jsx";
// import DoctorList from "./DoctorList/DoctorList.jsx";
// import HospitalAdminPage from "../HospitalAdmin/HospitalAdminPage.jsx";
import { Outlet ,NavLink, useParams} from "react-router-dom";
import Footer from "../Footer/footer.jsx";





export default function HospitalBodypage() {
  return (
  <>
  <DoctorHeader/>
    <div className="flex h-screen">
     
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Departments</h2>
        <nav className="space-y-2">
          <NavLink to="departments" className="block hover:bg-gray-700 p-2 rounded">All Departments</NavLink>
          <NavLink to="departments/cardiology" className="block hover:bg-gray-700 p-2 rounded">Cardiolfggogy</NavLink>
          <NavLink to="departments/neurology" className="block hover:bg-gray-700 p-2 rounded">Neurology</NavLink>
          <NavLink to="HospitalAdmin" className="block hover:bg-gray-700 p-2 rounded">Admin Panel</NavLink>
        </nav>
      </aside>
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      <Outlet />
    </main>
     </div>
     <Footer/>
  </>
   
   
  );
}
