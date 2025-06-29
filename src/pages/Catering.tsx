
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UtensilsCrossed, Coffee, Users, Calendar, Clock, Star, CheckCircle, Phone } from 'lucide-react';

const Catering = () => {
  const cateringServices = [
    {
      title: "Conference & Seminar Catering",
      description: "Professional catering services for conferences, seminars, and corporate events",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Welcome drinks", "Tea/coffee breaks", "Buffet lunch", "Customized menus", "Professional service"],
      capacity: "Up to 500 guests",
      pricing: "From KES 800 per person"
    },
    {
      title: "Training Workshop Meals",
      description: "Nutritious meals designed for training participants to maintain energy and focus",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Healthy breakfast", "Mid-morning snacks", "Balanced lunch", "Afternoon refreshments", "Dietary accommodations"],
      capacity: "Up to 200 participants",
      pricing: "From KES 600 per person"
    },
    {
      title: "Outdoor Event Catering",
      description: "Mobile catering services for field days, farm visits, and outdoor agricultural events",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Mobile kitchen setup", "Outdoor serving stations", "Weather-resistant service", "Fresh local ingredients", "Eco-friendly packaging"],
      capacity: "Up to 300 guests",
      pricing: "From KES 500 per person"
    },
    {
      title: "VIP & Official Functions",
      description: "Premium catering for government officials, dignitaries, and special occasions",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Gourmet menu options", "Formal table service", "Professional waitstaff", "Premium beverages", "Event coordination"],
      capacity: "Up to 100 guests",
      pricing: "From KES 1,500 per person"
    }
  ];

  const menuCategories = [
    {
      category: "Traditional Kenyan Cuisine",
      icon: UtensilsCrossed,
      items: ["Ugali with sukuma wiki", "Nyama choma", "Githeri", "Mukimo", "Fish from Lake Victoria", "Traditional vegetables"]
    },
    {
      category: "International Dishes",
      icon: Coffee,
      items: ["Rice and chicken curry", "Pasta dishes", "Grilled meats", "Fresh salads", "Sandwiches and wraps", "Vegetarian options"]
    },
    {
      category: "Beverages & Refreshments",
      icon: Coffee,
      items: ["Kenyan tea and coffee", "Fresh fruit juices", "Mineral water", "Soft drinks", "Traditional drinks", "Energy drinks"]
    }
  ];

  const facilities = [
    {
      name: "Main Dining Hall",
      capacity: "200 seated guests",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Air conditioning", "Audio-visual equipment", "Flexible seating arrangements", "Stage for presentations"]
    },
    {
      name: "Modern Kitchen Facility",
      capacity: "500+ meals daily",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Commercial-grade equipment", "Food safety certified", "Cold storage facilities", "Preparation areas"]
    },
    {
      name: "Outdoor Event Space",
      capacity: "300 guests",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Covered pavilion", "Garden setting", "Mobile bar setup", "Scenic agricultural views"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Wanjiku",
      position: "Ministry of Agriculture",
      comment: "The catering service was exceptional during our 3-day agricultural conference. Professional service and delicious local cuisine.",
      rating: 5
    },
    {
      name: "James Ochieng",
      position: "Event Coordinator",
      comment: "Miyare's catering team made our farmer field day a huge success. The outdoor setup was perfect and food quality excellent.",
      rating: 5
    },
    {
      name: "Mary Adhiambo",
      position: "Training Manager",
      comment: "We've been using their catering services for our training programs for 2 years. Consistently good food and reliable service.",
      rating: 5
    }
  ];

  const handleBooking = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_catering_booking_form', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-agricultural-green to-green-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Catering Services</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Exceptional catering services for conferences, training programs, and special events 
                featuring authentic Kenyan cuisine and international dishes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleBooking}
                >
                  Book Catering Service
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.open('tel:+254XXXXXXXXX')}
                >
                  Call for Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "500+", label: "Events Catered" },
                { icon: UtensilsCrossed, number: "50,000+", label: "Meals Served" },
                { icon: Star, number: "98%", label: "Satisfaction Rate" },
                { icon: Calendar, number: "5+", label: "Years Experience" }
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

        {/* Catering Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Catering Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional catering solutions tailored to your event needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cateringServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-agricultural-green text-white">
                      {service.capacity}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-sm text-gray-500">{service.pricing}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Includes:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-agricultural-green mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-agricultural-green hover:bg-green-700"
                      onClick={handleBooking}
                    >
                      Book This Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Menu Selection
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Diverse menu options featuring local and international cuisine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuCategories.map((menu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <menu.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{menu.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {menu.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Modern facilities equipped to handle events of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{facility.name}</h3>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-agricultural-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600">Trusted by organizations across Kenya</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Book Our Services
              </h2>
              <p className="text-lg text-gray-600">Simple 4-step booking process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Contact Us", desc: "Call or fill our booking form" },
                { step: "2", title: "Consultation", desc: "Discuss your event requirements" },
                { step: "3", title: "Menu Planning", desc: "Choose from our menu options" },
                { step: "4", title: "Event Day", desc: "Enjoy professional service" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Book Your Event?</h3>
              <p className="text-green-100 mb-8">
                Let us make your next event memorable with our professional catering services. 
                Contact us today for a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleBooking}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.open('tel:+254XXXXXXXXX')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Quote
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

export default Catering;
