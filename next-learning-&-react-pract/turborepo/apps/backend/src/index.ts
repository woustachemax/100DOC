import express, {Router, Response, Request} from 'express';
import { userRouter } from './api/backend';

const app = express();
const PORT = 8080;

app.use("/api/v1", userRouter)

app.listen(PORT, ()=>{
    console.log(
        `Server iss up & running on Port ${PORT}`
    )
})