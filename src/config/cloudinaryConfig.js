import dotenv from 'dotenv';
dotenv.config()

import { v2 as cloudinary } from 'cloudinary';
import { api_key, api_secret, cloud_name} from '../config/serverConfig.js';

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
});


export default cloudinary;