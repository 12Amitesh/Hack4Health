import {User} from "../models/userModel.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export async function homePageController(req,res){
    res.send("this is home page controller")
}


export async function createUser(req, res) {
    
     console.log(req.body)
        
      const { username, email, password } = req.body;
      const saltRounds = 3;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
      }
     
      try {
        const newUser = new User({ username, email, password:hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
       
      } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
      }
}


export async function loginController(req,res){
   try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // Validate input
    if (!user) {
      return res.status(400).json({ message: 'user not found' });
    }


    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });
    const token = jwt.sign({ id: user._id },process.env.JWT_SECRET || "secret", { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    console.log("user logged ")
   
   
  
}catch(err){
     console.error(error);
    res.status(500).json({ message: 'Login failed' });
}
}

