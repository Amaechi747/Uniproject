import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import {
  superAdminValidator,
  generateSuperAdminToken,
  passwordHandler,
} from "../utils/utils";
const Super = require('../models/superAdmin.model')
import {
  createSuperHandler,
  findSuperUser,
} from "../services/superAdmin.service";

const createSuperUser = asyncHandler(async (req: Request, res: Response) => {
  const { firstname, lastname, email, password, phone, confirmPassword } =
    req.body;
console.log(req.body)

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

  const existingUser = await Super.findOne({email})

  console.log(existingUser)

  const hashedPass = await passwordHandler(password);
  const createData = await createSuperHandler(
    firstname,
    lastname,
    email,
    hashedPass,
    phone
  );
  console.log(createData)

  const token = generateSuperAdminToken(createData._id);
  res.cookie("Token", token);
  res.cookie("Id", createData._id);
  res.cookie("Name", createData.firstname);

  res.status(201).json({
    user: createData,
    token: token,
  });
});

export { createSuperUser };
