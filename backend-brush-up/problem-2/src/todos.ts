import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "./utils/authMiddleware";

const client = new PrismaClient();
export const router = Router();

router.post("/", authMiddleware, async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const username = (req as any).user;

    try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const newTask = await client.task.create({
            data: { title, description, userId: user.id },
        });

        return res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});

router.get("/", authMiddleware, async (req: Request, res: Response) => {
    const username = (req as any).user;

    try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const tasks = await client.task.findMany({ where: { userId: user.id } });
        return res.json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});

router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const taskId = parseInt(req.params.id);
    const username = (req as any).user;

    try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const updatedTask = await client.task.updateMany({
            where: { id: taskId, userId: user.id },
            data: { title, description },
        });

        if (updatedTask.count === 0) return res.status(404).json({ msg: "Task not found or not yours" });

        return res.json({ msg: "Task updated successfully" });
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});

router.delete("/:id", authMiddleware, async (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const username = (req as any).user;

    try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const deletedTask = await client.task.deleteMany({
            where: { id: taskId, userId: user.id },
        });

        if (deletedTask.count === 0) return res.status(404).json({ msg: "Task not found or not yours" });

        return res.json({ msg: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
});
