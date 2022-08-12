import { Agent } from "../models/agentModel";
import { Document } from "mongoose";

const dummyAgent: AgentReg = {
    _id: '',
    name: '',
    email: '',
    contactAddress: '',
    phoneNumber: '',
    password: '',
    role: ''
}
// Promise<output<AgentReg, unknown>>
function createAgent(agent: AgentReg): output<Document<AgentReg>, unknown> {
    let agentOutput: output<Document<AgentReg> , unknown> = {result: null, error: null};
    const newAgent = new Agent(agent);
    newAgent.save((err, savedAgent: Document<any, AgentReg>) => {
        if (err) {
            agentOutput.error = err;
        } else {
            agentOutput.result = savedAgent;
        }   
    })
    return agentOutput;
    
    // .then((savedAgent: Document) => {
    //     agentOutput.result = savedAgent.toObject();
    //     return agentOutput;
    // }).catch((err) => {
    //     agentOutput.error = err;
    //     return agentOutput;
    // });
}
function getAllAgents(): Promise<output<AgentReg[], unknown>> {
    let agentOutput: output<AgentReg[], unknown> = {result: [], error: null};
    return Agent.find().then((agents: Document[]) => {
        agentOutput.result = agents.map((agent: Document) => {
            return agent.toObject();
        })
        return agentOutput;
    }).catch((err) => {
        agentOutput.error = err;
        return agentOutput;
    });
}
function getAgentById(id: string): Promise<output<AgentReg, unknown>> {
    let agentOutput:output<AgentReg, unknown> = {result: dummyAgent, error: null};
    return Agent.findById(id).then((agent: any) => {
        agentOutput.result = agent;
        return agentOutput;
    }).catch((err) => {
        agentOutput.error = err;
        return agentOutput;
    });
}
function updateAgent(id: string, agent: AgentReg): Promise<output<AgentReg, unknown>> {
    let agentOutput:output<AgentReg, unknown> = {result: dummyAgent, error: null};
    return Agent.findByIdAndUpdate(id, agent).then((updatedAgent: any) => {
        agentOutput.result = updatedAgent;
        return agentOutput;
    }).catch((err) => {
        agentOutput.error = err;
        return agentOutput;
    })
}

export default { createAgent, getAllAgents, getAgentById, updateAgent };