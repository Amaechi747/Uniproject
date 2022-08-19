"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { createSuperUser } = require("../controllers/superAdmin.controller");
const { addAProperty } = require("../controllers/property.controller");
/* GET users listing. */
router.post("/create", createSuperUser);
router.post("/addproperties", addAProperty);
exports.default = router;
//# sourceMappingURL=superadmin.js.map