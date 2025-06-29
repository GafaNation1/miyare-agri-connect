
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Home, Users, Microscope, BookOpen, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "Agricultural Extension Services",
      description: "Professional advice and support for farmers to improve crop yields and farming practices.",
      features: ["Farm visits and consultations", "Soil testing and analysis", "Pest and disease management", "Crop selection guidance"],
      contact: "Call: +254 XXX XXX XXX"
    },
    {
      icon: Home,
      title: "Accommodation Services",
      description: "Comfortable lodging facilities for trainees, visitors, and conference participants.",
      features: ["Single and double rooms", "Conference facilities", "Catering services", "Wi-Fi and utilities"],
      contact: "Book: accommodation@miyareagri.migori.go.ke"
    },
    {
      icon: Users,
      title: "Training & Workshops",
      description: "Customized training programs for groups, organizations, and government agencies.",
      features: ["Corporate training", "Farmer field schools", "Youth programs", "Women's groups training"],
      contact: "Schedule: training@miyareagri.migori.go.ke"
    },
    {
      icon: Microscope,
      title: "Research Services",
      description: "Agricultural research and development to support innovation and best practices.",
      features: ["Crop variety trials", "Farming technique research", "Market analysis", "Impact assessments"],
      contact: "Inquire: research@miyareagri.migori.go.ke"
    },
    {
      icon: BookOpen,
      title: "Consultancy Services",
      description: "Expert consultancy for agricultural projects, policy development, and implementation.",
      features: ["Project design", "Policy development", "Technical assistance", "Capacity building"],
      contact: "Consult: consultancy@miyareagri.migori.go.ke"
    }
  ];

  const handleServiceInquiry = (serviceName: string) => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_service_inquiry_form', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Comprehensive agricultural services designed to support farmers, researchers, 
                and organizations in achieving their agricultural goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-agricultural-green p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Phone className="h-4 w-4 mr-2" />
                        {service.contact}
                      </div>
                      <Button 
                        className="w-full bg-agricultural-green hover:bg-green-700"
                        onClick={() => handleServiceInquiry(service.title)}
                      >
                        Request Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Hours & Contact */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-600">
                          Emergency agricultural services available 24/7 during planting and harvest seasons.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-900">General Inquiries</p>
                        <p className="text-sm text-gray-600">info@miyareagri.migori.go.ke</p>
                        <p className="text-sm text-gray-600">+254 XXX XXX XXX</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Emergency Line</p>
                        <p className="text-sm text-gray-600">+254 XXX XXX XXX (24/7)</p>
                      </div>
                      <Button className="w-full" variant="outline">
                        WhatsApp Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
