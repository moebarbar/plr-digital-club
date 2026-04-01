import { Link, useParams } from "wouter";
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight, Share2, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import logoImage from "@assets/PLR_Digital_Club_Logo_(3)_1768953394261.png";
import { useEffect } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import ReactMarkdown from "react-markdown";

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

const blogImages: Record<string, string> = {
  "reselling-plr-products-2026-guide": blogImage1,
  "5-digital-product-niches-booming": blogImage2,
  "mrr-vs-plr-which-is-profitable": blogImage3,
  "start-passive-income-stream-zero-experience": blogImage4,
  "rebranding-digital-products-maximum-profit": blogImage5,
  "top-10-tools-digital-product-seller-2026": blogImage6,
  "why-notion-templates-perfect-digital-product": blogImage7,
  "etsy-vs-own-website-where-to-sell": blogImage8,
  "launch-first-online-course-using-plr": blogImage9,
  "psychology-pricing-digital-products": blogImage10,
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
              <a href="/checkout">
                <Button data-testid="button-post-cta">
                  Get Access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Article Schema */}
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        author={post.author}
        datePublished={post.date}
        url={`https://plrdigitalclub.com/blog/${slug}`}
      />
      {post.faqs && post.faqs.length > 0 && (
        <FAQSchema faqs={post.faqs} />
      )}

      {/* Article */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb items={[
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]} />

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
                loading="eager"
                data-testid="img-post-featured"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-a:text-primary prose-a:no-underline hover:prose-a:underline mb-10"
              data-testid="content-post-body"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
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
                <a href="/checkout">
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
