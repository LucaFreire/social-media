import express from 'express';
import cors from 'cors';
import startupDB from './startup/db.mjs';
import startupRoute from './startup/routes.mjs'

const app = express();

app.use(cors({
    origin: "*"
}));

const PORT = process.env.PORT || 3000;
startupDB();
startupRoute(app);

app.listen(PORT, () =>
    console.log(`Server is running: https://localhost:${PORT}`));
