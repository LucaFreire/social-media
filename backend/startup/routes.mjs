import express from 'express';

function startupRoute(app) {
    app.use(express.json());

}

export default startupRoute;