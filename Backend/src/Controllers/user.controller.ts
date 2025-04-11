import { Request, Response } from "express";
import { loginUser } from "../Services/user.service";

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const data = await loginUser(email, password);
        res.json(data);
        } catch (error) {
            res.status(400).json({ message: "Invalid email or password" });
        }
};