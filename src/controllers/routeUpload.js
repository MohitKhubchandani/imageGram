// // routes/post.js
// import express from 'express';
// import cloudinary from '../config/cloudinaryConfig.js';
// import upload from '../middleware/multer.js';
// import Post from '../schema/post.js';

// const router = express.Router();

// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     // Check if file exists in the request
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: 'No file uploaded'
//       });
//     }

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path);

//     // Save post to database with caption and image URL
//     const post = new Post({
//       caption: req.body.caption,
//       image: result.secure_url
//     });

//     await post.save();

//     res.status(200).json({
//       success: true,
//       message: 'Post uploaded and saved!',
//       data: post
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: 'Error uploading post'
//     });
//   }
// });

// export default router;
