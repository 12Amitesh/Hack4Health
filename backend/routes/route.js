import express from 'express';
import { createUser,  homePageController,loginController } from '../controllers/auth/authController.js';

import {createDepartment } from '../controllers/department/createdepartment.js';

import { getdepartments} from '../controllers/department/getdepartments.js';
import {getDoctors ,getDoctorsByDepartment} from "../controllers/doctors/getDoctos.js"
import {createDoctor} from "../controllers/doctors/createDoctor.js"
import  {createPatient } from '../controllers/patients/createPatient.js';
import { getAllPatient } from '../controllers/patients/getPatients.js';

import { getPatientsByDoctor } from '../controllers/patients/getPatients.js';
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
router.get("/patient/:DocotorId",getPatientsByDoctor)
export {router}