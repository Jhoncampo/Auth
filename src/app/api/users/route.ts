import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import { create } from "domain";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();

  const users = await User.find();
  return NextResponse.json(users);
};


export const POST = async (req: any) =>{
    await connectDB()

    const data = await req.json()
    console.log(data)

    const users = User.create(data)
    return NextResponse.json(users)
}