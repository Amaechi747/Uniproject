"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
const property_controller_1 = require("../controllers/property.controller");
/* GET users listing. */
router.get("/viewproperties/:status", property_controller_1.getAllProperties);
router.post('/register', userController_1.signUpController);
exports.default = router;
//# sourceMappingURL=index.js.map