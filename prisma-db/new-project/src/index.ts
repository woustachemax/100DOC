import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (username: string, password: string, firstName: string, lastName: string)=> {
     const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName 
        }
     })

     console.log(res)
}
insertUser("sru@bu.edu", "password", "srushti", "raste");


