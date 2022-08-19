import { Properties } from "../models/property.model";

const createProperty = async (
  name: String,
  location: string,
  type: string,
  price: number,
  description: string,
  images?: string
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

const viewAllProperties = async () => {
  const getProperties = await Properties.find({}, { _id: 0, __v: 0 });
  return getProperties;
};

export { createProperty, viewAllProperties };
