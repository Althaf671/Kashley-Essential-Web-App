import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.body.name) {
            res.status(422).json({ name: 'Name is Required' });
            return
        }

        const newCategory = await prisma.category.create({ 
            data: {
                name: req.body.name
            }
        });

        res.status(201).json(newCategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        res.status(500).json({ error: 'An unknown error occurred' });
    }
};

