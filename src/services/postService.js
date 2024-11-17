// services/postServices.js
import { countAllPosts, createPost as createPostRepository, deletePostById, findAllPosts, UpdatePostById } from '../repositories/postRepository.js'; // Repository function for database interaction

export const createPost = async ({ caption, image }) => {
  try {
    const trimmedCaption = caption?.trim();
    if (!trimmedCaption || !image) {
      throw new Error('Caption or image is missing');
    }

    // Call repository to save post data in the database
    const post = await createPostRepository(trimmedCaption, image);

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

export const deletePostService = async (id) => {
  const response = await deletePostById(id);
  return response;
}

export const updatePostService = async (id, updateObject) => {
  const response = await UpdatePostById(id, updateObject);
  return response;
}