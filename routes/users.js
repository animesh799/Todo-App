import express from "express";

import { login, register, getMyProfile, logout } from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMyProfile);

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

export default router;
