
import { useParams ,useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/storeSlice";
const DoctorHeader = () => {
 
 

     
  return (
    <>
     <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo or App Name */}
      <div className="text-2xl font-bold text-blue-600">
      🩺 Doctor WebApp
      </div>

      {/* Department Button and User Profile Section */}
      <div className="flex items-center gap-6">
     
      <div className="flex items-center gap-4">
        {/* User Name */}
        <div className="text-right">
      
        </div>

        {/* Avatar */}
        <img
        src={ ""}
        alt="User avatar"
        className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
       
      </div>
      </div>
    </header>
    </>
    );
};

export default DoctorHeader;
