import express from "express";
import { getProductById } from "../Controllers/product.controller"; 

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById); 

export default router;