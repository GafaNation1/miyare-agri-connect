
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, Shield, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();
  const { forgotPassword, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await forgotPassword(email);
      setEmailSent(true);
      toast({
        title: "Reset Email Sent",
        description: "Please check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-government-blue/5 via-earth-tone to-agricultural-green/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Miyare Agricultural Training Center
              </h1>
              <p className="text-sm text-gray-600">Department of Agriculture - Migori County Government</p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1 text-center bg-gradient-to-r from-government-blue to-agricultural-green text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                {emailSent ? "Check Your Email" : "Reset Password"}
              </CardTitle>
              <CardDescription className="text-blue-100">
                {emailSent 
                  ? "We've sent you password reset instructions" 
                  : "Enter your email to receive reset instructions"
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6">
              {!emailSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-government-blue hover:bg-agricultural-green transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Instructions"}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <CheckCircle className="h-16 w-16 text-agricultural-green" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Email Sent Successfully!</h3>
                    <p className="text-sm text-gray-600">
                      We've sent password reset instructions to <strong>{email}</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      Please check your inbox and spam folder. Our team will send you a secure reset link.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={() => {
                        setEmailSent(false);
                        setEmail('');
                      }}
                      variant="outline"
                      className="w-full"
                    >
                      Send Another Email
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-6 text-center">
                <Link 
                  to="/login" 
                  className="inline-flex items-center text-sm text-government-blue hover:text-agricultural-green transition-colors font-medium"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Login
                </Link>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link 
                    to="/signup" 
                    className="text-government-blue hover:text-agricultural-green transition-colors font-medium"
                  >
                    Create Account
                  </Link>
                </p>
              </div>

              <Alert className="mt-4 border-agricultural-green/20 bg-agricultural-green/5">
                <Shield className="h-4 w-4 text-agricultural-green" />
                <AlertDescription className="text-sm text-gray-600">
                  For security purposes, password reset requests are processed manually by our admin team.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
