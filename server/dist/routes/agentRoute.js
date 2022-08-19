"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agentController_1 = require("../controllers/agentController");
const agentValidation_1 = __importDefault(require("../utils/agentValidation"));
const router = express_1.default.Router();
router.post('/addAgent', agentValidation_1.default, agentController_1.createAgents);
router.get('/agents', agentValidation_1.default, agentController_1.getAllAgents);
router.get('/club', agentValidation_1.default, agentController_1.getAgentById);
router.put('/updateAgent', agentValidation_1.default, agentController_1.updateAgent);
router.delete('/deleteAgent', agentValidation_1.default, agentController_1.deleteAgent);
exports.default = router;
//# sourceMappingURL=agentRoute.js.map