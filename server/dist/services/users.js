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
exports.signToken = exports.login = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = require("../models/userSchema");
let errorCode;
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, phone, password, passwordConfirm, address, email } = req.body;
        if (password !== passwordConfirm) {
            errorCode = 401;
            throw new Error('Password and Passord Confirm are not the same');
        }
        const user = yield userSchema_1.User.create({ firstName, lastName, phone, password, passwordConfirm, address, email, createdAt: Date.now() }, { new: true });
        res.status(201).json({
            status: 'Successful',
            data: {
                user
            }
        });
    }
    catch (error) {
        res.status(errorCode || 503).json({
            status: 'failed',
            error
        });
    }
});
exports.signUp = signUp;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            errorCode = 401;
            throw new Error('email or password not supplied');
        }
        ;
        const user = yield (0, userSchema_1.findUserByEmail)(email);
        if (!user || !(yield (0, userSchema_1.correctPasswordCheck)(password, user.password))) {
            errorCode = 403;
            throw new Error('Username or Password Incorrect.');
        }
        ;
        const token = (0, exports.signToken)(user.id);
        res.status(201).json({
            status: 'Successful',
            data: {
                user,
                token
            }
        });
    }
    catch (error) {
        res.status(errorCode || 503).json({
            status: 'failed',
            error
        });
    }
});
exports.login = login;
const signToken = (id) => {
    return jsonwebtoken_1.default.sign(id, 'secret', {
        expiresIn: 90
    });
};
exports.signToken = signToken;
//# sourceMappingURL=users.js.map