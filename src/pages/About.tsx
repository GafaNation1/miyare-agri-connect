
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Eye, Heart, Award, MapPin } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Achieng",
      position: "Director",
      department: "Department of Agriculture",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Leading agricultural development initiatives in Migori County with over 15 years of experience."
    },
    {
      name: "Prof. James Ochieng",
      position: "Head of Training Programs",
      department: "Agricultural Education",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Expert in sustainable farming practices and agricultural technology innovation."
    },
    {
      name: "Mary Wanjiku",
      position: "Outreach Coordinator",
      department: "Community Programs",
      image: "https://images.unsplash.com/photo-1494790108755-2616c27e8c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Coordinating community outreach programs and farmer training initiatives."
    }
  ];

  const values = [
    { icon: Target, title: "Excellence", description: "Delivering high-quality agricultural training and services" },
    { icon: Users, title: "Community Focus", description: "Serving farmers and communities with dedication" },
    { icon: Heart, title: "Sustainability", description: "Promoting environmentally sustainable farming practices" },
    { icon: Award, title: "Innovation", description: "Embracing modern agricultural technologies and methods" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Miyare ATC</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Leading agricultural excellence in Migori County through innovative training, 
                research, and community development programs since 2012.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our History</h2>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Miyare Agricultural Training Center was established in 2012 as part of the Migori County 
                    Government's commitment to enhancing agricultural productivity and food security in the region. 
                    Located in the heart of Migori County, our center has grown from a small training facility 
                    to a comprehensive agricultural development hub.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Over the years, we have trained over 5,000 farmers, graduated 1,200 students from our 
                    certificate programs, and conducted more than 300 community outreach programs. Our impact 
                    extends beyond Migori County, with participants from neighboring counties benefiting from 
                    our expertise.
                  </p>
                  <div className="flex items-center text-agricultural-green">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Established: 2012 | Location: Migori County, Kenya</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-agricultural-green">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To provide world-class agricultural training, research, and extension services 
                    that enhance food security, economic growth, and sustainable development in 
                    Migori County and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-agricultural-green">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To be the leading agricultural training center in East Africa, recognized for 
                    excellence in agricultural education, innovation, and community transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-agricultural-green">Mandate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Operating under the Department of Agriculture, Migori County Government, 
                    to deliver comprehensive agricultural training and support services to 
                    farmers, students, and communities.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                    <div className="bg-agricultural-green p-3 rounded-full">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-agricultural-green"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <Badge className="bg-agricultural-green text-white mb-2">{member.position}</Badge>
                    <p className="text-sm text-gray-600 mb-3">{member.department}</p>
                    <p className="text-gray-700 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
