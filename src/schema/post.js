// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
    minLength: 5
  },
  image: { 
    type: String,  // Store the image URL (from Cloudinary)
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
},{timestamps: true});

const Post = mongoose.model('Post', postSchema);

export default Post;
