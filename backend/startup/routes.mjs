import express from 'express';
import authRouter from '../routes/authRoute.mjs';
import postRouter from '../routes/postRoute.mjs'


function startupRoute(app) {
    app.use(express.json());
    app.use('/auth', authRouter);
    app.use('/post', postRouter);
}

export default startupRoute;