
import { useParams ,useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/storeSlice";
const DoctorHeader = () => {
 const navigate = useNavigate();
  // const user = {
  //   name: "Dr. Sarah Khan",
  //   avatar: "https://i.pravatar.cc/40?img=3", // replace with actual avatar URL
  // };
 const adminProfilePage = () => {
       navigate("/HospitalAdmin")
    };
      const user = useSelector((state) => state.user);
      console.log("header component",user.user);
      
      const dispatch = useDispatch();
      const handleLogout = () => {
        console.log("logout ");
        dispatch(logoutUser());
        navigate("/Login");
      };
  return (
    <>
     <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo or App Name */}
      <div className="text-2xl font-bold text-blue-600">
      🩺 Doctor WebApp
      </div>

      {/* Department Button and User Profile Section */}
      <div className="flex items-center gap-6">
      {/* Department Button */}
      <button
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200"
        onClick={() => navigate('/department')}
      >
        Department
      </button>
      {/* User Profile Section */}
      <div className="flex items-center gap-4">
        {/* User Name */}
        <div className="text-right">
        <div className="text-sm font-medium text-gray-800">{user.email}</div>
        <button onClick={adminProfilePage} className="text-xs text-blue-600 hover:underline">
          View Profile
        </button>
        </div>

        {/* Avatar */}
        <img
       
        alt="User avatar"
        className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <button 
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200"
        onClick={handleLogout} // Add your logout handler here
        >
        Log Out
        </button>
      </div>
      </div>
    </header>
    </>
    );
};

export default DoctorHeader;
