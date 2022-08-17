"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const superAdmin_controller_1 = require("../controllers/superAdmin.controller");
const router = express_1.default.Router();
/* GET home page. */
// router.post('/signup', signUp);
router.post('/superadmin/create', superAdmin_controller_1.createSuperUser);
exports.default = router;
//# sourceMappingURL=index.js.map