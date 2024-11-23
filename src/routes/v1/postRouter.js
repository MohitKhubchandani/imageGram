// routes/post.js
import express from 'express';
import upload from '../../config/multerConfig.js'; // Handles file upload
import { createPostController, deletePost, getAllPosts, updatePost } from '../../controllers/postControllers.js'; // Controller function
import { isAdmin, isAuthenticated } from '../../middleware/authMiddleware.js';
const router = express.Router();

// Route for creating a post, with file upload
router.post('/',isAuthenticated, upload.single('image'), createPostController);

router.get('/', getAllPosts);

router.delete('/:id', isAuthenticated, deletePost);

router.put('/:id', isAuthenticated, isAdmin,  upload.single('image'), updatePost);



export default router;
