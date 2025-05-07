import { Router, Request, Response } from "express";

export const userRouter = Router();

userRouter.get("/hi", (req: Request, res: Response)=>{
    res.json({msg: "Hi World!"})
})