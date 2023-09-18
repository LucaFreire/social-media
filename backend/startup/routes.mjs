import express from 'express';
import authRouter from '../routes/authRoute.mjs';


function startupRoute(app) {
    app.use(express.json());
    app.use('/users', authRouter);
}

export default startupRoute;