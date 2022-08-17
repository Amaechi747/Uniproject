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
exports.findSuperUser = exports.createSuperHandler = void 0;
const superAdmin_model_1 = __importDefault(require("../models/superAdmin.model"));
const createSuperHandler = (firstname, lastname, email, hashedPass, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const createData = yield superAdmin_model_1.default.create({
        firstname: firstname,
        lastname: lastname,
        email: email.toLowerCase(),
        password: hashedPass,
        phone: phone,
    });
    return createData;
});
exports.createSuperHandler = createSuperHandler;
const findSuperUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield superAdmin_model_1.default.find({});
    return user;
});
exports.findSuperUser = findSuperUser;
//# sourceMappingURL=superAdmin.service.js.map