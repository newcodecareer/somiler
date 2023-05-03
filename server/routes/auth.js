import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
// IDK which is the router for register?
export default router;
