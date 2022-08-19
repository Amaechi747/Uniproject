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
exports.deleteAgent = exports.updateAgent = exports.getAgentById = exports.getAllAgents = exports.createAgents = void 0;
const agentservice_1 = __importDefault(require("../services/agentservice"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const createAgents = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agent = req.body;
    const agentOutput = yield agentservice_1.default.createAgent(agent);
    res.status(201).send(agentOutput);
}));
exports.createAgents = createAgents;
const getAllAgents = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agentOutput = yield agentservice_1.default.getAllAgents();
    res.status(200).send(agentOutput);
}));
exports.getAllAgents = getAllAgents;
const getAgentById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agentOutput = yield agentservice_1.default.getAgentById(req.params._id);
    res.status(200).send(agentOutput);
}));
exports.getAgentById = getAgentById;
const updateAgent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agent = req.body;
    const agentOutput = yield agentservice_1.default.updateAgent(req.params._id, agent);
    res.status(200).send(agentOutput);
}));
exports.updateAgent = updateAgent;
const deleteAgent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agentOutput = yield agentservice_1.default.deleteAgent(req.params._id);
    res.status(200).send(agentOutput);
}));
exports.deleteAgent = deleteAgent;
//# sourceMappingURL=agentController.js.map