import mongoose from "mongoose";

const Post = mongoose.model('Post', {
    title: String,
    content: String,
    likes: Array,
    authorId: Object,
    comments: {
        content: String,
        likes: Number
    }
});

export default Post;