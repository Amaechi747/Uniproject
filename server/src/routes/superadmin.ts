import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

const { createSuperUser } = require("../controllers/superAdmin.controller");
const { addAProperty } = require("../controllers/property.controller");

/* GET users listing. */

router.post("/create", createSuperUser);
router.post("/addproperties", addAProperty);

export default router;
