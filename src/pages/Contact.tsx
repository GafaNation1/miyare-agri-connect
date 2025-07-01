
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://forms.google.com/d/e/1FAIpQLSc_contact_form_link', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254XXXXXXXXX', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Get in touch with Miyare Agricultural Training Center for inquiries, 
                registrations, or any assistance you need.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you with all your agricultural training needs. 
                    Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-agricultural-green p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                          <p className="text-gray-600">
                            Miyare Agricultural Training Center<br />
                            P.O. Box 123-40400<br />
                            Migori, Kenya
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-agricultural-green p-3 rounded-full">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                          <p className="text-gray-600">
                            Main Office: +254 XXX XXX XXX<br />
                            Director: +254 XXX XXX XXX<br />
                            Emergency: +254 XXX XXX XXX
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-agricultural-green p-3 rounded-full">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Email Addresses</h3>
                          <p className="text-gray-600">
                            General: info@miyareagri.migori.go.ke<br />
                            Director: director@miyareagri.migori.go.ke<br />
                            Training: training@miyareagri.migori.go.ke
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-agricultural-green p-3 rounded-full">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                          <p className="text-gray-600">
                            Monday - Friday: 8:00 AM - 5:00 PM<br />
                            Saturday: 9:00 AM - 2:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleWhatsApp}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp Support
                </Button>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input placeholder="Enter your first name" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input placeholder="Enter your last name" required />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="Enter your email address" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input placeholder="What is this regarding?" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea 
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-agricultural-green hover:bg-green-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Live Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Us on the Map</h2>
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="h-96 lg:h-[500px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6089469574247!2d34.4732!3d-1.0632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDMnNDcuNSJTIDM0wrAyOCcyMy41IkU!5e0!3m2!1sen!2ske!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Miyare Agricultural Training Center Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center mt-6">
                <Button 
                  size="lg"
                  className="bg-agricultural-green hover:bg-green-700"
                  onClick={() => window.open('https://maps.google.com/directions', '_blank')}
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
