import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

const updateUser = async (username: string, {
    firstName,
    lastName
}: UpdateParams) => {
  const res = await prisma.user.update({
    where: {email: username},
    data: {
        firstName,
        lastName
    }
  })
  console.log(res);
}


updateUser("sidt@bu.edu", {
    firstName: "Siddharth", 
    lastName: "Thakkar"})