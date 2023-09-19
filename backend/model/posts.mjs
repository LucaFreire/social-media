import mongoose from "mongoose";

const Post = mongoose.model('Post', {
    title: String,
    content: String,
    likes: [{ ObjectId }],
    authorId: ObjectId,
    comments: {
        content: String,
        likes: Number
    }
});

export default Post;