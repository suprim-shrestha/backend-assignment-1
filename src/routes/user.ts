import { Router } from "express";

import { getUsers, getUserById } from "../controllers/user";
import { validateReqQuery } from "../middleware/validator";
import { getUserSchema } from "../schema/user";

const router = Router();

router.get("/", validateReqQuery(getUserSchema), getUsers);

router.get("/:id", getUserById);

export default router;
