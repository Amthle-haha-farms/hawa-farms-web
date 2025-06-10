
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ProductsSection = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const { toast } = useToast();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: "zobo",
      name: "Zobo Drink",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      description: "A refreshing blend of hibiscus leaves with natural spices and fruits. Rich in antioxidants and vitamin C, perfect for boosting your immune system.",
      features: ["100% Natural", "Rich in Antioxidants", "Immune Booster", "Refreshing Taste"],
      color: "from-red-500 to-red-600",
      pricing: [
        { quantity: 20, price: "₦10,000", pricePerUnit: "₦500" },
        { quantity: 50, price: "₦23,750", pricePerUnit: "₦475" },
        { quantity: 100, price: "₦45,000", pricePerUnit: "₦450" }
      ]
    },
    {
      id: "ginger",
      name: "Ginger Drink",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      description: "Invigorating ginger drink with a perfect balance of spice and sweetness. Known for its digestive benefits and natural healing properties.",
      features: ["Digestive Aid", "Anti-inflammatory", "Natural Healing", "Energy Boost"],
      color: "from-orange-500 to-yellow-500",
      pricing: [
        { quantity: 20, price: "₦10,000", pricePerUnit: "₦500" },
        { quantity: 50, price: "₦23,750", pricePerUnit: "₦475" },
        { quantity: 100, price: "₦45,000", pricePerUnit: "₦450" }
      ]
    },
    {
      id: "kunun",
      name: "Kunun Aya (Tigernut Drink)",
      price: "₦600",
      description: "Creamy and nutritious tigernut drink packed with natural goodness. Rich in fiber, healthy fats, and essential minerals for optimal health.",
      features: ["High Fiber", "Healthy Fats", "Rich in Minerals", "Naturally Sweet"],
      color: "from-amber-500 to-orange-600",
      pricing: [
        { quantity: 20, price: "₦12,000", pricePerUnit: "₦600" },
        { quantity: 50, price: "₦28,500", pricePerUnit: "₦570" },
        { quantity: 100, price: "₦54,000", pricePerUnit: "₦540" }
      ]
    }
  ];

  const addToCart = (productId: string, quantity: number) => {
    if (quantity < 20) {
      toast({
        title: "Minimum Order Required",
        description: "Minimum order quantity is 20 pieces per product.",
        variant: "destructive"
      });
      return;
    }

    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity
    }));

    toast({
      title: "Added to Cart",
      description: `${quantity} pieces added to your cart.`
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const clearCart = () => {
    setCart({});
    toast({
      title: "Cart Cleared",
      description: "All items removed from cart."
    });
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Our Premium <span className="text-brand-red">Products</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Discover our carefully crafted selection of healthy, homemade drinks. 
            Each 35cl bottle is made with love and the finest natural ingredients.
          </p>
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="mb-8 max-w-md mx-auto">
            <Card className="bg-brand-red text-white">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Cart: {getTotalItems()} items</span>
                  <div className="space-x-2">
                    <Button onClick={scrollToContact} variant="secondary" size="sm">
                      Checkout
                    </Button>
                    <Button onClick={clearCart} variant="outline" size="sm" className="text-brand-red border-white hover:bg-white">
                      Clear
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-gray-200 hover:border-brand-red">
              <CardHeader className="text-center pb-4">
                {product.image ? (
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`w-24 h-24 bg-gradient-to-r ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5,2V8H3V9A4,4 0 0,0 7,13H9V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V13H17A4,4 0 0,0 21,9V8H19V2H5M7,4H17V8H15V9A2,2 0 0,1 13,11H11A2,2 0 0,1 9,9V8H7V4Z"/>
                    </svg>
                  </div>
                )}
                <CardTitle className="text-2xl font-bold text-brand-black group-hover:text-brand-red transition-colors">
                  {product.name}
                </CardTitle>
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

                {/* Pricing Table */}
                <div className="mb-6 space-y-3">
                  <h4 className="font-bold text-brand-black">Quantity Pricing</h4>
                  {product.pricing.map((tier, tierIndex) => (
                    <div key={tierIndex} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <span className="font-semibold">{tier.quantity} bottles</span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-brand-red">{tier.price}</div>
                        <div className="text-xs text-brand-gray">{tier.pricePerUnit}/bottle</div>
                      </div>
                      <Button 
                        onClick={() => addToCart(product.id, tier.quantity)}
                        size="sm"
                        className="bg-brand-red hover:bg-brand-red-light text-white"
                      >
                        Add
                      </Button>
                    </div>
                  ))}
                  <div className="text-sm text-brand-gray italic">
                    For quantities above 100, contact us via WhatsApp
                  </div>
                </div>
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
