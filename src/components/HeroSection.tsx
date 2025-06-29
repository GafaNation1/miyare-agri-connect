
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Leaf, Home } from 'lucide-react';

const HeroSection = () => {
  const quickLinks = [
    { icon: BookOpen, title: 'Training Programs', desc: 'Agricultural courses & certifications', href: '#programs' },
    { icon: Home, title: 'Accommodation', desc: 'Comfortable lodging facilities', href: '#accommodation' },
    { icon: Leaf, title: 'Crop Production', desc: 'Sustainable farming practices', href: '#crops' },
    { icon: Users, title: 'Seminars', desc: 'Educational workshops & events', href: '#seminars' },
  ];

  return (
    <section id="home" className="relative">
      {/* Hero Banner */}
      <div className="relative h-[600px] bg-gradient-to-r from-agricultural-green to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-blend-overlay"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Agriculture in
              <span className="block text-yellow-300">Migori County</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Leading agricultural training and development through innovative education, 
              sustainable practices, and community outreach programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agricultural-green">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{link.desc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
