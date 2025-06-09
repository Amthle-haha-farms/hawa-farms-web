
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProductsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      name: "Zobo Drink",
      price: "₦500",
      description: "A refreshing blend of hibiscus leaves with natural spices and fruits. Rich in antioxidants and vitamin C, perfect for boosting your immune system.",
      features: ["100% Natural", "Rich in Antioxidants", "Immune Booster", "Refreshing Taste"],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Ginger Drink",
      price: "₦500",
      description: "Invigorating ginger drink with a perfect balance of spice and sweetness. Known for its digestive benefits and natural healing properties.",
      features: ["Digestive Aid", "Anti-inflammatory", "Natural Healing", "Energy Boost"],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Our Premium <span className="text-brand-red">Products</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Discover our carefully crafted selection of healthy, homemade drinks. 
            Each bottle is made with love and the finest natural ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-gray-200 hover:border-brand-red">
              <CardHeader className="text-center pb-4">
                <div className={`w-24 h-24 bg-gradient-to-r ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,2V8H3V9A4,4 0 0,0 7,13H9V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V13H17A4,4 0 0,0 21,9V8H19V2H5M7,4H17V8H15V9A2,2 0 0,1 13,11H11A2,2 0 0,1 9,9V8H7V4Z"/>
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-brand-black group-hover:text-brand-red transition-colors">
                  {product.name}
                </CardTitle>
                <div className="text-3xl font-bold text-brand-red">{product.price}</div>
                <div className="text-sm text-brand-gray">per bottle</div>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-brand-gray mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center bg-gray-100 rounded-lg py-2 px-3">
                      <svg className="w-4 h-4 text-brand-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-brand-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-brand-red hover:bg-brand-red-light text-white transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-brand-red">
            <h3 className="text-2xl font-bold text-brand-black mb-4">Why Choose Our Drinks?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20A1,1 0 0,1 8,19V11.27L6,12.14V19A1,1 0 0,1 4,20H2A1,1 0 0,1 1,19V10A1,1 0 0,1 1.5,9.14L9.5,5.86C9.81,5.71 10.19,5.71 10.5,5.86L18.5,9.14A1,1 0 0,1 19,10V11H17V10.27L10,7.28L3,10.27V18H9V20M20,12A1,1 0 0,1 21,13V19A1,1 0 0,1 20,20H18A1,1 0 0,1 17,19V13A1,1 0 0,1 18,12H20M19,14H18V18H19V14Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-brand-black">Local Production</h4>
                <p className="text-sm text-brand-gray">Freshly made in our local facility</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-brand-black">Quality Assured</h4>
                <p className="text-sm text-brand-gray">Made with premium ingredients</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8L10,17Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-brand-black">Health Benefits</h4>
                <p className="text-sm text-brand-gray">Packed with natural goodness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
