import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async(username: string, name: string, paassword: string)=>{
    const res = await prisma.user.create({
        data: {
            username,
            name,
            paassword
        }
    })
    console.log(res)

}

insertUser("sid@hmal.com", "siddharth", "password");