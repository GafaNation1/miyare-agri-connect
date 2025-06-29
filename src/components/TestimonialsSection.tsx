
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Ochieng",
      role: "Certified Dairy Farmer",
      location: "Rongo Sub-County",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The training I received at Miyare ATC transformed my farming practices. My dairy production increased by 300% within six months of implementing what I learned.",
      rating: 5
    },
    {
      id: 2,
      name: "Mary Akinyi",
      role: "Crop Production Specialist",
      location: "Awendo Sub-County",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The sustainable farming techniques taught here not only improved my yields but also helped me contribute to environmental conservation. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Peter Nyong'o",
      role: "Agricultural Extension Officer",
      location: "Migori County",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "As an extension officer, the advanced training programs here keep me updated with the latest agricultural innovations to better serve our farming communities.",
      rating: 5
    },
    {
      id: 4,
      name: "Grace Adhiambo",
      role: "Youth Farmer",
      location: "Suna East Sub-County",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      testimonial: "The youth programs here motivated me to venture into agribusiness. I now run a successful poultry farm and employ five other young people.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates, trainees, and community members about their transformative experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-to-br from-white to-earth-tone hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-agricultural-green flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-agricultural-green"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-agricultural-green font-medium">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 bg-agricultural-green rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">2,500+</div>
              <div className="text-sm md:text-base">Farmers Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">85%</div>
              <div className="text-sm md:text-base">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">150+</div>
              <div className="text-sm md:text-base">Training Programs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">12</div>
              <div className="text-sm md:text-base">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
