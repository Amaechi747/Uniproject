import {Request, Response, NextFunction} from 'express';
import { User } from '../models/userSchema';
import {userServices} from '../services/users'


export const signUpController = async(req: Request, res: Response)=>{
    try {
        const {firstName, lastName, phone, password, passwordConfirm, address, email} = req.body;
        userServices.passwordCheck(password, passwordConfirm)
        const newUser = await User.create({firstName, lastName, phone, password, passwordConfirm, address, email, createdAt: Date.now()}, {new: true});
        res.status(201).json({
            status: 'Successful',
            data: {
                newUser
            }
        })
    } catch (error) {
        res.status(userServices.errorCode).json({
            status: 'failed',
            error
        })
    } 
}

export const loginController = async(req: Request, res: Response)=>{
    try {
       const user = await userServices.login(req.body);
       let token: string = '';
       if(user) token = userServices.signToken(user.id);
       res.status(200).json({
        status: 'Successful',
        data: {
            user,
            token
        }
    })  
    } catch (error) {
        res.status(userServices.errorCode).json({
            status: 'failed',
            error
        })
    }
}
