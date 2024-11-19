import express from 'express';
import { getProfile, signup } from '../../controllers/userControllers.js';

const router = express.Router();

router.get('/profile', getProfile)

router.post('/signup', signup)

export default router;  