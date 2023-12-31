import mongoose from "mongoose";

const Users = mongoose.model('Users', {
    name: String,
    email: String,
    birthdate: Date,
    hashCode: String,
});

export default Users;