import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUser = async (username: string, password: string)=>{
    const res =  await prisma.user.delete({
        where: {email: username,
            password: password
        }
    })
    console.log(res)

}

deleteUser("sidt@bu.edu", "password");