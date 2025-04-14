import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/";
const client = new PrismaClient();
export function GET(res) {
    return NextResponse.json({
        email: "sid@example.com",
        name: "woustachemax"
    });
}
export async function POST(req) {
    //body
    const body = await req.json();
    //     console.log(body);
    //    //headers
    //     console.log(req.headers.get("authorization"));
    //     //query
    //     console.log(req.nextUrl.searchParams.get("name"));
    return NextResponse.json({
        body,
        message: "You are signed up"
    });
}
