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
exports.userServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = require("../models/userSchema");
const userServices = {
    errorCode: 501,
    passwordCheck(password, passwordConfirm) {
        if (password !== passwordConfirm) {
            this.errorCode = 401;
            throw new Error('Password and Passord Confirm are not the same');
        }
    },
    login(userRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = userRequest;
            if (!email || !password) {
                this.errorCode = 401;
                throw new Error('email or password not supplied');
            }
            ;
            const user = yield (0, userSchema_1.findUserByEmail)(email);
            if (!user || !(yield (0, userSchema_1.correctPasswordCheck)(password, user.password))) {
                this.errorCode = 403;
                throw new Error('Username or Password Incorrect.');
            }
            ;
            return user;
        });
    },
    signToken: (id) => {
        return jsonwebtoken_1.default.sign(id, `${process.env.secretKey}`, {
            expiresIn: 90
        });
    }
};
exports.userServices = userServices;
//# sourceMappingURL=users.js.map