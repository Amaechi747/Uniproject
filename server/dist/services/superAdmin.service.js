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
const SuperAdmin = require("../models/superAdmin.model");
const createSuperHandler = (firstname, lastname, email, hashedPass, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const createData = yield SuperAdmin.create({
        firstname: firstname,
        lastname: lastname,
        email: email.toLowerCase(),
        password: hashedPass,
        phone: phone,
    });
    return createData;
});
const findSuperUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield SuperAdmin.find({});
    return user;
});
module.exports = { createSuperHandler, findSuperUser };
//# sourceMappingURL=superAdmin.service.js.map