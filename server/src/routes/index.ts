import express, { NextFunction, Request, Response } from "express";
import {signUpController} from '../controllers/userController';

const router = express.Router();


/* GET users listing. */

// router.post("/superadmin/create", createSuperUser);

router.post('/register', signUpController);

export default router;
