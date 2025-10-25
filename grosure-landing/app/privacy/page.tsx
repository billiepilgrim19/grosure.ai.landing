import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - grosure',
  description: 'Privacy Policy for grosure - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-secondary mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
              <p className="text-secondary leading-relaxed">
                grosure ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you
                use our mobile application and services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-primary mb-3">Personal Information:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-6">
                <li>Email address (for account creation and authentication)</li>
                <li>Full name</li>
                <li>Profile picture (optional)</li>
                <li>User preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">Usage Data:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-6">
                <li>Pantry items and inventory data</li>
                <li>Shopping lists and items</li>
                <li>Recipes saved and created</li>
                <li>Meal plans and preferences</li>
                <li>Chat conversations with AI assistant</li>
                <li>App usage analytics and performance data</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">Device Information:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-6">
                <li>Device type and operating system</li>
                <li>Unique device identifiers</li>
                <li>Mobile network information</li>
                <li>App version and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">AI Interaction Data:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Conversation history with AI assistant</li>
                <li>Queries and commands</li>
                <li>Dietary preferences and restrictions</li>
                <li>Ingredient and recipe interactions</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-secondary mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Provide and maintain our services</li>
                <li>Authenticate and secure your account</li>
                <li>Personalize your experience and AI responses</li>
                <li>Generate intelligent recommendations for recipes and meal plans</li>
                <li>Send notifications about expiring items and meal plans</li>
                <li>Improve our AI algorithms and app functionality</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Communicate important updates and changes</li>
                <li>Provide customer support</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Storage and Security</h2>

              <h3 className="text-xl font-semibold text-primary mb-3">Local Storage:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-6">
                <li>Primary data is stored locally on your device using encrypted SQLite database</li>
                <li>Offline-first architecture ensures data availability</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">Cloud Storage:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-6">
                <li>User authentication managed through Supabase (secure backend service)</li>
                <li>Optional cloud sync for backup and multi-device access</li>
                <li>Data encrypted in transit using HTTPS/TLS</li>
                <li>Data encrypted at rest using industry-standard encryption</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">Security Measures:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Secure authentication with password hashing</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication tokens</li>
                <li>Secure API communications</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-secondary mb-4 font-semibold">
                We do NOT sell your personal information. We may share data only in these circumstances:
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">Service Providers:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-6">
                <li>Supabase (authentication and backend services)</li>
                <li>Cloud infrastructure providers</li>
                <li>AI processing services (for chat functionality)</li>
                <li>Analytics providers (anonymized data only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">Legal Requirements:</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>When required by law or legal process</li>
                <li>To protect rights, property, or safety</li>
                <li>To enforce our terms of service</li>
                <li>In case of business transfer or acquisition</li>
              </ul>
            </section>

            {/* Your Data Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Your Data Rights</h2>
              <p className="text-secondary mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data (see{' '}
                  <Link href="/delete-account" className="text-accent hover:underline">
                    Account Deletion page
                  </Link>)
                </li>
                <li><strong>Portability:</strong> Export your data in machine-readable format</li>
                <li><strong>Opt-out:</strong> Disable certain data collection features</li>
                <li><strong>Withdraw Consent:</strong> Stop using certain features at any time</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Active account data: Retained while your account is active</li>
                <li>Deleted account data: Permanently deleted within 30 days of deletion request</li>
                <li>Backup data: Removed from backups within 90 days</li>
                <li>Legal retention: Some data may be retained longer if required by law</li>
                <li>Anonymous analytics: May be retained indefinitely in aggregated form</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Children's Privacy</h2>
              <p className="text-secondary">
                grosure is not intended for users under 13 years of age. We do not knowingly collect
                personal information from children under 13. If we discover such data, we will delete it
                immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">9. International Data Transfers</h2>
              <p className="text-secondary">
                Your data may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place for such transfers.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Third-Party Services</h2>
              <p className="text-secondary mb-4">Our app uses third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
                <li><strong>Supabase:</strong> Authentication and backend (Privacy Policy:{' '}
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    https://supabase.com/privacy
                  </a>)
                </li>
                <li><strong>Google Fonts:</strong> Typography services</li>
                <li><strong>Cloud Storage Providers:</strong> For backups and sync</li>
              </ul>
              <p className="text-secondary">
                These services have their own privacy policies, and we recommend reviewing them.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">11. Cookies and Tracking</h2>
              <p className="text-secondary">
                Our mobile app does not use browser cookies. We use local storage for app functionality
                and may use analytics SDKs to improve our service.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">12. Changes to Privacy Policy</h2>
              <p className="text-secondary mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes via:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
                <li>In-app notification</li>
                <li>Email notification (if applicable)</li>
                <li>Updated "Last Modified" date</li>
              </ul>
              <p className="text-secondary">
                Continued use after changes constitutes acceptance.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">13. Contact Information</h2>
              <p className="text-secondary mb-4">For privacy-related questions or concerns:</p>
              <ul className="space-y-2 text-secondary">
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:privacy@grosure.ai" className="text-accent hover:underline">
                    privacy@grosure.ai
                  </a>
                </li>
                <li><strong>Website:</strong> www.grosure.ai</li>
              </ul>
            </section>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-accent hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
