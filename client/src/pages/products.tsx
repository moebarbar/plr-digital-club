import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Package,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  CheckCircle,
  Search,
} from "lucide-react";
import { productCategories } from "@/data/productCategories";
import logoLight from "@assets/PLR_Digital_Club_Logo_(3)_1768953394261.png";
import { Breadcrumb } from "@/components/Breadcrumb";

const CHECKOUT_URL = "https://app.plrdigitalclub.com";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    document.title = "Browse All Products | PLR Digital Club - 48 Categories, 1000+ Digital Products";
    
    const setMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    setMeta('description', 'Browse all 48 product categories with 1000+ digital products. Get PLR & MRR rights, rebrand and resell. Canva templates, eBooks, courses, graphics and more.');
    setMeta('og:title', 'Browse All Products | PLR Digital Club', true);
    setMeta('og:description', 'Get instant access to 48 product categories with 1000+ digital products. Full PLR & MRR rights included.', true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', 'https://plrdigitalclub.com/products', true);
    setMeta('twitter:title', 'Browse All Products | PLR Digital Club');
    setMeta('twitter:description', 'Get instant access to 48 product categories with 1000+ digital products. Full PLR & MRR rights included.');
  }, []);
  
  const filteredProducts = searchQuery 
    ? productCategories.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productCategories;

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <img 
              src={logoLight} 
              alt="PLR Digital Club" 
              className="h-8 md:h-10"
              data-testid="img-logo-products"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button size="sm" className="glow-cta" asChild data-testid="button-header-cta">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Get Access
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "Products" }]} />
          
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" data-testid="badge-products-count">
              <Package className="w-3 h-3 mr-1" />
              48 Categories • 1000+ Products
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-products-title">
              Browse All Product Categories
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8" data-testid="text-products-subtitle">
              Get instant access to all these product categories with full PLR & MRR rights. 
              Rebrand, customize, and resell - keep 100% of the profits.
            </p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-products"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 group border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                data-testid={`card-product-${index}`}
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-3"
                    loading="lazy"
                    data-testid={`img-product-${index}`}
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-8 pb-3 px-3">
                      <h3 className="text-white text-sm font-semibold mb-1" data-testid={`text-product-title-${index}`}>
                        {product.title}
                      </h3>
                      <p className="text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2" data-testid={`text-product-desc-${index}`}>
                        {product.description} + more inside...
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12" data-testid="text-no-results">
              <p className="text-muted-foreground">No products found matching "{searchQuery}"</p>
            </div>
          )}

          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-cta-title">
              Get Lifetime Access to Everything
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              All 48 categories. 1000+ products. Full PLR & MRR rights. New products added regularly.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>One-time $97 payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Keep 100% profit</span>
              </div>
            </div>

            <Button size="lg" className="glow-cta text-lg px-8" asChild data-testid="button-get-access">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Get Instant Access - $97
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <div className="flex justify-center gap-2 mt-4 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>30-Day Money-Back Guarantee • Secure Checkout</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 PLR Digital Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
