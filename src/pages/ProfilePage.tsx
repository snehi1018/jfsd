import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Layout } from '../components/Layout';
import { Settings, MapPin, Link as LinkIcon } from 'lucide-react';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="px-6 py-4">
            <div className="flex items-start">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white -mt-16"
              />
              <div className="ml-6 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-gray-600">@{user.username}</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
                <p className="mt-4 text-gray-700">
                  Frontend Developer | Coffee Enthusiast | Travel Lover
                </p>
                <div className="mt-4 flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    <a href="#" className="text-blue-500 hover:underline">website.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 mt-8 border-t pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.posts.length}</div>
                <div className="text-gray-600">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.followers.length}</div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.following.length}</div>
                <div className="text-gray-600">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}