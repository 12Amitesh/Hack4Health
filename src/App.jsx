
import '../src/index.css'
import React from 'react'
import DoctorHeader from './Header/Header.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HospitalBodypage from './Body/HospitalBody.jsx'
import Department from './departments/Department.jsx';

function App() {


  return (
    <>

 <Router>
      <Routes>
        <Route path="/" element={  <HospitalBodypage/> } />
        <Route path="/departments/:departmentName" element={ <Department/>  } />
      </Routes>
    </Router>
    
    
     
 
    </>
  )
}

export default App
