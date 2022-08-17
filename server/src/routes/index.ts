import express, { NextFunction, Request, Response } from "express";
import {createSuperUser} from '../controllers/superAdmin.controller';

const router = express.Router();

/* GET home page. */
// router.post('/signup', signUp);

router.post('/superadmin/create', createSuperUser);


export default router;
