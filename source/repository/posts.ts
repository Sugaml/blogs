import db from "../config/database/db";
import { Post } from "../models/posts";

// Create a new post
export async function createPost(title: string, body: string): Promise<number> {
  const newPost = await db.one('INSERT INTO posts(title, body) VALUES($1, $2) RETURNING id', [title, body]);
  return newPost.id;
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  return db.any('SELECT * FROM posts');
}

// Get a post by ID
export async function getPostById(id: number): Promise<Post | null> {
  return db.oneOrNone('SELECT * FROM posts WHERE id = $1', id);
}

// Update a post by ID
export async function updatePost(id: number, title: string, body: string): Promise<void> {
  await db.none('UPDATE posts SET title = $1, body = $2 WHERE id = $3', [title, body, id]);
}

// Delete a post by ID
export async function deletePost(id: number): Promise<void> {
  await db.none('DELETE FROM posts WHERE id = $1', id);
}
