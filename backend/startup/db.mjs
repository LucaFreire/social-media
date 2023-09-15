import mongoose from "mongoose";

const URI = process.env.URI;

function startupDB() {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopologu: true })
        .then(() => console.log(`connected to ${URI}`));
}

export default startupDB;