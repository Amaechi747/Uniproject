import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import {
  superAdminValidator,
  generateSuperAdminToken,
  passwordHandler,
} from "../utils/utils";
const {
  createSuperHandler,
  findSuperUser,
} = require("../services/superAdmin.service");

const createSuperUser = asyncHandler(async (req: Request, res: Response) => {
  const { firstname, lastname, email, password, phone, confirmPassword } =
    req.body;

  await superAdminValidator().validateAsync({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    phone: phone,
    confirmPassword: confirmPassword,
  });

  if (password !== confirmPassword) {
    res.status(401);
    throw new Error("Passwords do not match");
  }

  const existingData = await findSuperUser();
  if (existingData.length > 0) {
    res.status(401);
    throw new Error("Super admin already exist");
  }

  const hashedPass = await passwordHandler(password);
  const createData = await createSuperHandler(
    firstname,
    lastname,
    email,
    hashedPass,
    phone
  );

  const token = generateSuperAdminToken(createData._id);
  res.cookie("Token", token);
  res.cookie("Id", createData._id);
  res.cookie("Name", createData.firstname);

  res.status(201).json({
    user: createData,
    token: token,
  });
});

module.exports = { createSuperUser };
