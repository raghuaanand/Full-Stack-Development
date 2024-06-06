import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export function GET(){
    //database login
    return Response.json({
        email: "raghuaanand@gmail.com",
        name: "Raghu Anand"
    })
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