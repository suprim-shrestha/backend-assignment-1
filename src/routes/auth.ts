import { Router } from "express";

import { signup, login, reGenerateToken, logout } from "../controllers/auth";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/refresh", reGenerateToken);

router.post("/logout", auth, logout);

export default router;
