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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuperUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const utils_1 = require("../utils/utils");
const superAdmin_service_1 = require("../services/superAdmin.service");
const createSuperUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, password, phone, confirmPassword } = req.body;
    yield (0, utils_1.superAdminValidator)().validateAsync({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
        confirmPassword: confirmPassword,
    });
    if (password !== confirmPassword) {
        res.status(401);
        throw new Error("Passwords do not match");
    }
    const existingData = yield (0, superAdmin_service_1.findSuperUser)();
    if (existingData.length > 0) {
        res.status(401);
        throw new Error("Super admin already exist");
    }
    const hashedPass = yield (0, utils_1.passwordHandler)(password);
    const createData = yield (0, superAdmin_service_1.createSuperHandler)(firstname, lastname, email, hashedPass, phone);
    const token = (0, utils_1.generateSuperAdminToken)(createData._id);
    res.cookie("Token", token);
    res.cookie("Id", createData._id);
    res.cookie("Name", createData.firstname);
    res.status(201).json({
        user: createData,
        token: token,
    });
}));
exports.createSuperUser = createSuperUser;
//# sourceMappingURL=superAdmin.controller.js.map