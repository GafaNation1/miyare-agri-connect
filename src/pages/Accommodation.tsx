import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BookingForm from '@/components/BookingForm';
import { Bed, Wifi, Car, Utensils, Tv, Coffee, Shield, Clock } from 'lucide-react';

const Accommodation = () => {
  const accommodationOptions = [
    {
      title: "Standard Single Room",
      price: "KSh 2,500",
      period: "per night",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Single bed", "Private bathroom", "Study desk", "Free WiFi", "TV"],
      description: "Comfortable single accommodation perfect for individual trainees and visiting professionals."
    },
    {
      title: "Double Sharing Room",
      price: "KSh 2,000",
      period: "per person/night",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Twin beds", "Shared bathroom", "Study area", "Free WiFi", "Wardrobe"],
      description: "Affordable shared accommodation ideal for students and group training participants."
    },
    {
      title: "Executive Suite",
      price: "KSh 4,500",
      period: "per night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["King size bed", "Private bathroom", "Living area", "Kitchenette", "Premium WiFi", "TV", "Mini fridge"],
      description: "Luxurious accommodation for senior officials, guests, and extended stay visitors."
    }
  ];

  const facilities = [
    {
      icon: Utensils,
      title: "Dining Hall",
      description: "Spacious dining facility serving nutritious meals with local and international cuisine options."
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Complimentary WiFi access throughout the accommodation facilities for study and communication."
    },
    {
      icon: Car,
      title: "Parking",
      description: "Secure parking spaces available for guests with personal vehicles."
    },
    {
      icon: Coffee,
      title: "Common Areas",
      description: "Comfortable lounges and study areas for relaxation and group discussions."
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security services ensuring safety and peace of mind for all guests."
    },
    {
      icon: Clock,
      title: "Reception Services",
      description: "24-hour reception desk for check-in, assistance, and local information."
    }
  ];

  const amenities = [
    "Hot water supply",
    "Daily housekeeping",
    "Laundry services",
    "Conference facilities",
    "Recreation area",
    "Medical services nearby",
    "Transport arrangement",
    "Catering services"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-agricultural-green to-green-600 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-blend-overlay"></div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comfortable Accommodation
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Experience comfortable and affordable lodging at Miyare Agricultural Training Center. Our accommodation facilities are designed to provide a conducive environment for learning and rest.
              </p>
              <BookingForm roomType="Any Available Room" roomPrice="Starting from KSh 2,000">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Book Your Stay
                </Button>
              </BookingForm>
            </div>
          </div>
        </section>

        {/* Accommodation Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accommodation Options</h2>
              <p className="text-lg text-gray-600">Choose from our range of comfortable and affordable lodging options</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accommodationOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={option.image} 
                      alt={option.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-agricultural-green text-white">
                      Available
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <div className="text-2xl font-bold text-agricultural-green">
                      {option.price}
                      <span className="text-sm font-normal text-gray-600"> {option.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <Bed className="h-4 w-4 mr-2 text-agricultural-green" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <BookingForm roomType={option.title} roomPrice={option.price}>
                      <Button className="w-full bg-agricultural-green hover:bg-green-700">
                        Reserve Now
                      </Button>
                    </BookingForm>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Facilities & Services</h2>
              <p className="text-lg text-gray-600">Comprehensive amenities for a comfortable stay</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Amenities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Amenities</h2>
                <p className="text-lg text-gray-600">Everything you need for a comfortable and productive stay</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-gray-700 font-medium">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Booking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Check-in/Check-out</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Check-in: 2:00 PM</li>
                        <li>• Check-out: 11:00 AM</li>
                        <li>• Early check-in available on request</li>
                        <li>• Late check-out subject to availability</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Booking Policy</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Advance booking recommended</li>
                        <li>• Payment on arrival accepted</li>
                        <li>• Group discounts available</li>
                        <li>• Free cancellation 24 hours prior</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-3">Contact for Reservations</h3>
                    <p className="text-gray-600 mb-4">
                      Phone: +254 XXX XXX XXX<br />
                      Email: accommodation@miyareagri.migori.go.ke
                    </p>
                    <BookingForm roomType="Preferred Room" roomPrice="Contact for pricing">
                      <Button size="lg" className="bg-agricultural-green hover:bg-green-700">
                        Make Reservation
                      </Button>
                    </BookingForm>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Book Your Stay?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Experience comfortable accommodation while attending our agricultural training programs. Book now to secure your preferred dates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingForm roomType="Any Available Room" roomPrice="Best Available Rate">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    Book Now
                  </Button>
                </BookingForm>
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

export default Accommodation;
