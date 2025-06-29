
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Calendar, TrendingUp, Heart, Handshake, Target, Award, BookOpen, Truck } from 'lucide-react';

const Outreach = () => {
  const outreachPrograms = [
    {
      title: "Farmer Field Schools",
      description: "Community-based learning programs where farmers learn together in groups",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reach: "15 communities",
      participants: "500+ farmers",
      duration: "Ongoing",
      activities: ["Demonstration plots", "Group discussions", "Hands-on training", "Peer learning", "Problem-solving sessions"]
    },
    {
      title: "Mobile Extension Services",
      description: "Direct farm visits providing personalized agricultural advice and support",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reach: "50+ villages",
      participants: "2000+ farmers",
      duration: "Year-round",
      activities: ["Farm assessments", "Technical advice", "Problem diagnosis", "Resource provision", "Follow-up visits"]
    },
    {
      title: "Youth Agricultural Empowerment",
      description: "Programs specifically designed to engage young people in modern agriculture",
      image: "https://images.unsplash.com/photo-1544531586-fbb692faa55b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reach: "25 schools",
      participants: "800+ youth",
      duration: "6 months",
      activities: ["Agricultural clubs", "Mentorship programs", "Start-up support", "Skills training", "Enterprise development"]
    },
    {
      title: "Women in Agriculture Initiative",
      description: "Empowering women farmers through training, resources, and market linkages",
      image: "https://images.unsplash.com/photo-1594736797933-d0413ba8f603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reach: "30 women groups",
      participants: "600+ women",
      duration: "Ongoing",
      activities: ["Leadership training", "Financial literacy", "Value addition", "Market access", "Group formation"]
    }
  ];

  const impactAreas = [
    {
      icon: Users,
      title: "Community Mobilization",
      description: "Organizing farmers into groups for collective learning and resource sharing",
      achievements: ["45 farmer groups formed", "12,000+ farmers reached", "85% group retention rate"]
    },
    {
      icon: BookOpen,
      title: "Knowledge Transfer",
      description: "Sharing modern agricultural techniques and best practices",
      achievements: ["200+ training sessions", "50+ demonstration sites", "95% knowledge adoption rate"]
    },
    {
      icon: TrendingUp,
      title: "Productivity Improvement",
      description: "Helping farmers increase yields and improve crop quality",
      achievements: ["35% average yield increase", "40% income improvement", "30% reduction in losses"]
    },
    {
      icon: Handshake,
      title: "Market Linkages",
      description: "Connecting farmers to markets and value chain opportunities",
      achievements: ["25 market partnerships", "KES 15M additional income", "200+ farmers accessing markets"]
    }
  ];

  const regions = [
    {
      name: "Suna East Sub-County",
      villages: 12,
      farmers: 800,
      programs: ["Maize production", "Dairy farming", "Vegetable farming"],
      coordinator: "James Ochieng"
    },
    {
      name: "Suna West Sub-County",
      villages: 10,
      farmers: 650,
      programs: ["Cash crop farming", "Poultry production", "Aquaculture"],
      coordinator: "Mary Adhiambo"
    },
    {
      name: "Rongo Sub-County",
      villages: 15,
      farmers: 950,
      programs: ["Livestock farming", "Crop diversification", "Agribusiness"],
      coordinator: "Peter Otieno"
    },
    {
      name: "Uriri Sub-County",
      villages: 8,
      farmers: 600,
      programs: ["Organic farming", "Fruit production", "Bee keeping"],
      coordinator: "Grace Nyong'o"
    }
  ];

  const successStories = [
    {
      title: "Suna East Maize Farmers Collective",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "300 farmers increased maize yields by 45% through improved seed varieties and farming techniques",
      location: "Suna East",
      beneficiaries: 300,
      yearStarted: 2022
    },
    {
      title: "Women's Vegetable Farming Cooperative",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "150 women established profitable vegetable farming enterprises generating KES 2M annually",
      location: "Rongo",
      beneficiaries: 150,
      yearStarted: 2021
    },
    {
      title: "Youth Poultry Enterprise Program",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      impact: "80 young people started successful poultry businesses with 90% still operating after 2 years",
      location: "Uriri",
      beneficiaries: 80,
      yearStarted: 2020
    }
  ];

  const handleVolunteer = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_volunteer_application', '_blank');
  };

  const handleRequestVisit = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_outreach_request', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-agricultural-green to-green-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Agricultural Outreach Programs</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Bringing agricultural knowledge and support directly to farming communities 
                across Migori County through innovative outreach initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRequestVisit}
                >
                  Request Outreach Visit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={handleVolunteer}
                >
                  Join as Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "12,000+", label: "Farmers Reached" },
                { icon: MapPin, number: "45+", label: "Villages Covered" },
                { icon: Calendar, number: "200+", label: "Outreach Events" },
                { icon: Award, number: "8", label: "Years of Service" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outreach Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Outreach Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive programs designed to meet farmers where they are and address their specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {outreachPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <div className="relative">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-agricultural-green text-white">
                      {program.duration}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{program.reach}</span>
                      <span>•</span>
                      <span>{program.participants}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="space-y-1">
                        {program.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2 flex-shrink-0"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-agricultural-green hover:bg-green-700"
                      onClick={handleRequestVisit}
                    >
                      Request This Program
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measurable impact across key areas of agricultural development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      {area.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-sm text-gray-500 flex items-center">
                          <Target className="h-3 w-3 text-agricultural-green mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Coverage Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Outreach programs across all sub-counties in Migori County
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regions.map((region, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <MapPin className="h-5 w-5 text-agricultural-green mr-2" />
                      {region.name}
                    </CardTitle>
                    <div className="flex gap-6 text-sm text-gray-500">
                      <span>{region.villages} villages</span>
                      <span>{region.farmers} farmers</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Active Programs:</h4>
                      <ul className="space-y-1">
                        {region.programs.map((program, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2 flex-shrink-0"></div>
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-500">
                        <strong>Coordinator:</strong> {region.coordinator}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">Real impact in our communities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-agricultural-green">
                      Since {story.yearStarted}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.impact}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{story.location}</span>
                      <span>{story.beneficiaries} beneficiaries</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Get Involved
              </h2>
              <p className="text-lg text-gray-600">Multiple ways to participate in our outreach programs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Request a Visit",
                  description: "Invite our team to your community for training and support",
                  action: "Request Visit",
                  onClick: handleRequestVisit
                },
                {
                  icon: Heart,
                  title: "Volunteer",
                  description: "Join our volunteer network and help serve farming communities",
                  action: "Apply to Volunteer",
                  onClick: handleVolunteer
                },
                {
                  icon: Handshake,
                  title: "Partner with Us",
                  description: "Organizations can partner with us to expand outreach impact",
                  action: "Become a Partner",
                  onClick: () => window.open('https://forms.google.com/d/e/1FAIpQLSc_partnership_form', '_blank')
                }
              ].map((option, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    <Button 
                      className="bg-agricultural-green hover:bg-green-700"
                      onClick={option.onClick}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h3 className="text-3xl font-bold mb-4">Join Our Outreach Network</h3>
              <p className="text-green-100 mb-8">
                Be part of the agricultural transformation in Migori County. 
                Together, we can reach more farmers and create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRequestVisit}
                >
                  <Truck className="h-5 w-5 mr-2" />
                  Request Outreach
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.open('tel:+254XXXXXXXXX')}
                >
                  Call Our Team
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

export default Outreach;
