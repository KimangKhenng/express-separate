import posts from "../models/postModel.js";

const getAllPosts = async (req, res) => {
    return res.status(200).json(posts);
}

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json(post);
}
export { getAllPosts, getPostById };