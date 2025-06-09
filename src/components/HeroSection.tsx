
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-brand-black via-brand-gray to-brand-red-dark min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Fresh & Healthy 
              <span className="text-brand-red"> Homemade Drinks</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Welcome to AMTHLE Hawa Farms, your trusted local producer of premium quality, 
              homemade beverages. We specialize in crafting delicious and nutritious drinks 
              that refresh your body and nourish your soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('products')}
                className="bg-brand-red hover:bg-brand-red-light text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                View Our Products
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4 text-lg transition-all duration-300"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-r from-brand-red to-brand-red-light rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-brand-red rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">100% Natural</h3>
                <p className="text-brand-gray">Made with fresh, locally sourced ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
