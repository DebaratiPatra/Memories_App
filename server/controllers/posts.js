//posts.js
import mongoose from "mongoose";
import PostMessage  from "../models/postMessage.js";

export const getPosts = async (req,res) => {
  try{
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  }catch(error){
    res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req,res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try{
    await newPost.save();

    res.status(201).json(newPost);
  }catch(error){
    res.status(409).json({message: error.message});
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params;  // use id directly

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { ...req.body, _id: id },
      { new: true }
    );

    res.json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }

  try {
    const deletedPost = await PostMessage.findByIdAndDelete(id); 

    if (!deletedPost) {
      return res.status(404).json({ message: "No post found with that id" });
    }

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error("Error in deletePost:", error);
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}