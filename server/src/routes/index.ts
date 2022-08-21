import express, { NextFunction, Request, Response } from "express";
import {signUpController} from '../controllers/userController';

const router = express.Router();
import { getAllProperties } from "../controllers/property.controller";

/* GET users listing. */

router.get("/viewproperties/:status", getAllProperties);

router.post('/register', signUpController);

export default router;
