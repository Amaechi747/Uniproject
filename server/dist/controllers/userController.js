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
const users_1 = require("../services/users");
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, phone, password, passwordConfirm, address, email } = req.body;
        users_1.userServices.passwordCheck(password, passwordConfirm);
        const newUser = yield userSchema_1.User.create({ firstName, lastName, phone, password, passwordConfirm, address, email, createdAt: Date.now() }, { new: true });
        res.status(201).json({
            status: 'Successful',
            data: {
                newUser
            }
        });
    }
    catch (error) {
        res.status(users_1.userServices.errorCode).json({
            status: 'failed',
            error
        });
    }
});
exports.signUpController = signUpController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.userServices.login(req.body);
        let token = '';
        if (user)
            token = users_1.userServices.signToken(user.id);
        res.status(200).json({
            status: 'Successful',
            data: {
                user,
                token
            }
        });
    }
    catch (error) {
        res.status(users_1.userServices.errorCode).json({
            status: 'failed',
            error
        });
    }
});
exports.loginController = loginController;
//# sourceMappingURL=userController.js.map