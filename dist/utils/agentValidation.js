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
const joi_1 = __importDefault(require("joi"));
const agentValidation = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    contactAddress: joi_1.default.string().required(),
    phoneNumber: joi_1.default.string().required(),
    password: joi_1.default.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: joi_1.default.any().valid(joi_1.default.ref('password=')).required(),
    role: joi_1.default.string().required(),
    property: joi_1.default.string()
});
function validateAgent(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const valid = yield agentValidation.validateAsync(Object.assign({}, data));
            if (valid) {
                next();
            }
        }
        catch (error) {
            if (error instanceof joi_1.default.ValidationError) {
                const { message } = error.details[0];
                next(new Error(message));
            }
        }
    });
}
exports.default = validateAgent;
//# sourceMappingURL=agentValidation.js.map