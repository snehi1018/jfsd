export interface Post {
  id: string;
  content: string;
  author: User;
  likes: number;
  comments: Comment[];
  createdAt: string;
  imageUrl?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio?: string;
  followers: string[];
  following: string[];
  posts: string[];
}

export interface AuthUser {
  email: string;
  password: string;
  user: User;
}