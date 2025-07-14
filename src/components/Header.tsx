
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronDown, MoreHorizontal, LogIn, UserPlus, LogOut, User } from 'lucide-react';
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
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

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
      {/* Top bar with contact info and auth buttons */}
      <div className="bg-government-blue text-white py-1 md:py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">+254 XXX XXX XXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">info@miyareagri.migori.go.ke</span>
            </div>
          </div>
          
          {/* Auth buttons or user info */}
          <div className="flex items-center space-x-2">
            <span className="hidden lg:block text-xs">Department of Agriculture - Migori County Government</span>
            <div className="flex items-center space-x-1 md:space-x-2 ml-2 md:ml-4">
              {isAuthenticated ? (
                <>
                  <span className="hidden md:inline text-xs">Welcome, {user?.firstName}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:bg-white/10 text-xs md:text-sm h-6 md:h-8 px-2 md:px-3"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/10 text-xs md:text-sm h-6 md:h-8 px-2 md:px-3"
                    >
                      <LogIn className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/10 text-xs md:text-sm h-6 md:h-8 px-2 md:px-3"
                    >
                      <UserPlus className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
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
                <DropdownMenuSeparator />
                {isAuthenticated ? (
                  <>
                    <DropdownMenuItem className="cursor-pointer flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {user?.firstName} {user?.lastName}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/login" className="cursor-pointer flex items-center">
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/signup" className="cursor-pointer flex items-center">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Sign Up
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
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
              
              {/* Mobile Auth Links */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {isAuthenticated ? (
                  <>
                    <div className="text-gray-700 py-1 md:py-2 px-2 md:px-4 text-sm md:text-base flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {user?.firstName} {user?.lastName}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-government-blue hover:text-agricultural-green transition-colors duration-200 py-1 md:py-2 px-2 md:px-4 rounded-md hover:bg-gray-50 block text-sm md:text-base flex items-center w-full text-left"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-government-blue hover:text-agricultural-green transition-colors duration-200 py-1 md:py-2 px-2 md:px-4 rounded-md hover:bg-gray-50 block text-sm md:text-base flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="text-government-blue hover:text-agricultural-green transition-colors duration-200 py-1 md:py-2 px-2 md:px-4 rounded-md hover:bg-gray-50 block text-sm md:text-base flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
