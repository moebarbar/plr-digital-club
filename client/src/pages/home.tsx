import { useState } from "react";
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
  RefreshCw,
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
  Star,
  Check,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import heroImage from "@assets/PLR_Digital_Club_Header__1768953600526.png";
import emailDbImage from "@assets/generated_images/email_database_product_mockup.png";
import socialTemplatesImage from "@assets/generated_images/social_media_templates_mockup.png";
import plannerImage from "@assets/generated_images/digital_planner_mockup.png";
import aiToolsImage from "@assets/generated_images/ai_business_tools_mockup.png";
import funnelKitsImage from "@assets/generated_images/website_funnel_kits_mockup.png";
import logoLight from "@assets/PLR_Digital_Club_Logo_(3)_1768953394261.png";
import logoDark from "@assets/PLR_Digital_Club_Logo_(4)_1768953475194.png";
import reviewImage from "@assets/PLR-DIGITAL-CLUB-review_(1)_1768970449756.png";

const CHECKOUT_URL = "https://plrdigitalclub.com/checkout-page";
const SIGNIN_URL = "https://plrdigitalclub.com/signin";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="py-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <img 
          src={logoLight} 
          alt="PLR Digital Club" 
          className="h-8 md:h-12 dark:hidden" 
          data-testid="img-logo-light"
        />
        <img 
          src={logoDark} 
          alt="PLR Digital Club" 
          className="h-8 md:h-12 hidden dark:block" 
          data-testid="img-logo-dark"
        />
        
        <nav className="hidden md:flex items-center gap-6" data-testid="nav-menu">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-how-it-works"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('products')} 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-products"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-pricing"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-faq"
          >
            FAQ
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" asChild className="hidden sm:inline-flex" data-testid="button-header-login">
            <a href={SIGNIN_URL} target="_blank" rel="noopener noreferrer">
              Access Member Area
            </a>
          </Button>
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      <div 
        className={`md:hidden border-t border-border bg-background transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        data-testid="mobile-menu"
      >
        <nav className="flex flex-col p-4 gap-2">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-left py-3 px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            data-testid="mobile-nav-how-it-works"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('products')} 
            className="text-left py-3 px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            data-testid="mobile-nav-products"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-left py-3 px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            data-testid="mobile-nav-pricing"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-left py-3 px-4 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            data-testid="mobile-nav-faq"
          >
            FAQ
          </button>
          <a 
            href={SIGNIN_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-left py-3 px-4 rounded-md text-primary font-medium hover:bg-muted transition-colors"
            data-testid="mobile-nav-login"
          >
            Access Member Area
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-32" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm" data-testid="badge-hero">
            <Sparkles className="w-4 h-4 mr-2" />
            1000+ Products Ready to Resell
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight" data-testid="text-hero-headline">
            Get Resell-Ready Digital Products for{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent" data-testid="text-hero-highlight">100% Profit</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subheadline">
            Pay once. Access 1000+ digital products with full PLR & MRR rights. Rebrand them, sell them anywhere, and keep 100% of the profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/25" asChild data-testid="button-cta-primary">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Get Instant Access for $97
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 mb-8" data-testid="hero-reviews">
            <img 
              src={reviewImage} 
              alt="Customer reviews - 4.8 stars from 500+ users" 
              className="h-10 md:h-12"
              data-testid="img-hero-reviews"
            />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.8</span> from <span className="font-semibold text-foreground">500+</span> happy users
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2" data-testid="hero-trust-payment">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>One-time payment</span>
            </div>
            <div className="flex items-center gap-2" data-testid="hero-trust-rights">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Full PLR & MRR rights</span>
            </div>
            <div className="flex items-center gap-2" data-testid="hero-trust-download">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Instant download</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-muted-foreground" data-testid="hero-security-strip">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              Secure SSL Checkout
            </span>
            <span className="text-border">|</span>
            <span>30-Day Money-Back Guarantee</span>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <img 
            src={heroImage} 
            alt="Digital Product Bundle with PLR and MRR Rights - Over 500 Premium Digital Products" 
            className="w-full"
            data-testid="img-hero-bundle"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-6 py-3 shadow-lg">
            <p className="text-sm font-semibold text-center" data-testid="text-hero-value">
              TOTAL VALUE: <span className="text-primary">$5,490+</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: "1,000+", label: "Digital Products", icon: Package },
    { number: "5,000+", label: "Happy Members", icon: Users },
    { number: "$2M+", label: "Member Earnings", icon: DollarSign },
    { number: "4.9/5", label: "Member Rating", icon: Star },
  ];

  return (
    <section className="py-16 bg-primary/5" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-item-${index}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1" data-testid={`stat-number-${index}`}>
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
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
    <section className="py-8 border-y border-border" data-testid="section-trust">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
              data-testid={`trust-item-${index}`}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-semibold" data-testid={`trust-text-${index}`}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Download,
      title: "Download",
      description: "Browse our library of high-quality digital products and download the ones that fit your niche. Ebooks, courses, templates, and more.",
    },
    {
      number: "2",
      icon: Zap,
      title: "Customize",
      description: "Add your personal touch if you want. Change the cover, update the title, or sell them as-is. Your choice, your business.",
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "Resell",
      description: "Upload it to your store (Etsy, Shopify, Gumroad) and sell it. You keep 100% of every sale you make.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-how-title">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-how-subtitle">
            We've removed the hardest part of making money online: creating the product. Now you can focus on selling and earning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-elevate transition-all duration-300"
              data-testid={`step-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2" data-testid={`step-number-${index}`}>
                Step {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid={`step-title-${index}`}>{step.title}</h3>
              <p className="text-muted-foreground" data-testid={`step-desc-${index}`}>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      image: emailDbImage,
      title: "USA Business Email Database",
      category: "Marketing Asset",
      alt: "Professional email database visualization with business contacts",
    },
    {
      image: socialTemplatesImage,
      title: "Social Media Templates & Ads",
      category: "Design Templates",
      alt: "Modern social media marketing templates for Instagram and Facebook",
    },
    {
      image: plannerImage,
      title: "Planners & Journals Bundle",
      category: "Digital Products",
      alt: "Digital planner and journal templates for productivity",
    },
    {
      image: aiToolsImage,
      title: "AI & Business Automation Tools",
      category: "Software Tools",
      alt: "AI-powered business automation tools and software",
    },
    {
      image: funnelKitsImage,
      title: "Website & Funnel Kits",
      category: "Website Assets",
      alt: "Professional website and sales funnel templates",
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20" data-testid="section-products">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-products-title">
            What's Inside Your Membership
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-products-subtitle">
            All of these products (and 1000+ more) are included with your $97 one-time membership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-product-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                  data-testid={`img-product-${index}`}
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 left-3 bg-primary text-primary-foreground"
                  data-testid={`badge-product-${index}`}
                >
                  Included
                </Badge>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-testid={`text-product-category-${index}`}>
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold" data-testid={`text-product-title-${index}`}>
                  {product.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Plus 1000+ more products in categories like ebooks, courses, graphics, and more</p>
          <Button variant="outline" size="lg" asChild data-testid="button-view-all-products">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              See Everything That's Included
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function UpdatesSection() {
  const updates = [
    { text: "New Planners and Journals", tag: "Updated", isNew: false },
    { text: "2026 Journals and Planners Bundle", tag: null, isNew: true },
    { text: "New 1000 Social Media Reels", tag: "Updated", isNew: false },
    { text: "Notion Templates", tag: "Updated", isNew: false },
    { text: "New AI ART", tag: "New Category", isNew: true },
    { text: "New Excel Templates", tag: "New Category", isNew: true },
    { text: "Guide & Newsletter Templates", tag: "New Category", isNew: true },
    { text: "Coloring Book Bundle (Printables)", tag: null, isNew: false },
    { text: "Mega Fitness Bundle", tag: "Updated", isNew: false },
    { text: "Die-cut Stickers", tag: "Updated", isNew: false },
    { text: "New Resume Templates", tag: "Updated", isNew: false },
    { text: "New SOP/HOW TO Templates", tag: "Updated", isNew: false },
    { text: "New Courses", tag: "Updated", isNew: false },
    { text: "Canva Carousel Bundle", tag: "New Category", isNew: true },
    { text: "Canva Bio Link Bundle", tag: "New Category", isNew: true },
    { text: "Simply Passive Course", tag: "New Category", isNew: true },
    { text: "New 2025 Planners and Journals", tag: null, isNew: false },
    { text: "Instagram Growth Mastery Bundle", tag: null, isNew: false },
    { text: "Restaurant Social Media Collection", tag: null, isNew: false },
    { text: "Canva Guide and Newsletter Templates", tag: null, isNew: false },
    { text: "Influencer Social Media Collection", tag: null, isNew: false },
    { text: "Boss Academy Bundle", tag: null, isNew: false },
    { text: "Instagram Growth Academy", tag: null, isNew: false },
    { text: "100,000 Faceless Reels/Shorts/TikTok", tag: null, isNew: false },
    { text: "1000+ Viral Hooks for Social Media", tag: null, isNew: false },
    { text: "ADHD Bundle Self Care Bundle", tag: null, isNew: false },
    { text: "New 100 Planners and Journals", tag: "Updated", isNew: false },
    { text: "1000 Templates ADHD Care Bundle", tag: null, isNew: false },
    { text: "1500 Educational Resources for Kids", tag: null, isNew: false },
    { text: "ManyChat Automation Templates", tag: null, isNew: false },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30" data-testid="section-updates">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            <RefreshCw className="w-4 h-4 mr-2" />
            Auto-Syncing Updates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-updates-title">
            2026 Product Updates
          </h2>
          <p className="text-muted-foreground text-lg">
            New products added regularly. Your membership includes all future updates.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur border-primary/20" data-testid="card-updates">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">LIVE UPDATE FEED</span>
            <span className="text-xs text-muted-foreground ml-auto font-mono">Last sync: Today</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
            {updates.map((update, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                data-testid={`update-item-${index}`}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {update.tag && (
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${update.isNew ? 'border-primary text-primary' : 'border-muted-foreground'}`}
                      >
                        {update.tag}
                      </Badge>
                    )}
                    <span className="text-sm font-medium truncate">{update.text}</span>
                  </div>
                </div>
                <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  Access
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-mono">
              {updates.length} items synced
            </span>
            <Button variant="outline" size="sm" asChild>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Get Full Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

function ValueSection() {
  const valueItems = [
    { title: "1000+ Digital Products with PLR & MRR", value: "$4,997 Value", icon: Package },
    { title: "Full Resell & Rebrand Rights", value: "$997 Value", icon: Award },
    { title: "Marketing Assets & Sales Copy", value: "$497 Value", icon: Megaphone },
    { title: "Lifetime Updates & New Products", value: "Priceless", icon: Infinity },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-muted/30" data-testid="section-value">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              90% OFF - Limited Time
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-value-title">
              Everything You Need to Start Selling Digital Products
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-value-subtitle">
              One payment. Lifetime access. Start today.
            </p>
          </div>

          <Card className="p-8 md:p-12" data-testid="card-value-breakdown">
            <div className="space-y-6 mb-8">
              {valueItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-border last:border-0"
                  data-testid={`value-item-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium" data-testid={`value-item-title-${index}`}>{item.title}</span>
                  </div>
                  <span className="text-muted-foreground" data-testid={`value-item-value-${index}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-muted-foreground text-sm">Total Value</p>
                  <p className="text-3xl font-bold line-through text-muted-foreground" data-testid="text-total-value">$6,491</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-muted-foreground text-sm">Today's Price</p>
                  <p className="text-5xl font-bold text-primary" data-testid="text-todays-price">$97</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full" asChild data-testid="button-value-cta">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Get Instant Access Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2" data-testid="text-guarantee">
              <Shield className="w-4 h-4 text-primary" />
              30-Day Money-Back Guarantee
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I started selling the Notion templates from PLR Digital Club and made my first $1k in just 3 days. The quality is unmatched.",
      name: "Sarah Jenkins",
      role: "Digital Entrepreneur",
      earnings: "$12,430 this month",
      avatar: "SJ",
      highlight: "Made $1k in 3 days",
    },
    {
      quote: "The best investment I've made. No more spending weeks creating products. I just download, customize, and sell.",
      name: "Michael Chen",
      role: "Side Hustler",
      earnings: "$4,500 this month",
      avatar: "MC",
      highlight: "Quit my 9-5 job",
    },
    {
      quote: "Finally, PLR content that doesn't look like it was made in 1999. The designs are modern and actually convert.",
      name: "Jessica Williams",
      role: "Content Creator",
      earnings: "$890 this week",
      avatar: "JW",
      highlight: "10x my content output",
    },
  ];

  return (
    <section className="py-12 md:py-20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2 fill-primary text-primary" />
            Verified Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            Real Results from Real People
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already building their digital product empires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 relative overflow-visible"
              data-testid={`card-testimonial-${index}`}
            >
              <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                {testimonial.highlight}
              </Badge>
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6" data-testid={`text-testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Recent Earnings</p>
                <p className="text-lg font-bold text-primary" data-testid={`text-testimonial-earnings-${index}`}>
                  {testimonial.earnings}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-card border border-border rounded-lg"
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left font-semibold"
        data-testid={`faq-trigger-${index}`}
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className="overflow-hidden transition-all duration-200"
        style={{ 
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden'
        }}
      >
        <div 
          className="px-6 pb-6 text-muted-foreground"
          data-testid={`faq-content-${index}`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Is this legal?",
      answer: "Absolutely! PLR (Private Label Rights) and MRR (Master Resell Rights) are legitimate licenses that allow you to rebrand and resell digital products. You're essentially purchasing the rights to use these products as your own.",
    },
    {
      question: "Can I really resell these?",
      answer: "Yes! That's the entire point. With MRR, you can sell these products and keep 100% of the profit. With PLR, you can also modify, rebrand, and even claim authorship of the products.",
    },
    {
      question: "Do I need experience?",
      answer: "No experience needed! Our products come ready to sell. We provide the files, sales copy, and even marketing materials. If you can upload a file and set a price, you can make money.",
    },
    {
      question: "Is this a subscription?",
      answer: "No, this is a one-time payment of $97 for lifetime access. No monthly fees, no hidden charges. Pay once and access everything forever, including all future updates.",
    },
    {
      question: "How fast can I start?",
      answer: "Immediately! After purchase, you get instant access to download all products. You could have your first product listed for sale within an hour of joining.",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-20 bg-muted/30" data-testid="section-faq">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-faq-subtitle">
            Everything you need to know about the PLR Digital Club.
          </p>
        </div>

        <div className="space-y-4" data-testid="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden" data-testid="section-final-cta">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6" data-testid="text-final-headline">
            Ready to Start Earning?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto" data-testid="text-final-subheadline">
            Join 5,000+ entrepreneurs who are already selling digital products and keeping 100% of the profits.
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-8">
            <span className="line-through text-muted-foreground">$497</span>{" "}
            <span className="text-primary">$97</span>{" "}
            <span className="text-sm font-normal text-muted-foreground">one-time payment</span>
          </p>
          
          <Button size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/25" asChild data-testid="button-final-cta">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Get Instant Access Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-muted-foreground text-sm">
            <div className="flex items-center gap-2" data-testid="final-trust-guarantee">
              <Shield className="w-4 h-4 text-primary" />
              <span>30-Day Money-Back Guarantee</span>
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
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-semibold mb-1" data-testid="text-footer-brand">PLR Digital Club</p>
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2025 PLR Digital Club. All rights reserved.
            </p>
          </div>
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
      <Header />
      <HeroSection />
      <StatsSection />
      <TrustSection />
      <HowItWorksSection />
      <ProductsSection />
      <UpdatesSection />
      <ValueSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
