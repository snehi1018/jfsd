import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProfilePage } from './pages/ProfilePage';
import { ExplorePage } from './pages/ExplorePage';
import { Layout } from './components/Layout';
import { CreatePost } from './components/CreatePost';
import { Post } from './components/Post';
import type { Post as PostType } from './types';

const MOCK_POSTS: PostType[] = [
  {
    id: '1',
    content: 'Just finished a great hiking session! 🏃‍♂️ Nature is truly amazing!',
    author: {
      id: '1',
      name: 'John Doe',
      username: 'johndoe',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      followers: [],
      following: [],
      posts: [],
    },
    likes: 42,
    comments: [],
    createdAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop',
  },
  {
    id: '2',
    content: 'Working on some exciting new projects! 💻 #coding #webdev',
    author: {
      id: '2',
      name: 'Jane Smith',
      username: 'janesmith',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      followers: [],
      following: [],
      posts: [],
    },
    likes: 28,
    comments: [],
    createdAt: new Date().toISOString(),
  },
];

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function HomePage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-8 px-4">
        <CreatePost />
        <div className="space-y-6">
          {MOCK_POSTS.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <ExplorePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;