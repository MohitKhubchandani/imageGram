// routes/post.js
import express from 'express';
import upload from '../../config/multerConfig.js'; // Handles file upload
import { createPostController, deletePost, getAllPosts, updatePost } from '../../controllers/postControllers.js'; // Controller function
const router = express.Router();

// Route for creating a post, with file upload
router.post('/', upload.single('image'), createPostController);

router.get('/', getAllPosts);

router.delete('/:id', deletePost);

router.put('/:id',  upload.single('image'), updatePost);

export default router;
