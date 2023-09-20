import Post from "../model/posts.mjs";
import Jwt from "jsonwebtoken";
import postService from "../services/postService.mjs";

class postController {

    static async create(req, res) {
        const { jwt, postData } = req.body;

        if (!jwt || !postData)
            return res.status(400).send({ message: "Null Values" });

        const userId = Jwt.verify(jwt, process.env.JWT_SECRET).id;

        console.log(userId);

        const newPost = new Post({
            title: postData.title,
            content: postData.content,
            likes: [{}],
            authorId: userId,
            comments: []
        });

        try {
            const postResponse = await newPost.save();
            return res.status(200).send(postResponse);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: error })
        }

    }

    static async getAll(req, res) {
        try {
            const data = await Post.find();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send({ message: error });
        }
    }

    static async like(req, res) {
        const { jwt, postId } = req.body;

        if (!jwt || !postId)
            return res.status(400).send({ message: "Null Values" });

        const userId = Jwt.verify(jwt, process.env.JWT_SECRET).id;
        try {
            const post = Post.findById(postId);
            var flagLike = false;

            post.likes.array.forEach(userLike => {
                if (userLike === userId) {
                    flagLike = true;
                    return;
                }
            });


            if (!flagLike)
                postService.like(userId, post);
            else
                postService.deslike(userId, post);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: error })
        }
    }
}

export default postController;