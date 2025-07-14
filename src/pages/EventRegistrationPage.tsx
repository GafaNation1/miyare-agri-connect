
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Calendar, User, Mail, Phone, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    dietaryRequirements: '',
    expectations: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful",
      description: "You have been registered for the event. Check your email for confirmation details!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-government-blue/5 via-earth-tone to-agricultural-green/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Link to="/news-events" className="inline-flex items-center text-government-blue hover:text-agricultural-green transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center bg-gradient-to-r from-government-blue to-agricultural-green text-white rounded-t-lg">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold">Event Registration</CardTitle>
              <CardDescription className="text-blue-100">
                Register for our upcoming agricultural events and workshops
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization/Farm</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Enter organization or farm name"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position/Role</Label>
                  <Select onValueChange={(value) => handleSelectChange('position', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farmer">Farmer</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="extension-officer">Extension Officer</SelectItem>
                      <SelectItem value="agribusiness">Agribusiness Professional</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                  <Textarea
                    id="dietaryRequirements"
                    name="dietaryRequirements"
                    placeholder="Any dietary restrictions or special requirements (optional)"
                    value={formData.dietaryRequirements}
                    onChange={handleInputChange}
                    className="min-h-[60px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectations">What do you hope to learn?</Label>
                  <Textarea
                    id="expectations"
                    name="expectations"
                    placeholder="Share your expectations and learning goals for this event"
                    value={formData.expectations}
                    onChange={handleInputChange}
                    className="min-h-[80px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-agricultural-green hover:bg-green-700 text-white"
                >
                  Complete Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationPage;
