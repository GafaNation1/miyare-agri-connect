
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Statement</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment to Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Miyare Agricultural Training Center is committed to ensuring digital accessibility 
                  for people with disabilities. We continually improve the user experience for 
                  everyone and apply relevant accessibility standards to ensure our website and 
                  services are accessible to all users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Keyboard navigation support throughout the website</li>
                  <li>• Alternative text for images and graphics</li>
                  <li>• Proper heading structure for screen readers</li>
                  <li>• High contrast color schemes for better visibility</li>
                  <li>• Resizable text up to 200% without loss of functionality</li>
                  <li>• Clear and consistent navigation layout</li>
                  <li>• Form labels and error messages clearly identified</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Physical Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Training Facilities:</strong> Our training center is designed with 
                    accessibility in mind, featuring wheelchair-accessible entrances, 
                    ramps, accessible restrooms, and designated parking spaces.
                  </p>
                  <p>
                    <strong>Classroom Accommodations:</strong> We provide adjustable seating, 
                    assistive listening equipment, and materials in alternative formats 
                    upon request.
                  </p>
                  <p>
                    <strong>Field Training:</strong> Modified field activities and alternative 
                    demonstration methods are available for participants with mobility limitations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standards Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                  Level AA standards and Kenya's accessibility requirements. Our website is 
                  regularly tested with assistive technologies and accessibility tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback and Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We welcome feedback on the accessibility of our website and services. 
                    If you encounter any accessibility barriers or need assistance, please contact us:
                  </p>
                  <p>
                    <strong>Accessibility Coordinator:</strong>
                    <br />Email: accessibility@miyareagri.migori.go.ke
                    <br />Phone: +254 XXX XXX XXX
                    <br />Address: Miyare Agricultural Training Center, P.O. Box 123, Migori
                  </p>
                  <p>
                    We aim to respond to accessibility feedback within 2 business days and 
                    will work with you to provide the information or service you need in 
                    an accessible format.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ongoing Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We continuously work to improve accessibility through regular audits, 
                  staff training, and updates to our digital platforms. This statement 
                  will be updated as we make improvements and changes to our accessibility features.
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

export default AccessibilityStatement;
