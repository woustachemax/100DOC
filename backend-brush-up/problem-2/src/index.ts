import express from "express"
import { router as taskRouter } from "./tasks";
import { router as todoRouter} from "./todos";

const app = express();
app.use(express.json());

const PORT = 3000;


app.use("/api/myaccount", taskRouter);
app.use("/api/todos", todoRouter)

app.listen(PORT, ()=>{
    console.log(`Server is up and Running on Port ${PORT}`)
})