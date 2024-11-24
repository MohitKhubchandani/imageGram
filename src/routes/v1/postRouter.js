// routes/post.js
import express from 'express';
import upload from '../../config/multerConfig.js'; // Handles file upload
import { createPostController, deletePost, getAllPosts, updatePost } from '../../controllers/postControllers.js'; // Controller function
import { isAdmin, isAuthenticated } from '../../middleware/authMiddleware.js';
const router = express.Router();
/**
 * @swagger
 * /posts:
 *  get:
 *      summary: Get all posts
 *      description: Fetch a list of all posts
 *      responses:
 *          200:
 *              description: List of all posts
 *          500:
 *              description: Server error
 */
router.get('/', getAllPosts);

/**
 * @swagger
 * /posts:
 *  post:
 *      summary: Create a new post
 *      description: Create a new post with an image
 *      consumes:
 *          - multipart/form-data
 *      parameters:
 *          - in: formData
 *            name: image
 *            type: file
 *            description: Image file to upload
 *          - in: formData
 *            name: caption
 *            type: string
 *            description: Caption for the post
 *      responses:
 *          201:
 *              description: Post created successfully
 *          400:
 *              description: Bad request
 *          401:
 *              description: Unauthorized
 */
router.post('/', isAuthenticated, upload.single('image'), createPostController);

/**
 * @swagger
 * /posts/{id}:
 *  delete:
 *      summary: Delete a post
 *      description: Delete a post by its ID
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *            description: The ID of the post to delete
 *      responses:
 *          200:
 *              description: Post deleted successfully
 *          401:
 *              description: Unauthorized
 *          404:
 *              description: Post not found
 */
router.delete('/:id', isAuthenticated, deletePost);

/**
 * @swagger
 * /posts/{id}:
 *  put:
 *      summary: Update a post
 *      description: Update a post by its ID
 *      consumes:
 *          - multipart/form-data
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *            description: The ID of the post to update
 *          - in: formData
 *            name: image
 *            type: file
 *            description: New image file to upload
 *          - in: formData
 *            name: caption
 *            type: string
 *            description: Updated caption for the post
 *      responses:
 *          200:
 *              description: Post updated successfully
 *          400:
 *              description: Bad request
 *          401:
 *              description: Unauthorized
 *          404:
 *              description: Post not found
 */
router.put('/:id', isAuthenticated, isAdmin, upload.single('image'), updatePost);


export default router;
