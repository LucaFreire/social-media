import express from "express";
import authController from "../controller/authController.mjs";
const router = express.Router();

router
    .post('/register', authController.register)
    .post('/login', authController.login)

export default router;