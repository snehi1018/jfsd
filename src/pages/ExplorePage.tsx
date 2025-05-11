import React from 'react';
import { Layout } from '../components/Layout';
import { Search, Compass, TrendingUp, Users } from 'lucide-react';

const TRENDING_TOPICS = [
  { id: 1, name: '#WebDev', posts: 1234 },
  { id: 2, name: '#JavaScript', posts: 987 },
  { id: 3, name: '#ReactJS', posts: 856 },
  { id: 4, name: '#TailwindCSS', posts: 654 },
];

const SUGGESTED_USERS = [
  {
    id: '3',
    name: 'Sarah Wilson',
    username: 'sarahw',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'UI/UX Designer',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    username: 'mikej',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Full Stack Developer',
  },
];

export function ExplorePage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts, people, or topics..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-semibold">Discover</h2>
                </div>
                <div className="space-y-4">
                  {TRENDING_TOPICS.map((topic) => (
                    <div
                      key={topic.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div>
                        <h3 className="font-medium text-blue-500">{topic.name}</h3>
                        <p className="text-sm text-gray-500">{topic.posts} posts</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-semibold">Who to Follow</h2>
                </div>
                <div className="space-y-4">
                  {SUGGESTED_USERS.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-gray-500">@{user.username}</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}