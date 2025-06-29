
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Miyare Agricultural Training Center website and services, 
                  you accept and agree to be bound by the terms and provision of this agreement. 
                  These terms apply to all visitors, users, and participants of our training programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Training Program Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Registration:</strong> All training program registrations are subject to availability 
                    and must be completed through official channels. Registration fees are non-refundable 
                    unless the program is cancelled by the center.
                  </p>
                  <p>
                    <strong>Attendance:</strong> Regular attendance is mandatory for all enrolled participants. 
                    Participants must maintain at least 80% attendance to receive certification.
                  </p>
                  <p>
                    <strong>Code of Conduct:</strong> All participants must maintain professional behavior 
                    and respect for instructors, facilities, and fellow participants.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  All content, training materials, research data, and educational resources provided by 
                  Miyare Agricultural Training Center are protected by intellectual property laws. 
                  Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Miyare Agricultural Training Center, being a department of Migori County Government, 
                  provides training and educational services. We are not liable for any direct, 
                  indirect, or consequential damages arising from the use of our services or 
                  application of training knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and personal information. 
                  All personal data collected is used solely for educational and administrative purposes 
                  in accordance with Kenya's Data Protection Act, 2019.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  For questions regarding these terms of use, please contact us at:
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

export default TermsOfUse;
