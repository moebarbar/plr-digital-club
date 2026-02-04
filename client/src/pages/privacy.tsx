import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-privacy">
      <header className="py-5 md:py-6 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-bold">
                  <span className="text-primary">PLR</span> DIGITAL
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground ml-1 mt-2">CLUB</span>
              </div>
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <nav className="py-3 border-b border-border bg-muted/30" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <ol className="flex items-center gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-foreground font-medium" itemProp="name">Privacy Policy</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">for PLR Digital Club</p>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground" data-testid="text-effective-date">
              <strong>Effective Date:</strong> 01/01/2023
            </p>

            <p>
              At PLR Digital Club, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of data we collect, how we use and protect that data, and your rights and choices regarding your information. By using our website or services, you consent to the practices described in this policy.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect various types of information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> such as your name, email address, and contact details.</li>
                <li><strong>Payment Information:</strong> when you make a purchase, we collect payment details to process transactions securely.</li>
                <li><strong>Usage Information:</strong> including data about how you interact with our website and services.</li>
                <li><strong>Communication Information:</strong> such as correspondence, feedback, or support requests you provide to us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Providing Services:</strong> to deliver the products, services, or information you request.</li>
                <li><strong>Personalization:</strong> to tailor your experience and improve our offerings.</li>
                <li><strong>Communication:</strong> to send you updates, newsletters, or important notices.</li>
                <li><strong>Transactions:</strong> to process payments and fulfill orders.</li>
                <li><strong>Analytics:</strong> to understand user behavior and improve our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Sharing</h2>
              <p className="mb-4">We do not sell, rent, or trade your personal information to third parties. However, we may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> trusted partners who assist us in operating our business.</li>
                <li><strong>Legal Compliance:</strong> when required by law, we may disclose information to comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized access, loss, or alteration. However, no method of transmission or electronic storage is entirely secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can opt out of receiving marketing communications from us by using the unsubscribe link in our emails.</li>
                <li>You can update or correct your personal information by contacting us.</li>
                <li>You can request the deletion of your account or personal data, subject to legal requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can adjust your browser settings to control cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes through our website or other communication methods.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding your privacy, you can contact us at{' '}
                <a href="mailto:support@plrdigitalclub.com" className="text-primary hover:underline">
                  support@plrdigitalclub.com
                </a>
              </p>
            </section>

            <p>
              By using PLR Digital Club's website and services, you agree to the terms of this Privacy Policy.
            </p>

            <p className="text-muted-foreground text-sm">
              <strong>Last updated:</strong> 07/15/2023
            </p>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 PLR Digital Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
