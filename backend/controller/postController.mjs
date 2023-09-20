import Post from "../model/posts.mjs";
import Jwt from "jsonwebtoken";

class postController {

    static async create(req, res) {
        const { jwt, postData } = req.body;

        console.log(jwt);
        console.log(postData);

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
            return res.status(500).send({message: error});
        }
    }
}

export default postController;