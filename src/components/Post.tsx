import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author.avatarUrl}
          alt={post.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
          <p className="text-sm text-gray-500">@{post.author.username}</p>
        </div>
      </div>
      
      <p className="text-gray-800 mb-4">{post.content}</p>
      
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post content"
          className="rounded-lg w-full object-cover mb-4"
        />
      )}
      
      <div className="flex items-center justify-between pt-4 border-t">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 ${
            isLiked ? 'text-red-500' : 'text-gray-500'
          } hover:text-red-500 transition-colors`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>
        
        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments.length}</span>
        </button>
        
        <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}