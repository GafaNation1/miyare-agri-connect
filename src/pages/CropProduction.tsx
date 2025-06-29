import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Sprout, Sun, Droplets, BarChart3, Users, BookOpen, Award, MapPin, Phone } from 'lucide-react';

const CropProduction = () => {
  const cropPrograms = [
    {
      title: "Maize Production Excellence",
      duration: "3 months",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive training on modern maize farming techniques covering hybrid seed selection, proper spacing, fertilizer application, pest and disease management, and post-harvest handling.",
      modules: ["Soil preparation & testing", "Hybrid seed selection", "Precision planting techniques", "Integrated pest management", "Harvesting & storage methods"],
      activities: ["Field demonstrations", "Hands-on planting", "Soil testing workshops", "Pest identification training", "Storage facility tours"]
    },
    {
      title: "Sustainable Vegetable Farming",
      duration: "2 months",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Learn organic vegetable production methods including greenhouse farming, drip irrigation, companion planting, and natural pest control for maximum yield and market value.",
      modules: ["Organic soil management", "Greenhouse operations", "Drip irrigation systems", "Natural pest control", "Market preparation & packaging"],
      activities: ["Greenhouse tours", "Compost making", "Irrigation setup", "Harvest demonstrations", "Market visits"]
    },
    {
      title: "Cash Crop Development",
      duration: "4 months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Focus on high-value crops like coffee, tea, avocados, and horticultural products for commercial farming with emphasis on quality standards and export requirements.",
      modules: ["Market analysis & planning", "Crop selection & variety", "Quality control systems", "Processing basics", "Export standards & certification"],
      activities: ["Coffee plantation visits", "Tea processing demos", "Quality testing labs", "Export facility tours", "Buyer meetings"]
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

  const dailyActivities = [
    "6:00 AM - Morning field inspection and data collection",
    "8:00 AM - Practical farming demonstrations",
    "10:00 AM - Classroom theory sessions",
    "2:00 PM - Hands-on training in demo plots",
    "4:00 PM - Equipment maintenance and storage",
    "5:00 PM - Record keeping and planning next day activities"
  ];

  const handleRegistration = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_crop_production_registration', '_blank');
  };

  const handleVisitFarm = () => {
    window.open('/gallery', '_self');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section with proper crop background */}
        <section 
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Crop Production Excellence</h1>
              <p className="text-xl text-white max-w-3xl mx-auto mb-8">
                Master modern crop production techniques through hands-on training, 
                demonstration farms, and expert guidance at Miyare Agricultural Training Center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRegistration}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Enroll in Programs
                </Button>
                <Button 
                  size="lg" 
                  className="bg-agricultural-green hover:bg-green-700 text-white"
                  onClick={handleVisitFarm}
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  View Demo Farms
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Do in Crop Production
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive crop production program covers everything from soil preparation to post-harvest handling, 
                ensuring farmers get maximum yields and profits from their agricultural activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Leaf className="h-12 w-12 text-agricultural-green mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Field Preparation</h3>
                  <p className="text-gray-600">Land clearing, soil testing, fertilizer application, and optimal field layout planning for maximum productivity.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Sprout className="h-12 w-12 text-agricultural-green mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Planting & Cultivation</h3>
                  <p className="text-gray-600">Proper seeding techniques, spacing, intercropping, and cultivation practices for healthy crop development.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BarChart3 className="h-12 w-12 text-agricultural-green mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Yield Optimization</h3>
                  <p className="text-gray-600">Advanced techniques for maximizing crop yields through proper nutrition, pest management, and harvest timing.</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daily Training Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-agricultural-green mb-4">Typical Training Day Schedule</h4>
                  <ul className="space-y-2">
                    {dailyActivities.map((activity, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-agricultural-green mb-4">Training Outcomes</h4>
                  <ul className="space-y-3">
                    <li className="text-gray-700">✓ 40% average increase in crop yields</li>
                    <li className="text-gray-700">✓ Reduced production costs by 25%</li>
                    <li className="text-gray-700">✓ Improved crop quality and market value</li>
                    <li className="text-gray-700">✓ Sustainable farming practices adoption</li>
                    <li className="text-gray-700">✓ Enhanced post-harvest handling skills</li>
                  </ul>
                </div>
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
                  <Phone className="h-5 w-5 mr-2" />
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
