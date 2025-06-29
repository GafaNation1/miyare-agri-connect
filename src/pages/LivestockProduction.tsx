
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cow, Rabbit, Egg, Sheep, Heart, TrendingUp, Users, Award } from 'lucide-react';

const LivestockProduction = () => {
  const livestockPrograms = [
    {
      title: "Modern Dairy Farming",
      duration: "4 months",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive dairy farming training covering breed selection, feeding, health management, and milk production optimization.",
      modules: ["Breed selection", "Feeding & nutrition", "Health management", "Milking techniques", "Record keeping", "Farm management"]
    },
    {
      title: "Poultry Production Excellence",
      duration: "3 months",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Master modern poultry farming for both egg and meat production with focus on profitability and sustainability.",
      modules: ["Housing design", "Nutrition management", "Disease prevention", "Egg production", "Broiler management", "Marketing strategies"]
    },
    {
      title: "Small Livestock Management",
      duration: "2 months",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1517463830492-c40757622edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Learn to manage goats, sheep, and rabbits for maximum productivity and profit in small-scale farming.",
      modules: ["Goat management", "Sheep farming", "Rabbit production", "Feeding systems", "Breeding programs", "Value addition"]
    },
    {
      title: "Pig Production Systems",
      duration: "3 months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Intensive pig farming techniques focusing on modern housing, nutrition, and disease management.",
      modules: ["Housing systems", "Breeding management", "Nutrition formulation", "Health protocols", "Waste management", "Market preparation"]
    }
  ];

  const facilities = [
    {
      name: "Modern Dairy Unit",
      capacity: "50 dairy cows",
      focus: "Milk production demonstration",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Automated milking system", "Feed storage silos", "Milk cooling facility", "Calf rearing units"]
    },
    {
      name: "Poultry Complex",
      capacity: "2000 birds",
      focus: "Layers and broiler production",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Climate-controlled houses", "Automated feeding system", "Egg collection center", "Hatchery facility"]
    },
    {
      name: "Small Livestock Center",
      capacity: "200 animals",
      focus: "Goats, sheep, and rabbits",
      image: "https://images.unsplash.com/photo-1517463830492-c40757622edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Grazing paddocks", "Animal shelters", "Breeding facilities", "Feed processing unit"]
    },
    {
      name: "Pig Production Unit",
      capacity: "100 pigs",
      focus: "Intensive pig farming",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Modern pig houses", "Waste management system", "Feed mixing plant", "Quarantine facilities"]
    }
  ];

  const services = [
    {
      icon: Heart,
      title: "Animal Health Services",
      description: "Veterinary services, vaccinations, and health monitoring for all livestock species."
    },
    {
      icon: TrendingUp,
      title: "Breeding Programs",
      description: "Artificial insemination services and genetic improvement programs for better livestock."
    },
    {
      icon: Cow,
      title: "Livestock Supply",
      description: "Quality breeding stock and day-old chicks from certified sources."
    },
    {
      icon: Rabbit,
      title: "Feed Formulation",
      description: "Custom feed formulation services for optimal animal nutrition and growth."
    }
  ];

  const handleRegistration = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_livestock_production_registration', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-agricultural-green to-green-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Livestock Production Excellence</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Transform your livestock farming through modern techniques, expert training, 
                and state-of-the-art facilities at Miyare Agricultural Training Center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRegistration}
                >
                  Join Training Programs
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agricultural-green">
                  Visit Our Facilities
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
                { icon: Users, number: "1,800+", label: "Farmers Trained" },
                { icon: Cow, number: "300+", label: "Livestock Units" },
                { icon: TrendingUp, number: "60%", label: "Productivity Increase" },
                { icon: Award, number: "20+", label: "Years Excellence" }
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
                Livestock Training Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive training programs covering all aspects of modern livestock production
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {livestockPrograms.map((program, index) => (
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
                      <div className="grid grid-cols-2 gap-1">
                        {program.modules.map((module, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2 flex-shrink-0"></div>
                            {module}
                          </div>
                        ))}
                      </div>
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

        {/* Facilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                World-Class Livestock Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn with modern equipment and facilities designed for practical livestock management training
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-agricultural-green">
                      {facility.capacity}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600 mb-4">{facility.focus}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {facility.features.map((feature, idx) => (
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
                Livestock Support Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support services for successful livestock farming
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

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600">Real farmers, real results from our training programs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Mary Achieng",
                  location: "Suna East, Migori",
                  story: "Increased milk production from 5 to 25 liters per day after completing dairy farming course.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "John Omondi",
                  location: "Rongo, Migori",
                  story: "Built a successful poultry business producing 500 eggs daily after our training program.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Grace Nyong'o",
                  location: "Uriri, Migori",
                  story: "Transformed her small goat farm into a profitable meat and milk production enterprise.",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                }
              ].map((story, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                    <p className="text-gray-600 italic">"{story.story}"</p>
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
              <h3 className="text-3xl font-bold mb-4">Start Your Livestock Success Story</h3>
              <p className="text-green-100 mb-8">
                Join our community of successful livestock farmers. Get the knowledge, skills, 
                and support you need to build a thriving livestock enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleRegistration}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Join Training Program
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.open('tel:+254XXXXXXXXX')}
                >
                  Schedule Farm Visit
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

export default LivestockProduction;
