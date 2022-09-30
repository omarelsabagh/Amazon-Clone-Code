import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];

        jwt.verify(`${token}`, `${process.env.TOKEN_SECRET}`);
        next();
    } catch (error) {
        res.status(401);
        res.json('Access denied, invalid token');
        return;
    }
}

export default authMiddleware;
