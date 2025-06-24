import express from 'express';
import { createUser } from '../controllers/controllers.js';
import { homePageController } from '../controllers/controllers.js';
import { loginController } from '../controllers/controllers.js';
const router = express.Router()


router.get("/",homePageController);
router.post("/SignUp",createUser)



router.post('/login',loginController );

export {router}