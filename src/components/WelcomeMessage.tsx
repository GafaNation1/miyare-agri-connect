
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const WelcomeMessage = () => {
  return (
    <section className="py-16 bg-earth-tone">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-agricultural-green mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome Message from the Director
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                    alt="Director"
                    className="w-32 h-32 rounded-full object-cover border-4 border-agricultural-green"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "Welcome to Miyare Agricultural Training Center, where we transform lives through 
                    quality agricultural education. Our commitment to excellence in training, research, 
                    and community outreach continues to drive sustainable agricultural development 
                    across Migori County and beyond."
                  </blockquote>
                  
                  <div className="border-l-4 border-agricultural-green pl-4">
                    <p className="font-semibold text-gray-900">Dr. Sarah Achieng</p>
                    <p className="text-agricultural-green">Director, Miyare Agricultural Training Center</p>
                    <p className="text-sm text-gray-600">Department of Agriculture, Migori County</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-agricultural-green rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
                <p className="leading-relaxed">
                  We are dedicated to providing world-class agricultural training that empowers 
                  farmers, students, and communities with practical skills, innovative techniques, 
                  and sustainable farming practices that enhance food security and economic growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
