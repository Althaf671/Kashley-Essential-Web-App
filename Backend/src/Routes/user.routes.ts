import { Router } from "express";
import { loginController } from "../Controllers/user.controller";

const router = Router();

router.post("/login", loginController);

export default router;  // Export the router to use it in other files
