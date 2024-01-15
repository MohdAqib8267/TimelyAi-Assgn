import asyncHandler from "express-async-handler";
// import pool from "../index.js";
import pool from "./config.js";
  
//create a Post
export const createPost = asyncHandler(async (req, res) => {
  const { user_id, caption, media_url } = req.body;
  // console.log(req.body);

  try {
     // Input validation
     if (!user_id || !caption || !media_url) {
      return res.status(400).json({ message: 'Required fields missing' });
    }
    const result = await pool.query(
      "INSERT INTO public.posts (caption, media_url, user_id) VALUES ($1, $2, $3) RETURNING *",
      [caption, media_url, user_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All posts & spefics posts for a user(This Api handle both cases)

export const getAllPosts = asyncHandler(async (req, res) => {
  const user_id = parseInt(req.params.id);
  try {
    let result;
    if (user_id) {
        result = await pool.query(
        "select * from public.posts where user_id = $1",[user_id]
      );
    } else {
        result = await pool.query("select * from public.posts");
    }
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update Post

export const updatePost = asyncHandler(async(req,res)=>{
    const id = req.params.id; 
    const { caption, media_url, user_id } = req.body;

    try {
        const result = await pool.query(
            'UPDATE public.posts SET caption = $1, media_url = $2, user_id = $3 WHERE id = $4 RETURNING *',
            [caption, media_url, user_id, id]
        );

        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// Delete Post(This API handle both case Delete All posts of a specific user or single post)
export const deletePost = asyncHandler(async(req,res)=>{
    const id = req.params.id; //postId
    const {user_id}=req.body;

    try {
      let result;
        if(id){
            //Delete a specific post for a user
              result = await pool.query(
                'DELETE FROM public.posts WHERE id=$1 AND user_id=$2 RETURNING *',[id,user_id]
            );
            if (result.rows.length === 0) {
              return res.status(404).json({ message: 'Post not found for the user' });
            } else {
                res.status(200).json({ message: 'Post deleted successfully for the user' });
            }
        } 
        else{
            //Delete All posts for a user
                result = await pool.query(
                'DELETE FROM public.posts WHERE user_id = $1 RETURNING*',[user_id]
            );
            if (result.rows.length === 0) {
               return res.status(404).json({ message: 'No posts found for the user' });
            } else {
                res.status(200).json({ message: 'All posts deleted successfully for the user' });
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }

})