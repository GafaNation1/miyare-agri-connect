
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage on app start
    const storedUser = localStorage.getItem('miyare_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from your backend
      const userData: User = {
        id: '1',
        email,
        firstName: email.split('@')[0],
        lastName: 'User'
      };
      
      setUser(userData);
      localStorage.setItem('miyare_user', JSON.stringify(userData));
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: any): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName
      };
      
      setUser(newUser);
      localStorage.setItem('miyare_user', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('miyare_user');
  };

  const forgotPassword = async (email: string): Promise<void> => {
    // Simulate sending password reset email
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Send email via Formspree
    const response = await fetch('https://formspree.io/f/xanjvaza', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        subject: 'Password Reset Request',
        message: `Password reset requested for: ${email}. Please provide a secure reset link to this user.`,
        type: 'password_reset'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send password reset email');
    }
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    forgotPassword,
    isAuthenticated: !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
