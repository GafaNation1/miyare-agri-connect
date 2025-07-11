
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronDown, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* Top bar with contact info - hidden on mobile */}
      <div className="bg-government-blue text-white py-1 md:py-2 hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span>+254 XXX XXX XXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              <span>info@miyareagri.migori.go.ke</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Department of Agriculture - Migori County Government</span>
          </div>
        </div>
      </div>

      {/* Main header - reduced padding for mobile */}
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo and branding - smaller on mobile */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-4">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-agricultural-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-xl">MAC</span>
            </div>
            <div>
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-900">
                Miyare Agricultural Training Center
              </h1>
              <p className="text-xs md:text-sm text-gray-600">Department of Agriculture - Migori County</p>
            </div>
          </Link>

          {/* Desktop Three-Dot Menu */}
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                {navigationItems.map((item) => (
                  <React.Fragment key={item.name}>
                    {item.hasDropdown ? (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="flex items-center">
                          {item.name}
                          <ChevronDown className="h-4 w-4 ml-auto" />
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-white border shadow-lg">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <DropdownMenuItem key={dropdownItem.name} asChild>
                              <Link to={dropdownItem.href} className="cursor-pointer">
                                {dropdownItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem asChild>
                        <Link to={item.href} className="cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden h-8 w-8 md:h-10 md:w-10"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-4 w-4 md:h-6 md:w-6" /> : <Menu className="h-4 w-4 md:h-6 md:w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-2 md:mt-4 pb-2 md:pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1 md:space-y-2 pt-2 md:pt-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-agricultural-green transition-colors duration-200 py-1 md:py-2 px-2 md:px-4 rounded-md hover:bg-gray-50 block text-sm md:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-2 md:ml-4 mt-1 md:mt-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="text-gray-600 hover:text-agricultural-green transition-colors duration-200 py-1 px-2 md:px-4 rounded-md hover:bg-gray-50 block text-xs md:text-sm"
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
