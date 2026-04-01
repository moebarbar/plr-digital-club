import { Link } from "wouter";
import { Calendar, Clock, Tag, ArrowRight, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogPosts";
import logoImage from "@assets/PLR_Digital_Club_Logo_(3)_1768953394261.png";
import { useEffect } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

import blogImage1 from "@assets/generated_images/plr_reselling_guide_2026_1775017443408.png";
import blogImage2 from "@assets/generated_images/digital_niches_booming_1775017457894.png";
import blogImage3 from "@assets/generated_images/mrr_vs_plr_profits_1775017470264.png";
import blogImage4 from "@assets/generated_images/passive_income_stream_zero_experience_1775017496008.png";
import blogImage5 from "@assets/generated_images/rebranding_digital_products_profit_secret_1775017507781.png";
import blogImage6 from "@assets/generated_images/digital_product_seller_tools_2026_1775017522114.png";
import blogImage7 from "@assets/generated_images/notion_templates_perfect_product_1775017548435.png";
import blogImage8 from "@assets/generated_images/etsy_vs_own_website_selling_1775017561242.png";
import blogImage9 from "@assets/generated_images/launch_online_course_plr_1775017574442.png";
import blogImage10 from "@assets/generated_images/psychology_pricing_digital_products_1775017588569.png";

const blogImages = [blogImage1, blogImage2, blogImage3, blogImage4, blogImage5, blogImage6, blogImage7, blogImage8, blogImage9, blogImage10];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog - PLR Digital Club | Digital Products & Passive Income Tips";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore expert articles on PLR products, Master Resell Rights, passive income strategies, and digital product marketing. Learn how to build your online business.");
    }
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Blog - PLR Digital Club | Digital Products & Passive Income Tips');
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Explore expert articles on PLR products, Master Resell Rights, passive income strategies, and digital product marketing.');
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img 
                src={logoImage} 
                alt="PLR Digital Club" 
                className="h-10 cursor-pointer"
                data-testid="img-blog-logo"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" data-testid="link-blog-home">Home</Button>
              </Link>
              <a href="https://members.plrdigitalclub.com">
                <Button data-testid="button-blog-cta">
                  Get Access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <div className="text-center">
            <Badge className="mb-4" data-testid="badge-blog-label">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-blog-title">
            Digital Products & <span className="text-primary">Passive Income</span> Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-subtitle">
            Expert insights on PLR, MRR, and building a profitable online business with digital products.
          </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover-elevate" data-testid="badge-category-all">
              All Posts
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover-elevate"
                data-testid={`badge-category-${index}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card 
                  className="overflow-hidden hover-elevate cursor-pointer group transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                  data-testid={`card-blog-post-${index}`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={blogImages[index]} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      data-testid={`img-blog-post-${index}`}
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 backdrop-blur-sm" data-testid={`badge-post-category-${index}`}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-post-title-${index}`}>
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-3" data-testid={`text-post-excerpt-${index}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-tag-${index}-${tagIndex}`}>
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-blog-cta-title">
            Ready to Start Your Digital Product Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to 1,000+ PLR & MRR products and start building your passive income today.
          </p>
          <a href="https://members.plrdigitalclub.com">
            <Button size="lg" className="text-lg px-8 py-6" data-testid="button-blog-cta-main">
              Get Lifetime Access - $97 <ChevronRight className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p data-testid="text-blog-footer-copyright">© 2026 PLR Digital Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
