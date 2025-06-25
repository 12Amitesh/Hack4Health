import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  departmentName: { type: String, required: true},
  doctors: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
     
    }
});
const Department=mongoose.model('Department', departmentSchema);

export default  Department