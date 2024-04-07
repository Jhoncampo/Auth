import UserModel from "@/models/user";

export interface User {
    name: string,
    email: string,
    password: string,
}

export const registerNewUser = async (datos: User) => {
    const { email } = datos;

    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";

    const registerNewUser = await UserModel.create(datos);
    return registerNewUser;
};

export const LoginUser = () => {};
