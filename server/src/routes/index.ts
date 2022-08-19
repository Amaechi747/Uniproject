import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import { getAllProperties } from "../controllers/property.controller";

/* GET users listing. */

router.get("/viewproperties/:status", getAllProperties);

export default router;
