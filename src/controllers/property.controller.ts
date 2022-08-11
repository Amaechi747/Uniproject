import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { addPropertyValidator } from "../utils/utils";
import { createProperty } from "../services/properties.service";

const addAProperty = asyncHandler(async (req: Request, res: Response) => {
  const { name, location, type, price, images, description } = req.body;

  await addPropertyValidator().validateAsync({
    name,
    location,
    type,
    price,
    description,
  });

  const newListing = await createProperty(
    name,
    location,
    type,
    price,
    images,
    description
  );
  res.status(201).json({
    status: "Successful",
    message: {
      newListing,
    },
  });
  return;
});

export { addAProperty };
