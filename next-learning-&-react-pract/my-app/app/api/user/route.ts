import { NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(body);

    return Response.json({
        message: "You're logged in",
        user
    });
}
