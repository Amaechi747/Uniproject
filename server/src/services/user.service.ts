import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userSchema';
import bcrypt from 'bcrypt'


const userServices = {
    errorCode: 501,
    passwordCheck(user: any){
        try {
            const {password, passwordConfirm} = user;
            console.log('here')
           if(password !== passwordConfirm) {
               this.errorCode = 401;
               throw new Error ('Password and Passord Confirm are not the same');
           }   
           return
        } catch (error) { }
       
    }, 
    async login (userRequest: IUserLogin) {
            const {email, password} = userRequest;
            if(!email || !password) {
                this.errorCode = 401;
                throw new Error ('email or password not supplied')
                };
            const user = await this.findUserByEmail(email);
            if(!user || !await this.correctPasswordCheck(password, user.password)) {
                this.errorCode = 403;
                throw new Error ('Username or Password Incorrect.')
            };
            return user;  
    },
    signToken: (id: string) => {
        return jwt.sign(id, `${process.env.secretKey}`, {
            expiresIn: 90
        })
    },

    correctPasswordCheck: async function(password: string, userPassword: string){
        return await bcrypt.compare(password, userPassword)
    },
    
    findUserByEmail: async(email: string) => {
        return await User.findOne({email});
    }
}

export { userServices}


