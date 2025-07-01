
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, User, Mail, Phone, GraduationCap, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SeminarRegistrationFormProps {
  seminarTitle: string;
  seminarDate: string;
  children: React.ReactNode;
}

const SeminarRegistrationForm = ({ seminarTitle, seminarDate, children }: SeminarRegistrationFormProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    experience: '',
    expectations: '',
    dietaryRequirements: '',
    transportNeeded: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('formType', 'Seminar Registration');
      formDataToSend.append('seminarTitle', seminarTitle);
      formDataToSend.append('seminarDate', seminarDate);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('organization', formData.organization);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('expectations', formData.expectations);
      formDataToSend.append('dietaryRequirements', formData.dietaryRequirements);
      formDataToSend.append('transportNeeded', formData.transportNeeded);
      formDataToSend.append('fullName', `${formData.firstName} ${formData.lastName}`);

      const response = await fetch('https://formspree.io/f/xanjvaza', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: "Thank you for registering. We'll send you confirmation details soon.",
        });

        // Clear form and close dialog
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          position: '',
          experience: '',
          expectations: '',
          dietaryRequirements: '',
          transportNeeded: ''
        });
        setIsOpen(false);
      } else {
        throw new Error('Registration submission failed');
      }
    } catch (error) {
      console.error('Registration submission error:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-agricultural-green" />
            Register for {seminarTitle}
          </DialogTitle>
          <p className="text-sm text-gray-600">
            {seminarDate} - Complete your registration below
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="organization">Organization/Farm Name</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Your organization or farm name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="position">Position/Role</Label>
            <Input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="Your position or role"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="experience">Agricultural Experience</Label>
            <Select name="experience" onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                <SelectItem value="experienced">Experienced (6-10 years)</SelectItem>
                <SelectItem value="expert">Expert (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="expectations">What do you hope to learn?</Label>
            <Textarea
              id="expectations"
              name="expectations"
              value={formData.expectations}
              onChange={handleInputChange}
              placeholder="Describe what you expect to gain from this seminar..."
              rows={3}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
            <Input
              id="dietaryRequirements"
              name="dietaryRequirements"
              value={formData.dietaryRequirements}
              onChange={handleInputChange}
              placeholder="Any dietary restrictions or special requirements"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="transportNeeded">Transport Assistance Needed?</Label>
            <Select name="transportNeeded" onValueChange={(value) => setFormData(prev => ({ ...prev, transportNeeded: value }))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Do you need transport assistance?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No, I have my own transport</SelectItem>
                <SelectItem value="yes">Yes, I need transport assistance</SelectItem>
                <SelectItem value="group">I'm coming with a group</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-agricultural-green hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <GraduationCap className="h-4 w-4 mr-2" />
                Complete Registration
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SeminarRegistrationForm;
