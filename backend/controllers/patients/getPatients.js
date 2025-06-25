import Patient from "../../models/patienModel.js";

export  async function getAllPatient(_req, res){
    try {
    const patients = await Patient.find().populate("departmentName").populate("doctor");
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}