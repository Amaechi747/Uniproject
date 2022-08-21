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

const findProperties = async() => {
  const properties = await Properties.find()
  return properties
}
const getPropertyWithId = async(propertyId: string) => {
  const property = await Properties.findById(propertyId)
  if(!property) throw new Error('Property not Available');
  return property;
}


export { createProperty, viewAllProperties, findProperties, getPropertyWithId  };

