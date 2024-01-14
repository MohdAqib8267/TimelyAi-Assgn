import express from "express";
import { createPost, deletePost, getAllPosts, updatePost } from "../controller/postController.js";



const router = express.Router();

//Endpoints for Post

//creare Post
router.post('/posts',createPost);

//get All Posts
router.get('/posts',getAllPosts);

//get a posts for a specific user
router.get('/posts/:id',getAllPosts);

//Update Post
router.put('/posts/:id',updatePost);

//Delete Post
router.delete('/posts/:id',deletePost); //delete single post for a specific user

router.delete('/posts',deletePost);

export { router as postRoute};