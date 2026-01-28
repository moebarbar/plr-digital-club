import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4" data-testid="nav-breadcrumb">
      <ol 
        className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          className="flex items-center"
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
        >
          <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <link itemProp="item" href="https://plrdigitalclub.com/" />
        </li>
        
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            {item.href ? (
              <>
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  <span itemProp="name">{item.label}</span>
                </Link>
                <link itemProp="item" href={`https://plrdigitalclub.com${item.href}`} />
              </>
            ) : (
              <span className="text-foreground font-medium" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
