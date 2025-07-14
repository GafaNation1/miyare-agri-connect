
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthLanding from '@/pages/AuthLanding';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-government-blue/5 via-earth-tone to-agricultural-green/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-xl">MAC</span>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthLanding />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
