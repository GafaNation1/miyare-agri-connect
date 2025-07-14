
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, GraduationCap, User, Mail, Phone, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EnrollmentPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    motivation: ''
  });
  const { toast } = useToast();

  const programs = [
    'Certificate in Crop Production',
    'Diploma in Agricultural Technology',
    'Modern Dairy Farming Course',
    'Poultry Production & Management',
    'Sustainable Horticulture',
    'Agricultural Entrepreneurship'
  ];

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
      title: "Enrollment Submitted",
      description: "Your enrollment application has been submitted successfully. We'll contact you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-government-blue/5 via-earth-tone to-agricultural-green/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Link to="/programs" className="inline-flex items-center text-government-blue hover:text-agricultural-green transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Programs
            </Link>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center bg-gradient-to-r from-government-blue to-agricultural-green text-white rounded-t-lg">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12" />
              </div>
              <CardTitle className="text-2xl font-bold">Program Enrollment</CardTitle>
              <CardDescription className="text-blue-100">
                Join our agricultural training programs and advance your farming skills
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
                  <Label htmlFor="program">Select Program</Label>
                  <Select onValueChange={(value) => handleSelectChange('program', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a training program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Agricultural Experience</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="experience"
                      name="experience"
                      placeholder="Briefly describe your agricultural background or experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="pl-10 min-h-[80px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join this program?</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Tell us what motivates you to pursue agricultural training"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="min-h-[80px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-agricultural-green hover:bg-green-700 text-white"
                >
                  Submit Enrollment Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;
