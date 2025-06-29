
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeMessage from '@/components/WelcomeMessage';
import NewsAndEvents from '@/components/NewsAndEvents';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, TrendingUp, MapPin, Calendar, Clock, ArrowRight, Play } from 'lucide-react';

const Index = () => {
  const quickStats = [
    { icon: Users, number: "5,000+", label: "Farmers Trained", color: "bg-blue-500" },
    { icon: Award, number: "50+", label: "Programs Offered", color: "bg-green-500" },
    { icon: TrendingUp, number: "85%", label: "Success Rate", color: "bg-yellow-500" },
    { icon: MapPin, number: "45+", label: "Communities Served", color: "bg-purple-500" }
  ];

  const upcomingEvents = [
    {
      title: "Modern Dairy Farming Workshop",
      date: "Jan 15, 2024",
      time: "9:00 AM",
      location: "Main Training Hall",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Youth in Agriculture Conference",
      date: "Jan 22, 2024",
      time: "8:00 AM",
      location: "Conference Center",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const featuredPrograms = [
    {
      title: "Certificate in Crop Production",
      duration: "6 months",
      students: "120+ enrolled",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Comprehensive training in modern crop production techniques"
    },
    {
      title: "Livestock Management Diploma",
      duration: "12 months",
      students: "80+ enrolled",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Advanced livestock farming and management practices"
    },
    {
      title: "Agricultural Technology Course",
      duration: "3 months",
      students: "150+ enrolled",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Modern agricultural technology and innovation"
    }
  ];

  const handleVideoPlay = () => {
    window.open('https://www.youtube.com/watch?v=sample_video', '_blank');
  };

  const handleRegistration = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_general_registration', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        
        {/* Quick Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WelcomeMessage />

        {/* Featured Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Training Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular agricultural training programs designed to transform your farming skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-agricultural-green text-white">
                      {program.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{program.students}</span>
                      <Badge variant="outline">{program.duration}</Badge>
                    </div>
                    <Button 
                      className="w-full bg-agricultural-green hover:bg-green-700 group"
                      onClick={handleRegistration}
                    >
                      Enroll Now
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="py-16 bg-gradient-to-r from-agricultural-green to-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Agricultural Training"
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-agricultural-green hover:bg-gray-100 rounded-full p-6"
                    onClick={handleVideoPlay}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <div className="mt-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  See Our Training Programs in Action
                </h3>
                <p className="text-green-100 text-lg">
                  Watch how we're transforming agricultural education and empowering farmers across Migori County
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Events Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600">
                  Don't miss our upcoming training sessions and workshops
                </p>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 lg:mt-0"
                onClick={() => window.location.href = '/news-events'}
              >
                View All Events
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-32 h-32 object-cover rounded-l-lg"
                      />
                      <div className="p-6 flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-agricultural-green" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-agricultural-green" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-agricultural-green" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <NewsAndEvents />
        <TestimonialsSection />

        {/* Call to Action Section */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Agricultural Journey?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of successful farmers who have enhanced their skills through our comprehensive training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRegistration}
                >
                  Register for Training
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
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

export default Index;
