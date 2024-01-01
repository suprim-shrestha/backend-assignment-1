import { Router } from "express";

import { signup, login, reGenerateToken } from "../controllers/auth";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/refresh", reGenerateToken);

export default router;
