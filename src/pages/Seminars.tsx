
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const Seminars = () => {
  const upcomingSeminars = [
    {
      title: "Modern Dairy Farming Techniques",
      date: "January 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Main Conference Hall",
      capacity: "50 participants",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Learn advanced dairy farming methods, milk quality control, and modern equipment usage.",
      topics: ["Cattle Nutrition", "Milking Techniques", "Disease Prevention", "Record Keeping"]
    },
    {
      title: "Sustainable Crop Production Workshop",
      date: "January 22, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Field Demonstration Area",
      capacity: "75 participants",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Hands-on training in sustainable farming practices and organic crop production methods.",
      topics: ["Soil Management", "Organic Fertilizers", "Pest Control", "Harvest Techniques"]
    },
    {
      title: "Agricultural Business Management",
      date: "February 5, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Training Room A",
      capacity: "40 participants",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Essential business skills for farmers including financial planning and market analysis.",
      topics: ["Financial Planning", "Market Analysis", "Value Addition", "Cooperative Formation"]
    }
  ];

  const pastSeminars = [
    {
      title: "Climate-Smart Agriculture",
      date: "December 10, 2023",
      participants: "65 farmers",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Youth in Agriculture Initiative",
      date: "November 28, 2023",
      participants: "85 young farmers",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Poultry Farming Excellence",
      date: "November 15, 2023",
      participants: "45 farmers",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const seminarStats = [
    { icon: Users, number: "2,500+", label: "Farmers Trained", color: "bg-blue-500" },
    { icon: BookOpen, number: "48", label: "Seminars Held", color: "bg-green-500" },
    { icon: Award, number: "95%", label: "Satisfaction Rate", color: "bg-yellow-500" },
    { icon: TrendingUp, number: "78%", label: "Implementation Rate", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-agricultural-green to-green-600 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-blend-overlay"></div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Agricultural Seminars & Workshops
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Join our comprehensive educational seminars designed to enhance your agricultural knowledge and skills through expert-led sessions and hands-on learning experiences.
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Register for Seminars
              </Button>
            </div>
          </div>
        </section>

        {/* Seminar Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600">Transforming agricultural knowledge through quality education</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {seminarStats.map((stat, index) => (
                <div key={index} className="text-center">
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

        {/* Upcoming Seminars */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Seminars</h2>
              <p className="text-lg text-gray-600">Don't miss these upcoming educational opportunities</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingSeminars.map((seminar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={seminar.image} 
                      alt={seminar.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-agricultural-green text-white">
                      Upcoming
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{seminar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{seminar.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-agricultural-green" />
                        {seminar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-agricultural-green" />
                        {seminar.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-agricultural-green" />
                        {seminar.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-agricultural-green" />
                        {seminar.capacity}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {seminar.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-agricultural-green hover:bg-green-700">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Seminars */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Seminars</h2>
              <p className="text-lg text-gray-600">Highlights from our recent educational events</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastSeminars.map((seminar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={seminar.image} 
                      alt={seminar.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-gray-600 text-white">
                      Completed
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{seminar.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-agricultural-green" />
                        {seminar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-agricultural-green" />
                        {seminar.participants}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Agricultural Knowledge?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join our upcoming seminars and workshops to learn from agricultural experts and connect with fellow farmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  View All Seminars
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agricultural-green">
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

export default Seminars;
