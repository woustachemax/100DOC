import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();

export function GET (res: NextResponse){
    return  NextResponse.json({
        email:"sid@example.com",
        name: "woustachemax"
    })
}


export async function POST (req: NextRequest){
    //body
    const body = await req.json();
    try{
        await client.user.create({
            data:{
                username: body.username,
                password: body.password
            }
        })
    }
    catch(e){
        return NextResponse.json({msg: "Error while signingup "})
    }
//     console.log(body);

//    //headers
//     console.log(req.headers.get("authorization"));

//     //query
//     console.log(req.nextUrl.searchParams.get("name"));

    return NextResponse.json({
        body,
        message: "You are signed up"
    })

   
}