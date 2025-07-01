
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, CalendarDays, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingFormProps {
  roomType: string;
  roomPrice: string;
  children: React.ReactNode;
}

const BookingForm = ({ roomType, roomPrice, children }: BookingFormProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    specialRequests: ''
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
      formDataToSend.append('formType', 'Room Booking');
      formDataToSend.append('roomType', roomType);
      formDataToSend.append('roomPrice', roomPrice);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('checkIn', formData.checkIn);
      formDataToSend.append('checkOut', formData.checkOut);
      formDataToSend.append('guests', formData.guests);
      formDataToSend.append('specialRequests', formData.specialRequests);
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
          title: "Booking Request Submitted!",
          description: "We'll contact you within 24 hours to confirm your reservation.",
        });

        // Clear form and close dialog
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '',
          specialRequests: ''
        });
        setIsOpen(false);
      } else {
        throw new Error('Booking submission failed');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your booking. Please try again.",
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-agricultural-green" />
            Book {roomType}
          </DialogTitle>
          <p className="text-sm text-gray-600">
            {roomPrice} - Complete the form below to make your reservation
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkIn">Check-in Date *</Label>
              <Input
                id="checkIn"
                name="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="checkOut">Check-out Date *</Label>
              <Input
                id="checkOut"
                name="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="guests">Number of Guests *</Label>
            <Select name="guests" onValueChange={(value) => setFormData(prev => ({ ...prev, guests: value }))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select number of guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5+">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requirements or requests..."
              rows={3}
              className="mt-1"
            />
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
                <Calendar className="h-4 w-4 mr-2" />
                Submit Booking Request
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
