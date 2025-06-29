
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Training Programs', href: '#programs' },
    { name: 'Accommodation', href: '#accommodation' },
    { name: 'Crop Production', href: '#crops' },
    { name: 'Livestock', href: '#livestock' },
    { name: 'Seminars & Events', href: '#seminars' },
    { name: 'Outreach Activities', href: '#outreach' },
  ];

  const resources = [
    { name: 'Course Brochures', href: '#downloads' },
    { name: 'Application Forms', href: '#forms' },
    { name: 'Training Manuals', href: '#manuals' },
    { name: 'Research Publications', href: '#research' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Video Resources', href: '#videos' },
  ];

  const legalLinks = [
    { name: 'Terms of Use', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Accessibility Statement', href: '#accessibility' },
    { name: 'Cookie Policy', href: '#cookies' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-agricultural-green py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Agricultural News</h3>
            <p className="text-green-100 mb-6">
              Subscribe to receive the latest updates on training programs, agricultural innovations, and county developments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white text-gray-900 flex-1"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-agricultural-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MAC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Miyare ATC</h3>
                  <p className="text-sm text-gray-400">Agricultural Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Leading agricultural training and development in Migori County through innovative education, 
                sustainable practices, and community empowerment.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-agricultural-green transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      className="text-gray-300 hover:text-agricultural-green transition-colors text-sm flex items-center"
                    >
                      {resource.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-agricultural-green flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p>Miyare Agricultural Training Center</p>
                    <p>P.O. Box 123, Migori</p>
                    <p>Migori County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-agricultural-green" />
                  <div className="text-sm text-gray-300">
                    <p>+254 XXX XXX XXX</p>
                    <p>+254 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-agricultural-green" />
                  <div className="text-sm text-gray-300">
                    <p>info@miyareagri.migori.go.ke</p>
                    <p>director@miyareagri.migori.go.ke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" 
                  alt="Migori County Logo" 
                  className="h-8 w-8 rounded"
                />
                <span className="text-sm text-gray-400">Migori County Government</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-xs text-gray-400">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a href={link.href} className="hover:text-agricultural-green transition-colors">
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <Separator className="bg-gray-700 my-4" />
          
          <div className="text-center text-xs text-gray-400">
            <p>© 2024 Miyare Agricultural Training Center. All rights reserved.</p>
            <p className="mt-1">
              Department of Agriculture - Migori County Government | 
              Empowering Agricultural Excellence Since 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
