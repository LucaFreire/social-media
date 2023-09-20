import Post from "../model/posts.mjs";

class postService {

    static async like(userId, post) {
        const likes = post.likes;
        try {
            post.likes = [...likes, userId];
            post.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async deslike(userId, post) {

    }


}

export default postService;