import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jhon1234";

export const generateToken = (email: string) => {
    const jwt = sign({ email }, JWT_SECRET, {
        expiresIn: "1hr",
    });
    return jwt;
};

export const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};
