import { Properties } from "../models/property.model";

const createProperty = async (
  name: string,
  location: string,
  type: string,
  price: number,
  description: string,
  images: []
) => {
  const newProperty = await Properties.create({
    name,
    location,
    type,
    price,
    description,
    images,
  });
  return newProperty;
};





export { createProperty };
