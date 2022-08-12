import agentService from '../services/agentservice';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

const createAgents = asyncHandler(async (req: Request, res: Response) => {
    const agent = req.body;
    const agentOutput = await agentService.createAgent(agent);
    res.status(201).send(agentOutput);
});
const getAllAgents = asyncHandler(async (req: Request, res: Response) => {
    const agentOutput = await agentService.getAllAgents();
    res.status(200).send(agentOutput);
});
const getAgentById = asyncHandler(async (req: Request, res: Response) => {
    const agentOutput = await agentService.getAgentById(req.params._id);
    res.status(200).send(agentOutput);
});
const updateAgent = asyncHandler(async (req: Request, res: Response) => {
    const agent = req.body;
    const agentOutput = await agentService.updateAgent(req.params._id, agent);
    res.status(200).send(agentOutput);
});
const deleteAgent = asyncHandler(async (req: Request, res: Response) => {
    const agentOutput = await agentService.deleteAgent(req.params._id);
    res.status(200).send(agentOutput);
});
export { createAgents, getAllAgents, getAgentById, updateAgent, deleteAgent };

