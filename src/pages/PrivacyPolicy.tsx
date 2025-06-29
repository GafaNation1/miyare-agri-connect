
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Personal Information:</strong> Name, address, phone number, email address, 
                    educational background, and farming experience when you register for our programs.
                  </p>
                  <p>
                    <strong>Training Records:</strong> Attendance records, assessment scores, 
                    certification details, and progress reports.
                  </p>
                  <p>
                    <strong>Website Data:</strong> IP addresses, browser information, and website 
                    usage patterns through cookies and analytics tools.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Provide and improve our training programs and services</li>
                  <li>• Communicate with you about programs, events, and updates</li>
                  <li>• Issue certificates and maintain training records</li>
                  <li>• Conduct research and program evaluation</li>
                  <li>• Comply with legal and regulatory requirements</li>
                  <li>• Send newsletters and educational materials (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with Migori County Government departments for 
                  administrative purposes, certified training partners, and as required by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes 
                  secure servers, encryption, and restricted access to personal data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access your personal information we hold</li>
                  <li>• Request correction of inaccurate information</li>
                  <li>• Request deletion of your personal data</li>
                  <li>• Withdraw consent for marketing communications</li>
                  <li>• File a complaint with data protection authorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  For privacy-related questions or to exercise your rights, contact our 
                  Data Protection Officer at:
                  <br />Email: privacy@miyareagri.migori.go.ke
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

export default PrivacyPolicy;
