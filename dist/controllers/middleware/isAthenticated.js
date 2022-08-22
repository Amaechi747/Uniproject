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
exports.isAthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAthenticated = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let token;
        if (((req.headers.authorization !== undefined) && (req.headers.authorization.startsWith('Bearer')))) {
            try {
                token = req.headers.authorization.split(' ')[1];
                // Verify Token
                if (process.env.JWT_SECRET) {
                    const verified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                    if (verified) {
                        next();
                    }
                }
            }
            catch (error) {
                next(new Error(`${error}`));
            }
        }
        if (!token) {
            next(new Error('Not authorized, no token'));
        }
    });
};
exports.isAthenticated = isAthenticated;
//# sourceMappingURL=isAthenticated.js.map