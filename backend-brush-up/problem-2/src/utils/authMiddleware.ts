import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ msg: "NO ACCESS" });
        return; 
    }

    const token = await authHeader.split(" ")[1];

    try {
        const decoded = await jwt.verify(token, JWT_SECRET) as { username: string };
        (req as any).user = decoded.username;
        return next(); 
    } catch (err) {
        res.status(401).json({ error: "Invalid token" });
        return; 
    }
};
