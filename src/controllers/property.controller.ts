import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { addPropertyValidator } from "../utils/utils";
import { createProperty, findProperties, getPropertyWithId } from "../services/properties.service";

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

export { addAProperty, getPropertyController };
  

