import { NextResponse } from "next/server"

export async function GET(){
    const data = {"data": "hello"};

    return NextResponse.json(data);
}

export async function POST(){
    const data = {"data": "hii"};

    return NextResponse.json(data);
}