import requestService from "../services/requestService";
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

const createRequest = asyncHandler(async (req: Request, res: Response) => {
    const request = req.body;
    const requestOutput = await requestService.createRequest(request);
    res.status(201).send(requestOutput);
});

export { createRequest };