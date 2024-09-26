import { Router } from "express";
import express from "express";
import { signUp, login } from "../Controller/users.controller.js";
import { signupSchema, loginSchema } from "../validator/user-validate.js";
import validate from "../middleware/validate-middleware.js";
import { userDetail } from "../Controller/users.controller.js";
import authMiddleware from "../middleware/user-middleware.js";
const router = express.Router();

router.post("/signup", validate(signupSchema), signUp);
router.post("/login", validate(loginSchema), login);
router.get("/userdetail", authMiddleware, userDetail);

export default router;
