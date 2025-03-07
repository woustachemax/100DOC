import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;


export const generateToken = (username: string)=>{
    return jwt.sign({username}, JWT_SECRET);
}

export const validateToken = (token: string)=>{
    try{
        return jwt.verify(token, JWT_SECRET);
    }
    catch(err){
        return null;
    }
}