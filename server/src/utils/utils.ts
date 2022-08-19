const jwt = require("jsonwebtoken");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const generateSuperAdminToken = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET_PASS, {
    expiresIn: "3d",
  });
};

const superAdminValidator = () => {
  return Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    confirmPassword: Joi.ref("password"),
  });
};

const addPropertyValidator = () => {
  return Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    type: Joi.string().required(),
    price: Joi.number().required(),
    images: Joi.string().required(),
    description: Joi.string().required(),
  });
};

const passwordHandler = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export {
  superAdminValidator,
  generateSuperAdminToken,
  passwordHandler,
  addPropertyValidator,
};
