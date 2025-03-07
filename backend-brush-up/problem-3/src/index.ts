import { Router } from "express";
import { router as accountRouter } from "./v1/login"

export const router = Router();

router.use("/account", accountRouter);



export default router;