import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthUser, User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string, username: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]') as AuthUser[];
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser.user);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(foundUser.user));
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string, name: string, username: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]') as AuthUser[];
    
    if (users.some(u => u.email === email || u.user.username === username)) {
      return false;
    }

    const newUser: AuthUser = {
      email,
      password,
      user: {
        id: crypto.randomUUID(),
        name,
        username,
        avatarUrl: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400&h=400&fit=crop`,
        followers: [],
        following: [],
        posts: [],
      }
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setUser(newUser.user);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser.user));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}