"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../services/users");
const router = express_1.default.Router();
/* GET users listing. */
router.post('/signup', users_1.signUp);
exports.default = router;
//# sourceMappingURL=users.js.map