import  Patient  from "../../models/patient_Model/patienModel.js";

export async function createPatient(req, res) {
  try {
    const {departmentName,doctorName,disease,patientName} = req.body;
    console.log(`the patient name is ${patientName} and the doctor assign to it ${doctorName}  and problems is ${disease} depart $
      ${departmentName}`)
    if (!patientName) {
      return res.status(400).json({ error: "Department name is required" });
    }

    // Check if department already exists
    const existingPatient = await  Patient.findOne({ patientName });
    if (existingPatient) {
      return res.status(409).json({ error: "Patient already exists" });
    }
    const patient=patientName

    const department = new Patient({ patientName :patientName,doctor:doctorName,disease,departmentName:departmentName });
    await department.save();
   
    res.status(201).json({ message: 'patient created successfully', department: department });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
