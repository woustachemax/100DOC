import { Router } from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client"
import { generateToken } from "./utils/auth";

const client  = new PrismaClient();
export const router = Router();

const userSchema = z.object({
    username: z.string(),
    password: z.string()
})

router.post("/signup", async (req, res)=>{
    const user = req.body.user;
    const validate = userSchema.safeParse(user)
    if(! validate.success){
        res.status(200).json({
            message: "Please enter a valid username/password"
        })
    }

    const newUser = await client.user.create({data: user});

    const token = generateToken(newUser.username);

    res.json({token});

})

router.post("/login", async (req, res)=>{
    const {username, password} =  req.body.user || {};
    
    console.log("Request Body:", req.body);

    if (!username || !password) {
         res.status(400).json({ msg: "Username and password are required" });
    }

    try {
        const user = await client.user.findUnique({
            where: { username }
        });

        if (!user || password !== user.password) {
             res.status(401).json({ msg: "Invalid username or password" });
        }

        else {
            const token = generateToken(user.username);
            res.json({ token });
        }

    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ msg: "Internal server error" });
    }


})

export default router;