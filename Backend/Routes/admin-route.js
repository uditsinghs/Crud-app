import express from "express";
import {
  getAllUsers,
  getAllContactData,
  deleteUser,
  getSingleUserData,
  updateUser,
} from "../Controller/admin-controller.js";
import authMiddleware from "../middleware/user-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
const router = express.Router();

router.get("/user", authMiddleware, adminMiddleware, getAllUsers);
router.get("/adminContact", authMiddleware, adminMiddleware, getAllContactData);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, deleteUser);
router.get("/users/:id", authMiddleware, adminMiddleware, getSingleUserData);
router.patch("/users/update/:id", updateUser);

export default router;
