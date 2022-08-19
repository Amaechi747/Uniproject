"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const property_controller_1 = require("../controllers/property.controller");
const router = express_1.default.Router();
router.get('/', property_controller_1.getPropertyController.getProperties);
router.get('/:propertyId', property_controller_1.getPropertyController.getProperty);
exports.default = router;
//# sourceMappingURL=properties.js.map