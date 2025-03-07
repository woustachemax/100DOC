import express from "express";
import {router as v1router} from "./index"

const app = express();
app.use(express.json());

const PORT = 300;

app.use("/api/v1", v1router )

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
