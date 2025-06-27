import Department from "../../models/Department_Model/departmentModel.js";
import Doctor from "../../models/doctors_Model/doctorModel.js"

export async function getdepartments(_req, res){
     try {
    
    const department = await Department.find()
    console.log(department)
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



