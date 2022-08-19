"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agentModel_1 = require("../models/agentModel");
const dummyAgent = {
    _id: '',
    name: '',
    email: '',
    contactAddress: '',
    phoneNumber: '',
    password: '',
    role: ''
};
// Promise<output<AgentReg, unknown>>
function createAgent(agent) {
    let agentOutput = { result: null, error: null };
    const newAgent = new agentModel_1.Agent(agent);
    newAgent.save((err, savedAgent) => {
        if (err) {
            agentOutput.error = err;
        }
        else {
            agentOutput.result = savedAgent;
        }
    });
    return agentOutput;
    // .then((savedAgent: Document) => {
    //     agentOutput.result = savedAgent.toObject();
    //     return agentOutput;
    // }).catch((err) => {
    //     agentOutput.error = err;
    //     return agentOutput;
    // });
}
function getAllAgents() {
    let agentOutput = { result: [], error: null };
    return agentModel_1.Agent.find().then((agents) => {
        agentOutput.result = agents.map((agent) => {
            return agent.toObject();
        });
        return agentOutput;
    }).catch((err) => {
        agentOutput.error = err;
        return agentOutput;
    });
}
function getAgentById(id) {
    let agentOutput = { result: dummyAgent, error: null };
    return agentModel_1.Agent.findById(id).then((agent) => {
        agentOutput.result = agent;
        return agentOutput;
    }).catch((err) => {
        agentOutput.error = err;
        return agentOutput;
    });
}
function updateAgent(id, agent) {
    let agentOutput = { result: dummyAgent, error: null };
    return agentModel_1.Agent.findByIdAndUpdate(id, { name: agent.name, email: agent.email, contactAddress: agent.contactAddress, phoneNumber: agent.phoneNumber, password: agent.password, role: agent.role, property: agent.property }).then((updatedAgent) => {
        agentOutput.result = updatedAgent;
        return agentOutput;
    });
}
function deleteAgent(id) {
    let agentOutput = { result: dummyAgent, error: null };
    return agentModel_1.Agent.findByIdAndDelete(id).then((deletedAgent) => {
        agentOutput.result = deletedAgent;
        return agentOutput;
    }).catch((err) => {
        agentOutput.error = err;
        return agentOutput;
    });
}
exports.default = { createAgent, getAllAgents, getAgentById, updateAgent, deleteAgent };
//# sourceMappingURL=agentservice.js.map