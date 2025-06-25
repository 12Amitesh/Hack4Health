import  Patient  from "../../models/patienModel.js";

export async function createPatient(req, res) {
  try {
    const {departmentName,doctorName,disease,patientName} = req.body;
    console.log(`the patient name is ${patientName} and the doctor assign to it ${doctorName}  and problems is ${disease} depart $
      ${departmentName}`)
    if (!patientName) {
      return res.status(400).json({ error: "Department name is required" });
    }

    // Check if department already exists
    const existingDepartment = await  Patient.findOne({ patientName });
    if (existingDepartment) {
      return res.status(409).json({ error: "Department already exists" });
    }
    const patient=patientName

    const department = new Patient({ patientName :patientName,doctor:doctorName,disease,departmentName:departmentName });
    await department.save();
   
    res.status(201).json({ message: 'patient created successfully', department: department });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
