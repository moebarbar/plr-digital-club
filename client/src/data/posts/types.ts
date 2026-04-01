export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: string;
  date: string;
  readTime: string;
  metaDescription: string;
  keywords: string[];
  faqs?: { question: string; answer: string }[];
}
