import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'PLR Digital Club Privacy Policy — how we collect, use, and protect your personal information, and your rights and choices regarding your data.',
  alternates: { canonical: 'https://plrdigitalclub.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | PLR Digital Club',
    description: 'How PLR Digital Club collects, uses, and protects your personal information.',
    url: 'https://plrdigitalclub.com/privacy',
  },
  twitter: {
    title: 'Privacy Policy | PLR Digital Club',
    description: 'How PLR Digital Club collects, uses, and protects your personal information.',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Privacy Policy', url: 'https://plrdigitalclub.com/privacy' },
      ]} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A4E] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">for PLR Digital Club</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <p className="text-gray-500"><strong>Effective Date:</strong> 01/01/2023</p>

          <p>
            At PLR Digital Club, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of data we collect, how we use and protect that data, and your rights and choices regarding your information. By using our website or services, you consent to the practices described in this policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect various types of information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> such as your name, email address, and contact details.</li>
              <li><strong>Payment Information:</strong> when you make a purchase, we collect payment details to process transactions securely.</li>
              <li><strong>Usage Information:</strong> including data about how you interact with our website and services.</li>
              <li><strong>Communication Information:</strong> such as correspondence, feedback, or support requests you provide to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use your information for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Providing Services:</strong> to deliver the products, services, or information you request.</li>
              <li><strong>Personalization:</strong> to tailor your experience and improve our offerings.</li>
              <li><strong>Communication:</strong> to send you updates, newsletters, or important notices.</li>
              <li><strong>Transactions:</strong> to process payments and fulfill orders.</li>
              <li><strong>Analytics:</strong> to understand user behavior and improve our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Data Sharing</h2>
            <p className="mb-3">We do not sell, rent, or trade your personal information to third parties. However, we may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> trusted partners who assist us in operating our business.</li>
              <li><strong>Legal Compliance:</strong> when required by law, we may disclose information to comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, loss, or alteration. However, no method of transmission or electronic storage is entirely secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can opt out of receiving marketing communications from us by using the unsubscribe link in our emails.</li>
              <li>You can update or correct your personal information by contacting us.</li>
              <li>You can request the deletion of your account or personal data, subject to legal requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can adjust your browser settings to control cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes through our website or other communication methods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1A1A4E] mb-3">Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding your privacy, you can contact us at{' '}
              <a href="mailto:support@plrdigitalclub.com" className="text-[#1565C0] hover:underline">support@plrdigitalclub.com</a>
            </p>
          </section>

          <p>By using PLR Digital Club&apos;s website and services, you agree to the terms of this Privacy Policy.</p>
          <p className="text-gray-500 text-sm"><strong>Last updated:</strong> 07/15/2023</p>

          <p className="text-sm">
            See also our <Link href="/terms" className="text-[#1565C0] hover:underline">Terms and Conditions</Link>.
          </p>
        </div>
      </article>
    </>
  )
}
