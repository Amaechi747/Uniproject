"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPropertyValidator = exports.passwordHandler = exports.generateSuperAdminToken = exports.superAdminValidator = void 0;
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const generateSuperAdminToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_PASS, {
        expiresIn: "3d",
    });
};
exports.generateSuperAdminToken = generateSuperAdminToken;
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
exports.superAdminValidator = superAdminValidator;
const addPropertyValidator = () => {
    return Joi.object({
        name: Joi.string().required(),
        location: Joi.string().required(),
        type: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
    });
};
exports.addPropertyValidator = addPropertyValidator;
const passwordHandler = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(password, salt);
    return hashedPassword;
});
exports.passwordHandler = passwordHandler;
//# sourceMappingURL=utils.js.map