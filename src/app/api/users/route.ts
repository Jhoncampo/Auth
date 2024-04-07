import { connectDB } from "@/libs/mongodb";
import UserModel from "@/models/user";
import { registerNewUser } from "@/services/auth";
import { NextResponse } from "next/server";

export const GET = async () => {
    await connectDB();

    const users = await UserModel.find();
    return NextResponse.json(users);
};



