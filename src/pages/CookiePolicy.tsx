
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device 
                  when you visit our website. They help us provide you with a better browsing 
                  experience by remembering your preferences and improving site functionality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-gray-700">
                      These cookies are necessary for the website to function properly. 
                      They enable basic functions like page navigation, form submissions, 
                      and access to secure areas of the website.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-700">
                      We use these cookies to understand how visitors interact with our website. 
                      They help us analyze traffic patterns, popular content, and improve 
                      our services based on user behavior.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Functional Cookies</h4>
                    <p className="text-gray-700">
                      These cookies remember your preferences and choices to provide 
                      enhanced, personalized features such as language preferences 
                      and registration information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Google Analytics:</strong> We use Google Analytics to track 
                    website usage and generate reports on visitor activity. These cookies 
                    collect anonymous information about your visit.
                  </p>
                  <p>
                    <strong>Social Media:</strong> When you share content through social 
                    media buttons, those platforms may set their own cookies on your device.
                  </p>
                  <p>
                    <strong>Maps Services:</strong> Our location maps may use cookies from 
                    mapping service providers to enhance functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Browser Settings:</strong> You can control and delete cookies 
                    through your browser settings. Most browsers allow you to block or 
                    delete cookies, though this may affect website functionality.
                  </p>
                  <p>
                    <strong>Opt-Out Options:</strong> You can opt-out of Google Analytics 
                    tracking by installing the Google Analytics Opt-out Browser Add-on 
                    or visiting Google's advertising opt-out page.
                  </p>
                  <p>
                    <strong>Mobile Devices:</strong> On mobile devices, you can usually 
                    find cookie settings in your browser's privacy or security settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Session cookies are deleted when you close your browser</li>
                  <li>• Persistent cookies remain for predetermined periods (typically 1-2 years)</li>
                  <li>• Analytics cookies are retained for up to 26 months</li>
                  <li>• Preference cookies are stored until you clear them or they expire</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about our use of cookies or this Cookie Policy, 
                  please contact us at:
                  <br />Email: info@miyareagri.migori.go.ke
                  <br />Phone: +254 XXX XXX XXX
                  <br />Address: Miyare Agricultural Training Center, P.O. Box 123, Migori
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
