import Doctor from "../../models/doctors_Model/doctorModel.js";
import Department from "../../models/Department_Model/departmentModel.js";
export async function getDoctors(req, res){
     try {
    console.log("all doctors api")
    const doctors = await Doctor.find();
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
    console.log("jj",department)
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