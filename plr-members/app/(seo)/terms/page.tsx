import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'PLR Digital Club Terms and Conditions governing your use of our website and services, including licensing, acceptable use, and your rights and obligations.',
  alternates: { canonical: 'https://plrdigitalclub.com/terms' },
  openGraph: {
    title: 'Terms and Conditions | PLR Digital Club',
    description: 'The terms governing your use of PLR Digital Club’s website and services.',
    url: 'https://plrdigitalclub.com/terms',
  },
  twitter: {
    title: 'Terms and Conditions | PLR Digital Club',
    description: 'The terms governing your use of PLR Digital Club’s website and services.',
  },
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Terms and Conditions', url: 'https://plrdigitalclub.com/terms' },
      ]} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A4E] mb-2">Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">for PLR Digital Club</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <p className="text-gray-500"><strong>Effective Date:</strong> 01/01/2023</p>

          <p>
            Welcome to PLR Digital Club! These Terms and Conditions govern your use of our website and services. By accessing or using our website and services, you agree to comply with and be bound by these terms. Please read them carefully before proceeding.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using our website and services, you agree to these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Use of Services</h2>
            <p>
              You may use our services solely for your personal, non-commercial purposes. You agree not to use our services for any unlawful or prohibited purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Intellectual Property</h2>
            <p>
              All content on our website, including but not limited to text, images, graphics, logos, and software, is protected by intellectual property laws and is the property of PLR Digital Club or its licensors. You may not reproduce, distribute, modify, or create derivative works based on our content without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">User Accounts</h2>
            <p>
              You may be required to create a user account to access certain features of our website or services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Content Submission</h2>
            <p>
              If you submit any content to our website, including reviews, comments, or feedback, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, distribute, and display that content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Privacy Policy</h2>
            <p>
              Your use of our services is also governed by our{' '}
              <Link href="/privacy" className="text-[#1565C0] hover:underline">Privacy Policy</Link>. By using our services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Prohibited Activities</h2>
            <p className="mb-3">You agree not to engage in any of the following activities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violating any applicable laws or regulations.</li>
              <li>Impersonating others or providing false information.</li>
              <li>Interfering with or disrupting our services.</li>
              <li>Uploading viruses, malware, or any other harmful code.</li>
              <li>Unauthorized access to our systems or attempting to bypass security measures.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not make any warranties, whether express or implied, regarding the accuracy, reliability, or availability of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, PLR Digital Club and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Indemnification</h2>
            <p>
              You agree to indemnify and hold PLR Digital Club, its affiliates, and their respective officers, directors, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses arising out of your use of our services or your violation of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for any reason or no reason at all.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Delaware, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. Any changes will be posted on our website, and your continued use of our services after such changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:support@plrdigitalclub.com" className="text-[#1565C0] hover:underline">support@plrdigitalclub.com</a>
            </p>
          </section>

          <p>By using PLR Digital Club&apos;s website and services, you agree to these Terms and Conditions.</p>
          <p className="text-gray-500 text-sm"><strong>Last updated:</strong> 07/15/2023</p>
        </div>
      </article>
    </>
  )
}
