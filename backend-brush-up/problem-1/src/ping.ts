import express, {Request, Response } from "express"
import { Router } from "express";
import { Schema, z } from "zod";
import { Prisma, PrismaClient } from "@prisma/client";
import { generateToken } from "./utils/auth";
const client = new PrismaClient();


export const router  = Router();

router.get("/ping", (req, res)=>{
    res.json({message: "pong"});
});

const messageSchema =  z.string();

router.post("/echo", (req, res)=>{
    const msg = req.body.message;
    const validate = messageSchema.safeParse(msg);

    if(! validate.success){
        res.status(400).json({msg: "please enter some data"})
    }
    res.json({message: validate.data})
})


router.get('/messages', async (req, res)=>{
    const messages = await client.message.findMany();
    res.status(200).json({
        messages
    })
})



router.post('/messages', async (req, res)=>{
    const msg = req.body.message;
    const validate = messageSchema.safeParse(msg);

 if( !validate.success){
    res.status(400).json({msg: "please enter valid data"})
 }

    const newMessage = await client.message.create({
        data: {message: msg}
    });

    res.status(201).json(newMessage);
})


router.post("/signup", async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await client.user.create({
            data: { username, password }, 
        });

        const token = generateToken(user.username);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error: "User already exists or an error occurred" });
    }
});

router.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await client.user.findUnique({ where: { username } });

    if (!user || user.password !== password) {
         res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user.username);
    res.json({ token });
});

export default router;