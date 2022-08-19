import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { addPropertyValidator } from "../utils/utils";
import {
  createProperty,
  viewAllProperties,
} from "../services/properties.service";

const addAProperty = asyncHandler(async (req: Request, res: Response) => {
  const { name, location, type, price, images, description } = req.body;

  await addPropertyValidator().validateAsync({
    name,
    location,
    type,
    price,
    description,
    images,
  });

  const newListing = await createProperty(
    name,
    location,
    type,
    price,
    description,
    images
  );
  res.status(201).json({
    status: "Successful",
    message: {
      newListing,
    },
  });
  return;
});

const getAllProperties = asyncHandler(async (req: Request, res: Response) => {
  const allProperties = await viewAllProperties();

  res.status(200).json({
    status: "Successful",
    message: {
      allProperties,
    },
  });
});

export { addAProperty, getAllProperties };
