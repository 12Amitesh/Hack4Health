import Department from "../models/departmentModel.js";
import Doctor from "../models/doctorModel.js";
export async function createDepartment(req, res) {
  try {
    const { departmentName } = req.body;
    console.log(departmentName)
    if (!departmentName) {
      return res.status(400).json({ error: "Department name is required" });
    }

    // Check if department already exists
    const existingDepartment = await Department.findOne({ departmentName });
    if (existingDepartment) {
      return res.status(409).json({ error: "Department already exists" });
    }
    const depart=departmentName

    const department = new Department({ departmentName :depart });
    await department.save();
   
    res.status(201).json({ message: 'Department created successfully', department: department });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}




export async function createDoctor(req, res) {
  const { name, department } = req.body
  console.log("hello from doctor")
  try {
    const doctor = await Doctor.create({
      name: name,
      department: department
    });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}



