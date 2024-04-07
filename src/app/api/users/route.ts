import { connectDB } from "@/libs/mongodb";
import UserModel from "@/models/user";
import { registerNewUser } from "@/services/auth";
import { NextResponse } from "next/server";

export const GET = async () => {
    await connectDB();

    const users = await UserModel.find();
    return NextResponse.json(users);
};

export const POST = async (req: any) => {
    await connectDB();
    const data = await req.json();
    const users = await registerNewUser(data.datos);
    if(users === "ALREADY_USER"){
      return new Response("ALREADY_USER", {status: 401})
    }

    return new Response("OK", {status: 200})
};
