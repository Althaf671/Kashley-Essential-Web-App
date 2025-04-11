import express from "express";
import { createCategory } from "../Controllers/category.controller"; 

const router = express.Router();

router.post("/categories", createCategory); 

export default router;