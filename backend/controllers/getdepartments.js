import Department from "../models/departmentModel.js";
import Doctor from "../models/doctorModel.js"

export async function getdepartments(_req, res){
     try {
    
    const department = await Department.find()
    console.log(department)
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export async function getDoctors(_req, res){
     try {
    
    const doctors = await Doctor.find().populate("department");
    console.log( doctors)
    res.json( doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export async function getDoctorsByDepartment(req, res) {
 try {
    const { departmentName } = req.params;
    console.log("para",req.params)
    // 1. Find department by name
    const department = await Department.findOne({ departmentName: departmentName });
    console.log(department)
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

    // 2. Find all doctors in that department
    const doctors = await Doctor.find({ department: department._id });
    console.log(doctors)
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Server error' });
  }
}


