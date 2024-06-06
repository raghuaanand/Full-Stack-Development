import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export async function GET(){
    //database login
    const user =await client.user.findFirst({});
    return Response.json({name: user?.username, email: user?.password})
}

export async function POST(req : NextRequest){
    //  extract body
    // const body = await req.json();
    // header
    // console.log(req.headers.get("authorization"));
    // query params
    // console.log(req.nextUrl.searchParams.get("name"))

    //  store the body in the database
    const res = await client.user.create({
        data: {
            username: "",
            password: ""
        }
    })
    return Response.json({
        message: "you are logged in"
    })
}