import { Express, Request, Response, NextFunction } from "express";
import { Router } from "express";
import zod,  from "zod";
import { PrismaClient } from "@prisma/client";
import { generateToken, validateToken } from "../utils/auth";

const client = new PrismaClient();
const z = zod;
export const router = Router();

const signupSchema = z.object({
    name: z.string(),
    username: z.string().min(4),
    password: z.string().min(8)
})

router.post("/signup", async (req: Request, res: Response)=>{
    const singup = req.body();
    const validate = signupSchema.safeParse(singup);

    if(!validate.success){
        res.status(201).json({msg: "Please re-check your credentials"})
    }

    else{
        const newUser = await client.user.create({data: singup});
        const token =  generateToken(newUser.username);
        res.status(200).json(token);
    }

})

router.post("/login", (req: Request, res: Response)=>{
    const { username, password } = req.body.user || {};
    
    const usernameExists = client.user.findUnique(username);

    if(!usernameExists){
        res.status(401).json({msg: "No such user exists"})
    }

    if(!username || !password){
        res.status(401).json({msg: "check your credentials"})

    }

    else{
        const token = validateToken(username.username);
        res.status(200).json(token);

    }

})

export default router;