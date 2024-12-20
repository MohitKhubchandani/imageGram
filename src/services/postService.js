// services/postServices.js
import { countAllPosts, createPost as createPostRepository, deletePostById, findAllPosts, findPostById, UpdatePostById } from '../repositories/postRepository.js'; // Repository function for database interaction
import user from '../schema/user.js';

export const createPost = async ({ caption, image, user }) => {
  try {
    const trimmedCaption = caption?.trim();
    if (!trimmedCaption || !image) {
      throw new Error('Caption or image is missing');
    }

    // Call repository to save post data in the database
    const post = await createPostRepository(trimmedCaption, image, user);

    return post;
  } catch (err) {
    throw new Error(`Service Error: ${err.message}`);
  }
};

export const getAllPostsService = async (offset, limit) => {
  
  const posts = await findAllPosts(offset, limit);

  const totalDocuments = await countAllPosts();

  const totalPages = Math.ceil(totalDocuments / limit);
  
  return {
    posts,
    totalPages,
    totalDocuments
  }
};

export const deletePostService = async (id, user) => {
  const post = await findPostById(id)
  if (post.user !== user) {
    throw{
      status: 401,
      message: "Unauthorized"
    }
  };
  const response = await deletePostById(id);
  return response;
}

export const updatePostService = async (id, updateObject) => {
  const response = await UpdatePostById(id, updateObject);
  return response;
}