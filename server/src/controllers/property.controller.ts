import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { addPropertyValidator } from "../utils/utils";
import {
  createProperty,
  viewAllProperties,

  findProperties,
  getPropertyWithId,
} from "../services/properties.service";

const addAProperty = asyncHandler(async (req: Request, res: Response) => {
  const { name, location, type, price, images, listed, description } = req.body;

  await addPropertyValidator().validateAsync({
    name,
    location,
    type,
    price,
    description,
    listed,
    images,
  });

  const newListing = await createProperty(
    name,
    location,
    type,
    price,
    description,
    listed,
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
  const status = req.params.status;
  const allProperties = await viewAllProperties(status);

  res.status(200).json({
    status: "Successful",
    message: {
      allProperties,
    },
  });
});

const getPropertyController = {
  async getProperties (req: Request, res: Response) {
    try {
      const properties = await findProperties()
      return res.status(201).json({
        message: "successful",
        properties
      })
    } catch (error) {
      return res.status(401).json({
        message: 'failed',
        error
      })
    }
  },
async getProperty (req: Request, res: Response) {
  try {
    const {propertyId} = req.params;
    const property = await getPropertyWithId(propertyId);
    return res.status(201).json({
      message: "successful",
      property
    })
  } catch (error) {
    return res.status(401).json({
      message: 'failed',
      error
    })
  }
}
}

export { addAProperty, getAllProperties, getPropertyController };

