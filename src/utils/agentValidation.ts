import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const agentValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    contactAddress: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password=')).required(),
    role: Joi.string().required(),
    property: Joi.string()
})

async function validateAgent(req: Request, res: Response, next: NextFunction) {
    try {
        const data = req.body;
        const valid = await agentValidation.validateAsync({...data});
        if(valid) {
            next();
        }
    } catch (error) {
        if (error instanceof Joi.ValidationError) {
            const {message} = error.details[0];
            next(new Error(message));
        }
    }
}

export default validateAgent;