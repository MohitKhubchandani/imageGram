import Post from '../schema/post.js'; // Mongoose model for the post schema

export const createPost = async (caption, image, user) => {
  const post = new Post({
    caption,
    image,
    user
  });
  console.log(post);
  
  // Save post data to the database
  return await post.save();
};

export const findAllPosts = async (offset, limit) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(offset * limit)
      .limit(limit).populate('user', 'username password _id');
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
};


export const countAllPosts = async () => {
  try {
    const count = await Post.countDocuments();
    return count
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePostById = async (id, updateObject) => {
  try {
    const post = await Post.findByIdAndUpdate(id, updateObject, {new: true});
    return post;
  } catch (error) {
    console.log(error);
  }
};