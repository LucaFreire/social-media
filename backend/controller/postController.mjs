import Post from "../model/posts.mjs";
import { Jwt } from "jsonwebtoken";

class postController {

    static async create(req, res) {
        const { jwt, postData } = req.body;

        if (!jwt || !postData)
            return res.status(400).send({ message: "Null Values" });

        const userId = Jwt.verify(jwt, process.env.JWT_SECRET).id;

        const newPost = new Post({
            title: postData.title,
            content: postData.content,
            likes: 0,
            authorId: userId,
            comments: []
        });

        try {
            const postResponse = await newPost.save();
            return res.status(200).send(postResponse);
        } catch (error) {
            return res.status(500).send({ error: error })
        }

    }

}

export default postController;