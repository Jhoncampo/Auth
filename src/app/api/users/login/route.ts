import { connectDB } from "@/libs/mongodb";
import { loginUser } from "@/services/auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) =>{
    await connectDB()

    const data = await req.json()

    const response = await loginUser(data.datos)
    console.log(response)

    if(response === "USER_NO_REGISTER") return NextResponse.json("USER_NO_REGISTER", {status: 400})

    console.log(response)

    return NextResponse.json("response", {status: 200})
}