
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-brand-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            AMTHLE <span className="text-brand-red">Hawa Farms</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-brand-red transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-white hover:text-brand-red transition-colors duration-300"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-brand-red transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-brand-red hover:bg-brand-red-light text-white transition-colors duration-300"
          >
            Order Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-brand-red transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-white hover:text-brand-red transition-colors duration-300 text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-brand-red transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-red hover:bg-brand-red-light text-white transition-colors duration-300 w-full"
              >
                Order Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
