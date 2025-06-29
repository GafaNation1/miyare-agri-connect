
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Car, Bus } from 'lucide-react';

const MapView = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-agricultural-green to-green-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Us</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Visit Miyare Agricultural Training Center and discover our state-of-the-art 
                facilities for agricultural education and training.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map Container */}
              <div className="h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6089469574247!2d34.4732!3d-1.0632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDMnNDcuNSJTIDM0wrAyOCcyMy41IkU!5e0!3m2!1sen!2ske!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Miyare Agricultural Training Center Location"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-6 w-6 text-agricultural-green mr-2" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-semibold">Miyare Agricultural Training Center</p>
                      <p>Department of Agriculture</p>
                      <p>Migori County Government</p>
                      <p>P.O. Box 123, Migori</p>
                      <p>Kenya</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-6 w-6 text-agricultural-green mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-agricultural-green mr-2" />
                        <span>+254 XXX XXX XXX</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-agricultural-green mr-2" />
                        <span>info@miyareagri.migori.go.ke</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-6 w-6 text-agricultural-green mr-2" />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Directions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Get Here
              </h2>
              <p className="text-lg text-gray-600">
                Multiple transportation options to reach our training center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="h-6 w-6 text-agricultural-green mr-2" />
                    By Private Vehicle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>From Kisii:</strong> Take the Kisii-Migori highway, drive for 45km towards Migori town. Turn left at Miyare junction, proceed 3km to the training center.</p>
                    <p><strong>From Kisumu:</strong> Take the Kisumu-Migori road, drive for 78km. Pass through Rongo town, continue 15km to Miyare junction, turn right and proceed 3km.</p>
                    <p><strong>Parking:</strong> Free parking available on-site with designated spaces for visitors and students.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bus className="h-6 w-6 text-agricultural-green mr-2" />
                    By Public Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Bus Services:</strong> Take any bus heading to Migori from major towns (Kisii, Kisumu, Nairobi). Alight at Miyare junction.</p>
                    <p><strong>Matatu Services:</strong> From Migori town, board a matatu to Miyare. The journey takes approximately 20 minutes.</p>
                    <p><strong>Boda Boda:</strong> Available from Miyare junction to the training center (3km ride).</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-agricultural-green hover:bg-green-700"
                onClick={() => window.open('https://maps.google.com/directions', '_blank')}
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </section>

        {/* Nearby Landmarks */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nearby Landmarks
              </h2>
              <p className="text-lg text-gray-600">
                Notable places near our training center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Miyare Health Center", distance: "1.5km", direction: "North" },
                { name: "Miyare Primary School", distance: "800m", direction: "East" },
                { name: "Miyare Market", distance: "2km", direction: "South" },
                { name: "Migori County Assembly", distance: "12km", direction: "Southeast" },
                { name: "Rongo University", distance: "25km", direction: "North" },
                { name: "Awendo Sugar Factory", distance: "18km", direction: "Northeast" }
              ].map((landmark, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <MapPin className="h-8 w-8 text-agricultural-green mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{landmark.name}</h3>
                    <p className="text-gray-600 text-sm">{landmark.distance} {landmark.direction}</p>
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

export default MapView;
