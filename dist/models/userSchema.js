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
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: validator_1.default.isEmail
    },
    imageUrl: String,
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
        // select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    passwordConfirm: {
        type: String,
    },
    createdAt: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});
//hash password before saving to database
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.password === this.passwordConfirm) {
            this.password = yield bcrypt_1.default.hash(this.password, 10);
            this.passwordConfirm = undefined;
            next();
        }
    });
});
//if its not a new user and password is modified
userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew)
        return next();
    this.passwordChangedAt = new Date(Date.now() - 1000);
    next();
});
//check if user status is active before returning user
userSchema.pre('find', function (next) {
    this.find({ active: { $ne: false } });
    next();
});
//check if user status is active before returning user
userSchema.pre('findOne', function (next) {
    this.find({ active: { $ne: false } });
    next();
});
//check if user status is active before returning user
userSchema.pre('findById', function (next) {
    this.find({ active: { $ne: false } });
    next();
});
exports.User = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=userSchema.js.map