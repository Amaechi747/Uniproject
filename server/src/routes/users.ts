import express, { NextFunction, Request, Response } from "express";
import {signUp} from '../services/users';

const router = express.Router();

/* GET users listing. */
router.post('/signup', signUp);




export default router;
