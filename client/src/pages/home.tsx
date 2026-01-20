import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Award,
  DollarSign,
  Infinity,
  Palette,
  Download,
  Settings,
  TrendingUp,
  LayoutTemplate,
  Bot,
  Megaphone,
  Laptop,
  BookOpen,
  Globe,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 mr-2" />
            1,000+ Digital Products with MRR
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-headline">
            Get Resell-Ready Digital Products for{" "}
            <span className="text-primary" data-testid="text-hero-highlight">100% Profit</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subheadline">
            Instant access to 1,000+ curated digital products with Master Resell Rights.
            <br className="hidden md:block" />
            No creation. No monthly fees. Just profit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto" data-testid="button-cta-primary">
              Get Instant Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-cta-secondary">
              See What's Inside
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const trustItems = [
    { icon: Infinity, text: "Lifetime Access" },
    { icon: Users, text: "Beginner Friendly" },
    { icon: Shield, text: "30-Day Guarantee" },
    { icon: Clock, text: "Instant Download" },
    { icon: DollarSign, text: "One-Time Payment" },
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30" data-testid="section-trust">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
              data-testid={`trust-item-${index}`}
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium" data-testid={`trust-text-${index}`}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  const valueCards = [
    {
      icon: Package,
      title: "1,000+ Digital Products",
      description: "Massive library of ready-to-sell digital assets",
    },
    {
      icon: Award,
      title: "Master Resell Rights",
      description: "Full rights to resell and keep every penny",
    },
    {
      icon: DollarSign,
      title: "Keep 100% Profit",
      description: "No royalties, no splits, all yours",
    },
    {
      icon: Palette,
      title: "Brand-Ready & Editable",
      description: "Customize with your branding in minutes",
    },
    {
      icon: Infinity,
      title: "Lifetime Access",
      description: "Pay once, access forever with free updates",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Download everything immediately after purchase",
    },
  ];

  return (
    <section className="py-12 md:py-20" data-testid="section-value">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-value-title">
            Everything You Need to Start Selling
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-value-subtitle">
            One purchase gives you access to a complete digital product business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueCards.map((card, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-value-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-value-card-title-${index}`}>{card.title}</h3>
              <p className="text-muted-foreground" data-testid={`text-value-card-desc-${index}`}>{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = [
    {
      icon: LayoutTemplate,
      title: "Templates & Systems",
      benefit: "Launch faster with proven frameworks",
    },
    {
      icon: Bot,
      title: "AI & Business Tools",
      benefit: "Automate and scale your operations",
    },
    {
      icon: Megaphone,
      title: "Marketing Assets",
      benefit: "Graphics, copy, and conversion tools",
    },
    {
      icon: Laptop,
      title: "SaaS & Software",
      benefit: "Lifetime deals on premium tools",
    },
    {
      icon: BookOpen,
      title: "Planners & eBooks",
      benefit: "Ready-to-sell digital guides",
    },
    {
      icon: Globe,
      title: "Website & Funnel Kits",
      benefit: "Complete sales system templates",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30" data-testid="section-categories">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-categories-title">
            Product Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-categories-subtitle">
            Diverse collection covering every profitable niche
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 cursor-pointer"
              data-testid={`card-category-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" data-testid={`text-category-title-${index}`}>{category.title}</h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-category-benefit-${index}`}>{category.benefit}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Join",
      description: "Get instant access with a one-time payment",
    },
    {
      number: "02",
      title: "Download",
      description: "Browse and download any products you want",
    },
    {
      number: "03",
      title: "Customize",
      description: "Add your branding and make it yours",
    },
    {
      number: "04",
      title: "Sell & Profit",
      description: "Sell anywhere and keep 100% of the revenue",
    },
  ];

  return (
    <section className="py-12 md:py-20" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-how-title">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-how-subtitle">
            Start your digital product business in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4" data-testid={`step-number-${index}`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`step-title-${index}`}>{step.title}</h3>
                <p className="text-muted-foreground" data-testid={`step-desc-${index}`}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <div className="w-1/2 border-t-2 border-dashed border-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const features = [
    "1,000+ Digital Products",
    "Master Resell Rights",
    "Brand-Ready Templates",
    "Lifetime Access",
    "Free Future Updates",
    "Commercial License",
    "24/7 Support",
    "30-Day Money Back Guarantee",
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-visible">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative text-center mb-8">
              <Badge variant="secondary" className="mb-4" data-testid="badge-limited-offer">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-pricing-title">
                One-Time Payment
              </h2>
              <p className="text-muted-foreground" data-testid="text-pricing-subtitle">
                Lifetime access to everything. No subscriptions.
              </p>
            </div>

            <div className="relative text-center mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-bold text-primary" data-testid="text-price">
                  $97
                </span>
                <span className="text-muted-foreground line-through text-xl" data-testid="text-price-original">$297</span>
              </div>
              <p className="text-muted-foreground mt-2" data-testid="text-price-note">One-time payment, lifetime value</p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-testid={`feature-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm" data-testid={`feature-text-${index}`}>{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="w-full" data-testid="button-pricing-cta">
              Get Instant Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden" data-testid="section-final-cta">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-final-headline">
            Ready to Start Your Digital Product Empire?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-final-subheadline">
            Join thousands of entrepreneurs who are building passive income with our digital products.
          </p>
          
          <Button size="lg" data-testid="button-final-cta">
            Get Instant Access Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2" data-testid="final-trust-guarantee">
              <Shield className="w-4 h-4 text-primary" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2" data-testid="final-trust-lifetime">
              <Infinity className="w-4 h-4 text-primary" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-2" data-testid="final-trust-instant">
              <Clock className="w-4 h-4 text-primary" />
              <span>Instant Download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © 2025 Digital Products MRR. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover-elevate px-2 py-1 rounded-md" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover-elevate px-2 py-1 rounded-md" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="hover-elevate px-2 py-1 rounded-md" data-testid="link-contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <HeroSection />
      <TrustSection />
      <ValueSection />
      <CategoriesSection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
