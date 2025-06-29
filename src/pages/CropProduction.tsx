
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Sprout, Sun, Droplets, BarChart3, Users, BookOpen, Award } from 'lucide-react';

const CropProduction = () => {
  const cropPrograms = [
    {
      title: "Maize Production Excellence",
      duration: "3 months",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive training on modern maize farming techniques, from land preparation to harvest.",
      modules: ["Soil preparation", "Seed selection", "Planting techniques", "Pest management", "Harvesting & storage"]
    },
    {
      title: "Sustainable Vegetable Farming",
      duration: "2 months",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Learn organic vegetable production methods for maximum yield and market value.",
      modules: ["Organic soil management", "Companion planting", "Natural pest control", "Irrigation systems", "Market preparation"]
    },
    {
      title: "Cash Crop Development",
      duration: "4 months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Focus on high-value crops like coffee, tea, and horticultural products for commercial farming.",
      modules: ["Market analysis", "Crop selection", "Quality control", "Processing basics", "Export standards"]
    }
  ];

  const demoFarms = [
    {
      name: "Integrated Farming Demo Plot",
      size: "5 acres",
      focus: "Mixed cropping systems",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Crop rotation demonstration", "Intercropping examples", "Soil conservation methods", "Water management systems"]
    },
    {
      name: "Organic Vegetable Garden",
      size: "2 acres",
      focus: "Organic production methods",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Composting area", "Natural pest control", "Drip irrigation", "Greenhouse production"]
    },
    {
      name: "Cash Crop Plantation",
      size: "10 acres",
      focus: "Commercial crop production",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Coffee plantation", "Fruit orchards", "Processing facilities", "Storage units"]
    }
  ];

  const services = [
    {
      icon: Leaf,
      title: "Soil Testing & Analysis",
      description: "Comprehensive soil health assessment and recommendations for optimal crop production."
    },
    {
      icon: Sprout,
      title: "Seed & Seedling Supply",
      description: "Quality certified seeds and seedlings for various crops suited to local conditions."
    },
    {
      icon: Sun,
      title: "Climate Advisory",
      description: "Weather-based farming advice and climate-smart agriculture recommendations."
    },
    {
      icon: Droplets,
      title: "Irrigation Consultation",
      description: "Design and implementation of efficient irrigation systems for different crops."
    }
  ];

  const handleRegistration = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_crop_production_registration', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-agricultural-green py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Crop Production Excellence</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Master modern crop production techniques through hands-on training, 
                demonstration farms, and expert guidance at Miyare Agricultural Training Center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRegistration}
                >
                  Enroll in Programs
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agricultural-green">
                  View Demo Farms
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "2,500+", label: "Farmers Trained" },
                { icon: Leaf, number: "50+", label: "Crop Varieties" },
                { icon: BarChart3, number: "40%", label: "Yield Increase" },
                { icon: Award, number: "15+", label: "Years Experience" }
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

        {/* Training Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Crop Production Training Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive training programs designed to enhance your crop production skills and knowledge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cropPrograms.map((program, index) => (
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
                    <p className="text-sm text-gray-500">{program.level}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Training Modules:</h4>
                      <ul className="space-y-1">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2 flex-shrink-0"></div>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-agricultural-green hover:bg-green-700"
                      onClick={handleRegistration}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Farms Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Demonstration Farms
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn through practical experience at our well-equipped demonstration farms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoFarms.map((farm, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={farm.image} 
                      alt={farm.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-agricultural-green">
                      {farm.size}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{farm.name}</h3>
                    <p className="text-gray-600 mb-4">{farm.focus}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {farm.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Supporting Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Additional services to support your crop production journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
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
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h3>
              <p className="text-green-100 mb-8">
                Join thousands of farmers who have improved their crop production through our training programs. 
                Start your journey to agricultural excellence today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRegistration}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Register for Training
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.open('tel:+254XXXXXXXXX')}
                >
                  Call for Consultation
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

export default CropProduction;
