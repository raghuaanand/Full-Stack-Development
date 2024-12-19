import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        messgae: 'Hi, This is Raghu Anand!'
    });
}