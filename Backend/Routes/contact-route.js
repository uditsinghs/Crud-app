import express from "express";
import contactForm from "../Controller/contact-controller.js";
const router = express.Router();

router.post("/contact", contactForm);
export default router;
