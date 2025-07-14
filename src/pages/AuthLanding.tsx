
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

const AuthLanding = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-government-blue/5 via-earth-tone to-agricultural-green/5">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Miyare Agricultural Training Center
              </h1>
              <p className="text-sm text-gray-600">Department of Agriculture - Migori County Government</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Agricultural Training Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Access comprehensive agricultural training programs, resources, and services. 
            Please sign in or create an account to continue.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">5,000+</h3>
              <p className="text-gray-600">Farmers Trained</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Programs Offered</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">85%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Auth Tabs */}
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <div className="flex rounded-lg bg-gray-100 p-1 mb-4">
                <Button
                  variant={activeTab === 'login' ? 'default' : 'ghost'}
                  className={`flex-1 ${activeTab === 'login' ? 'bg-government-blue text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('login')}
                >
                  Sign In
                </Button>
                <Button
                  variant={activeTab === 'signup' ? 'default' : 'ghost'}
                  className={`flex-1 ${activeTab === 'signup' ? 'bg-government-blue text-white' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('signup')}
                >
                  Create Account
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {activeTab === 'login' ? (
                <div className="px-6 pb-6">
                  <Login isEmbedded={true} />
                </div>
              ) : (
                <div className="px-6 pb-6">
                  <Signup isEmbedded={true} />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What You'll Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Training Programs</h4>
              <p className="text-gray-600">Access comprehensive agricultural training courses and certifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-government-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600">Connect with fellow farmers and agricultural experts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Resources</h4>
              <p className="text-gray-600">Download guides, tools, and educational materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;
