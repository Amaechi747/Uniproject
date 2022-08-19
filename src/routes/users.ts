import express, { NextFunction, Request, Response } from "express";
import { loginController, signUpController } from "../controllers/userController";

const router = express.Router();

/* GET users listing. */
router.post('/signup', signUpController);
router.post('/login', loginController)


export default router;