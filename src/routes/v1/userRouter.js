import express from 'express';
import { getProfile, signin, signup } from '../../controllers/userControllers.js';

const router = express.Router();

router.get('/profile', getProfile)

router.post('/signup', signup)

router.post('/signin', signin)

export default router;  