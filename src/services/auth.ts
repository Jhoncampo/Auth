import user from "@/models/user";
import UserModel from "@/models/user";
import { encrypt, verified } from "@/utils/handleEncrypt";
import { generateToken } from "@/utils/handleJWT";

export interface User {
    name: string;
    email: string;
    password: string;
}

export const registerNewUser = async (datos: User) => {
    const { name, email, password } = datos;

    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";

    const passwordHash = await encrypt(password);

    const registerNewUser = await UserModel.create({
        name,
        email,
        password: passwordHash,
    });
    return registerNewUser;
};

export const loginUser = async ({ email, password }: User) => {
    console.log(email, password)
    const isCheck = await UserModel.findOne({ email });
    if (!isCheck) return "USER_NO_REGISTER";

    console.log("ischech--", isCheck)

    const passwordHash = isCheck.password;
    const isCorrect = verified(password, passwordHash);
    console.log(isCorrect)

    if (!isCorrect) return "PASSWORD_INCORRECT";

    const token = generateToken(isCheck.email);

    const data = {
        token,
        user: isCheck,
    };

    console.log(data)


    return data;
};
