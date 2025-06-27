import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  disease: { type: String, required: true },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  departmentName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  }
});
const Patient=mongoose.model('Patient', patientSchema);
export default Patient
