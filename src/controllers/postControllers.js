// controllers/postController.js

import { createPost, deletePostService, getAllPostsService, updatePostService } from '../services/postService.js'; // Service function for post creation
import cloudinary from "../config/cloudinaryConfig.js"
import Post from '../schema/post.js';

export const createPostController = async (req, res) => {
  try {
    const userDetails = req.user;
    console.log(userDetails.id);
    
    const result = await cloudinary.uploader.upload(req.file.path);
    // Call service function to create a post
    const post = await createPost({
      caption: req.body.caption, 
      image: result.secure_url, 
      user: userDetails.id
    });

    return res.status(201).json({
      success: true,
      message: 'Post Created Successfully',
      data: post
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Error creating post'
    });
  }
};

export async function getAllPosts(req, res) {
  try {
    const { offset = 0, limit = 10 } = req.query;
    

    const PaginatedPosts = await getAllPostsService(offset, limit);

    return res.status(200).json({
      success: true,
      message: "All posts fetched successfully",
      data: PaginatedPosts  
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
};

export async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const response = await deletePostService(postId, req.user._id);
    if (!response) {
      return res.status(401).json({
        success: false,
        message: "Post not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: response
    })
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
          success: false,
          message: error.message
      })

  }
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
}

export async function updatePost(req, res) {
  try {
    const updateObject = { ...req.body };

    if (req.file) {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }

      const result = await cloudinary.uploader.upload(req.file.path || req.file.location);
      updateObject.image = result.secure_url;
      updateObject.cloudinary_id = result.public_id;
    }

    const response = await updatePostService(req.params.id, updateObject);

    return res.status(200).json({
      success: true,
      message: "Post Updated successfully",
      data: response,
    });
    
  } catch (error) {
    console.error("Error updating post:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}