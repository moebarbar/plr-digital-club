import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-terms">
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
              <span className="text-foreground font-medium" itemProp="name">Terms and Conditions</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-terms-title">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground mb-8">for PLR Digital Club</p>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground" data-testid="text-effective-date">
              <strong>Effective Date:</strong> 01/01/2023
            </p>

            <p>
              Welcome to PLR Digital Club! These Terms and Conditions govern your use of our website and services. By accessing or using our website and services, you agree to comply with and be bound by these terms. Please read them carefully before proceeding.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you agree to these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Use of Services</h2>
              <p>
                You may use our services solely for your personal, non-commercial purposes. You agree not to use our services for any unlawful or prohibited purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
              <p>
                All content on our website, including but not limited to text, images, graphics, logos, and software, is protected by intellectual property laws and is the property of PLR Digital Club or its licensors. You may not reproduce, distribute, modify, or create derivative works based on our content without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">User Accounts</h2>
              <p>
                You may be required to create a user account to access certain features of our website or services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Content Submission</h2>
              <p>
                If you submit any content to our website, including reviews, comments, or feedback, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, distribute, and display that content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
              <p>
                Your use of our services is also governed by our{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . By using our services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Prohibited Activities</h2>
              <p className="mb-4">You agree not to engage in any of the following activities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violating any applicable laws or regulations.</li>
                <li>Impersonating others or providing false information.</li>
                <li>Interfering with or disrupting our services.</li>
                <li>Uploading viruses, malware, or any other harmful code.</li>
                <li>Unauthorized access to our systems or attempting to bypass security measures.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p>
                Our services are provided on an "as is" and "as available" basis. We do not make any warranties, whether express or implied, regarding the accuracy, reliability, or availability of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, PLR Digital Club and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold PLR Digital Club, its affiliates, and their respective officers, directors, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses arising out of your use of our services or your violation of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for any reason or no reason at all.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Delaware, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Any changes will be posted on our website, and your continued use of our services after such changes constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
                <a href="mailto:support@plrdigitalclub.com" className="text-primary hover:underline">
                  support@plrdigitalclub.com
                </a>
              </p>
            </section>

            <p>
              By using PLR Digital Club's website and services, you agree to the terms of these Terms and Conditions.
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
