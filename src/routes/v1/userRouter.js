import express from 'express';
import { getProfile, signin, signup } from '../../controllers/userControllers.js';

const router = express.Router();

/**
 * 
 * @swagger
 * /users/profile:
 *  post:
 *      summary: Get User profile
 *      description: Get User profile
 *  
 * 
*/

router.get('/profile', getProfile)

/**
 * 
 * @swagger
 * /users/signup:
 *  post:
 *      summary: Signup a new user
 *      description: Signup a new user
 *  
 * 
*/

router.post('/signup', signup)

/**
 * 
 * @swagger
 * /users/signin:
 *  post:
 *      summary: Signin a user
 *      description: Signin a user
 *  
 * 
*/

router.post('/signin', signin)

export default router;  