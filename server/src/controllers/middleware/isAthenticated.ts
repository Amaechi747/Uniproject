import express, {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export const isAthenticated = async function(req: Request, res: Response, next: NextFunction){
    let token;
    if(((req.headers.authorization !== undefined) && (req.headers.authorization.startsWith('Bearer'))) ){
        try{
            token = req.headers.authorization.split(' ')[1] 

            // Verify Token
            if (process.env.JWT_SECRET){
                const verified = jwt.verify(token, process.env.JWT_SECRET);
                if(verified){
                    next(); 
                }
            }
                    
        }catch(error){
            next(new Error(`${error}`));
        }
    }
    if(!token){
        next(new Error('Not authorized, no token'));
    }

}