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

const findProperties = async() => {
  const properties = await Properties.find()
  return properties
}

const getPropertyWithId = async(propertyId: string) => {
  const property = await Properties.findById(propertyId)
  if(!property) throw new Error('Property not Available');
  return property;
}

export { createProperty, findProperties, getPropertyWithId };
