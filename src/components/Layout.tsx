import React from 'react';
import { Home, Bell, User, LogOut, Compass } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-500">
                SocialConnect
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                title="Home"
              >
                <Home className="w-6 h-6" />
              </Link>
              <Link
                to="/explore"
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                title="Explore"
              >
                <Compass className="w-6 h-6" />
              </Link>
              <button
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                title="Notifications"
              >
                <Bell className="w-6 h-6" />
              </button>
              <Link
                to="/profile"
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                title="Profile"
              >
                <User className="w-6 h-6" />
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}