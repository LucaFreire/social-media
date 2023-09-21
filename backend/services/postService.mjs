import Post from "../model/posts.mjs";

class postService {

    static async like(userId, postId) {

        console.log('likeeee');
        const post = await Post.findById(postId);
        const likes = [...post.likes, userId];

        try {
            post.likes = likes;
            await post.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async deslike(userId, postId) {
        console.log('deslikeeee');
        const post = await Post.findById(postId);

        const likes = post.likes;
        const newLikes = likes.filter(like => like !== userId);
        try {
            post.likes = newLikes;
            await post.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async isLiked(userId, postId) {
        console.log('isLikedd');
        const post = await Post.findById(postId);

        return post.likes.includes(userId)
    }
}

export default postService;