import {Request, Response, NextFunction} from 'express';
import { User } from '../models/userSchema';
import {userServices} from '../services/user.service'


export const signUpController = async(req: Request, res: Response)=>{
    try {
        const {firstName, lastName, phone, password, passwordConfirm, address, email} = req.body;
        userServices.passwordCheck(req.body);
       
        const newUser = await User.create({firstName, lastName, phone, password, passwordConfirm, address, email});
        return res.status(201).json({
            status: 'Successful',
            data: newUser
        })
    } catch (error) {
        return res.status(401).json({
            status: 'failed',
            message: "Please check your input fields and try again",
            error
        })
    } 
}

export const loginController = async(req: Request, res: Response)=>{
    try {
       const user = await userServices.login(req.body);
       let token: string = '';
       if(user) token = userServices.signToken(user.id);
       return res.status(200).json({
        status: 'Successful',
        data: {
            user,
            token
        }
    })  
    } catch (error) {
        return res.status(userServices.errorCode).json({
            status: 'failed',
            error
        })
    }
}
