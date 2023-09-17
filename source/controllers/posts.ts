import { Request, Response, NextFunction } from 'express';
import * as postsRepository from '../repository/posts'; // Import your posts repository

// Create a new post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, body } = req.body;
    const newPostId = await postsRepository.createPost(title, body);

    return res.status(201).json({
      message: 'Post created successfully',
      postId: newPostId,
    });
  } catch (error) {
    return next(error);
  }
};

// Get all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postsRepository.getAllPosts();
    return res.status(200).json({
      message: posts,
    });
  } catch (error) {
    return next(error);
  }
};

// Get a post by ID
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const post = await postsRepository.getPostById(id);

    if (post) {
      return res.status(200).json({
        message: post,
      });
    } else {
      return res.status(404).json({
        message: 'Post not found',
      });
    }
  } catch (error) {
    return next(error);
  }
};

// Update a post by ID
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, body } = req.body;

    await postsRepository.updatePost(id, title, body);

    return res.status(200).json({
      message: 'Post updated successfully',
    });
  } catch (error) {
    return next(error);
  }
};

// Delete a post by ID
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);

    await postsRepository.deletePost(id);

    return res.status(200).json({
      message: 'Post deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

export default { addPost, getPosts, getPost, updatePost, deletePost };
