"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const agentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'client'
    },
    property: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Properties',
        default: null
    }
}, { timestamps: true });
exports.Agent = mongoose_1.default.model('Agent', agentSchema);
//# sourceMappingURL=agentModel.js.map