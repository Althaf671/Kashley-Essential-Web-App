import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
        throw new Error ("Invalid email or password");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error ("Invalid email or password");
    }

    // JWT Token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET!, {
        expiresIn: "1h",
    });
     return { user, token };
};
