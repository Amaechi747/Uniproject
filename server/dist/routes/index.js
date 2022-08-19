"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const property_controller_1 = require("../controllers/property.controller");
/* GET users listing. */
router.get("/viewproperties/:status", property_controller_1.getAllProperties);
exports.default = router;
//# sourceMappingURL=index.js.map