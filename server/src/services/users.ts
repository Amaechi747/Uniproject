import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { User, correctPasswordCheck, findUserByEmail } from '../models/userSchema';

let errorCode: number 
export const signUp = async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const {firstName, lastName, phone, password, passwordConfirm, address, email} = req.body;
        if(password !== passwordConfirm) {
            errorCode = 401;
            throw new Error ('Password and Passord Confirm are not the same')
        }
        const user = await User.create({firstName, lastName, phone, password, passwordConfirm, address, email, createdAt: Date.now()}, {new: true});
        res.status(201).json({
            status: 'Successful',
            data: {
                user
            }
        })
    } catch (error) {
        res.status(errorCode || 503).json({
            status: 'failed',
            error
        })
    }
}

export const login = async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            errorCode = 401;
            throw new Error ('email or password not supplied')
            };
        const user = await findUserByEmail(email);
        if(!user || !await correctPasswordCheck(password, user.password)) {
            errorCode = 403;
            throw new Error ('Username or Password Incorrect.')
        };
        const token = signToken(user.id)
        res.status(201).json({
            status: 'Successful',
            data: {
                user,
                token
            }
        })
    } catch (error) {
        res.status(errorCode || 503).json({
            status: 'failed',
            error
        })
    }
}
export const signToken = (id: string) => {
    return jwt.sign(id, 'secret', {
        expiresIn: 90
    })
}