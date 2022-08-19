import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

const { createSuperUser } = require("../controllers/superAdmin.controller");

/* GET users listing. */

router.post("/superadmin/create", createSuperUser);

export default router;
