
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
    
   
});

const User = mongoose.model('User', userSchema);

export {
    User
}