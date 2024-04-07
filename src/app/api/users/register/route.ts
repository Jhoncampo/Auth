import { connectDB } from "@/libs/mongodb";
import { registerNewUser } from "@/services/auth";

export const POST = async (req: any) => {
    await connectDB();
    const data = await req.json();
    const users = await registerNewUser(data.datos);
    if(users === "ALREADY_USER"){
      return new Response("ALREADY_USER", {status: 401})
    }

    return new Response("OK", {status: 200})
};