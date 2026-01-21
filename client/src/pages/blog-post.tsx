import { Link, useParams } from "wouter";
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight, Share2, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import logoImage from "@assets/PLR_Digital_Club_Logo_(3)_1768953394261.png";
import { useEffect } from "react";

import blogImage1 from "@assets/generated_images/plr_products_beginner_guide.png";
import blogImage2 from "@assets/generated_images/master_resell_rights_profits.png";
import blogImage3 from "@assets/generated_images/passive_income_digital_products.png";
import blogImage4 from "@assets/generated_images/digital_product_niches_overview.png";
import blogImage5 from "@assets/generated_images/online_business_startup_launch.png";
import blogImage6 from "@assets/generated_images/digital_marketing_tips_visual.png";

const blogImages: Record<string, string> = {
  "what-are-plr-products-beginners-guide": blogImage1,
  "master-resell-rights-explained-keep-100-percent-profits": blogImage2,
  "5-ways-passive-income-digital-products-2026": blogImage3,
  "best-niches-selling-digital-products-online": blogImage4,
  "start-online-business-ready-made-digital-products": blogImage5,
  "digital-product-marketing-tips-beginners": blogImage6,
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | PLR Digital Club Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.metaDescription);
      }
      
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', `${post.title} | PLR Digital Club Blog`);
      
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', post.metaDescription);
      
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', window.location.href);
      
      const postImage = blogImages[slug];
      if (postImage) {
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
          ogImage = document.createElement('meta');
          ogImage.setAttribute('property', 'og:image');
          document.head.appendChild(ogImage);
        }
        ogImage.setAttribute('content', window.location.origin + postImage);
      }
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button data-testid="button-back-to-blog">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
  const postImage = blogImages[slug] || blogImage1;

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
                data-testid="img-post-logo"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/blog">
                <Button variant="ghost" data-testid="link-back-blog">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Blog
                </Button>
              </Link>
              <a href="https://plrdigitalclub.com/checkout-page">
                <Button data-testid="button-post-cta">
                  Get Access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" data-testid="nav-breadcrumb">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <Badge className="mb-4" data-testid="badge-post-category">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="text-post-title">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-10">
              <img 
                src={postImage} 
                alt={post.title}
                className="w-full h-auto object-cover"
                data-testid="img-post-featured"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-10"
              data-testid="content-post-body"
            >
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (paragraph.includes('**')) {
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i} className="text-foreground font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                }
                return (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 py-6 border-y mb-10">
              <Tag className="w-5 h-5 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" data-testid={`badge-tag-${tag}`}>
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center justify-between mb-16">
              <p className="text-muted-foreground">Found this helpful? Share it with others!</p>
              <Button variant="outline" className="gap-2" data-testid="button-share">
                <Share2 className="w-4 h-4" /> Share
              </Button>
            </div>

            {/* CTA Card */}
            <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 mb-16" data-testid="card-post-cta">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Digital Product Business?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Get instant access to 1,000+ PLR & MRR products with full resell rights. One payment, lifetime access.
                </p>
                <a href="https://plrdigitalclub.com/checkout-page">
                  <Button size="lg" data-testid="button-post-cta-main">
                    Get Lifetime Access - $97 <ChevronRight className="ml-2" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Related Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-8" data-testid="text-related-title">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card 
                      className="overflow-hidden hover-elevate cursor-pointer group h-full"
                      data-testid={`card-related-${index}`}
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <img 
                          src={blogImages[relatedPost.slug] || blogImage1}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground mb-2">{relatedPost.date}</p>
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p data-testid="text-post-footer-copyright">© 2026 PLR Digital Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
