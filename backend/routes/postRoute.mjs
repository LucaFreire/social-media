import express from "express";
import postController from "../controller/postController.mjs";
const router = express.Router();

router
    .post('/create', postController.create)
    .get('/getAll', postController.getAll)
    .post('/like', postController.like)
    .post('/isLiked', postController.isLiked)

export default router;