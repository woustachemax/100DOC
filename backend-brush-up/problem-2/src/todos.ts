import express, {Router} from "express";
import { Prisma, PrismaClient, Tasks } from "@prisma/client";
import { authMiddleware } from "./utils/authMiddleware";

export const router = Router();
const client = new PrismaClient();

router.post("/tasks", authMiddleware, async (req, res)=>{
    const { title, description } = req.body;
    const username = (req as any).user;  

    try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        else
        {
            const newTask = await client.task.create({
            data: {
                title,
                description,
                userId: user.id,  
            },
        });

        res.status(201).json(newTask);
    }
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

router.get("", ()=>{

});

router.put("", ()=>{

});

router.delete("", ()=>{

});

export default router;