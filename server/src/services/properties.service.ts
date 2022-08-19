import { Properties } from "../models/property.model";

const createProperty = async (
  name: String,
  location: string,
  type: string,
  price: number,
  description: string,
  listed: boolean,
  images?: string
) => {
  const newProperty = await Properties.create({
    name,
    location,
    type,
    price,
    description,
    listed,
    images,
  });
  return newProperty;
};

const viewAllProperties = async (status: string) => {
  if (status === "true") {
    const getProperties = await Properties.find(
      { listed: status },
      { _id: 0, __v: 0 }
    );
    return getProperties;
  } else {
    const getProperties = await Properties.find(
      { listed: status },
      { _id: 0, __v: 0 }
    );
    return getProperties;
  }
};

export { createProperty, viewAllProperties };
