
import mongoose from "mongoose";



const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            
        });
        console.log('MongoDB Connected ✅');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};
export { connectDB }
