
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeMessage from '@/components/WelcomeMessage';
import NewsAndEvents from '@/components/NewsAndEvents';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WelcomeMessage />
        <NewsAndEvents />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
