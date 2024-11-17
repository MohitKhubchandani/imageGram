// routes/post.js
import express from 'express';
import upload from '../../config/multerConfig.js';
import { createPostController } from '../../controllers/postControllers.js'; // Controller function

const router = express.Router();

// Route for creating a post, with file upload
router.post('/posts', upload.single('image'), createPostController);

export default router;
