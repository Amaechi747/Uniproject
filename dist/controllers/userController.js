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
exports.loginController = exports.signUpController = void 0;
const userSchema_1 = require("../models/userSchema");
const user_service_1 = require("../services/user.service");
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, phone, password, passwordConfirm, address, email } = req.body;
        user_service_1.userServices.passwordCheck(req.body);
        const newUser = yield userSchema_1.User.create({ firstName, lastName, phone, password, passwordConfirm, address, email });
        return res.status(201).json({
            status: 'Successful',
            data: newUser
        });
    }
    catch (error) {
        return res.status(401).json({
            status: 'failed',
            message: "Please check your input fields and try again",
            error
        });
    }
});
exports.signUpController = signUpController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.userServices.login(req.body);
        let token = '';
        if (user)
            token = user_service_1.userServices.signToken(user.id);
        return res.status(200).json({
            status: 'Successful',
            data: {
                user,
                token
            }
        });
    }
    catch (error) {
        return res.status(user_service_1.userServices.errorCode).json({
            status: 'failed',
            error
        });
    }
});
exports.loginController = loginController;
//# sourceMappingURL=userController.js.map