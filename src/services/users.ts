import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { User, correctPasswordCheck, findUserByEmail } from '../models/userSchema';


const userServices: any = {
    errorCode: 501,
    passwordCheck(password: string, passwordConfirm: string){
        if(password !== passwordConfirm) {
            this.errorCode = 401;
            throw new Error ('Password and Passord Confirm are not the same');
        }
    }, 
    async login (userRequest: IUserLogin) {
            const {email, password} = userRequest;
            if(!email || !password) {
                this.errorCode = 401;
                throw new Error ('email or password not supplied')
                };
            const user = await findUserByEmail(email);
            if(!user || !await correctPasswordCheck(password, user.password)) {
                this.errorCode = 403;
                throw new Error ('Username or Password Incorrect.')
            };
            return user;  
    },
    signToken: (id: string) => {
        return jwt.sign(id, `${process.env.secretKey}`, {
            expiresIn: 90
        })
    }
}

export { userServices}


