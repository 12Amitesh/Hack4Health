import express from 'express';
import { createUser } from '../controllers/authController.js';
import { homePageController } from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import {createDepartment } from '../controllers/createdepartment.js';
import { createDoctor } from '../controllers/createdepartment.js';
import { getdepartments, getDoctors ,getDoctorsByDepartment} from '../controllers/getdepartments.js';
import  {createPatient } from '../controllers/patients/createPatient.js';
import { getAllPatient } from '../controllers/patients/getPatients.js';
const router = express.Router()


router.get("/",homePageController);
router.post("/SignUp",createUser)



router.post('/login',loginController );
router.post("/departments",createDepartment)
router.post("/doctor",createDoctor)
router.post("/patient",createPatient)
router.get("/departments",getdepartments)
router.get("/doctor",getDoctors)
router.get("/doctor/:departmentName",getDoctorsByDepartment)
router.get("/patients",getAllPatient)
export {router}