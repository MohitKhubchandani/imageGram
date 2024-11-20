import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/defaultDatabase';

export const cloud_name = process.env.CLOUD_NAME

export const api_key = process.env.API_KEY

export const api_secret = process.env.API_SECRET

export const JWT_SECRET = process.env.JWT_SECRET


