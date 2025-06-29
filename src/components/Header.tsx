
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Training Programs', href: '/programs' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', href: '/services' },
        { name: 'Crop Production', href: '/crop-production' },
        { name: 'Livestock Production', href: '/livestock-production' },
        { name: 'Catering Services', href: '/catering' },
        { name: 'Outreach Programs', href: '/outreach' }
      ]
    },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Resources', href: '/resources' },
    { name: 'Administration', href: '/administration' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-government-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+254 XXX XXX XXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@miyareagri.migori.go.ke</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Department of Agriculture - Migori County Government</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and branding */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-agricultural-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MAC</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Miyare Agricultural Training Center
              </h1>
              <p className="text-sm text-gray-600">Department of Agriculture - Migori County</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-agricultural-green transition-colors duration-200 font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border z-50">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-agricultural-green transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-agricultural-green transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-agricultural-green transition-colors duration-200 py-2 px-4 rounded-md hover:bg-gray-50 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="text-gray-600 hover:text-agricultural-green transition-colors duration-200 py-1 px-4 rounded-md hover:bg-gray-50 block text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
