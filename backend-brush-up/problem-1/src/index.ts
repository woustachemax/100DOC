import express, {Request, Response } from "express";
import { router as pingRouter } from "./ping"; 

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api", pingRouter);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
})