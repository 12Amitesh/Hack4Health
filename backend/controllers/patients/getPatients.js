import Patient from "../../models/patient_Model/patienModel.js";

export  async function getAllPatient(_req, res){
    try {
    const patients = await Patient.find().populate("departmentName").populate("doctor");
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}
export async function getPatientsByDoctor(req, res) {
  try {
    const { doctorId } = req.params;
   
    const patients = await Patient.find({ "doctor._id": doctorId });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}
