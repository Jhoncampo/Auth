import { compare, hash } from "bcryptjs";

export const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 8);
    return passwordHash;
};

export const verified = async (password: string, passwordHash: string) => {
    const isCorrect = compare(password, passwordHash);
    return isCorrect;
};
