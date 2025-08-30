import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Scale, Shield, Users, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Legal Documents
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground mb-8">
              Clear, straightforward terms that protect both you and MailPackr.
              No legal jargon, just honest policies.
            </p>
            <div className="text-sm text-primary-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {/* Quick Summary */}
          <div className="bg-secondary border border-border rounded-lg p-6 mb-12">
            <h2 className="flex items-center text-xl font-semibold text-foreground mb-4">
              <AlertCircle className="w-5 h-5 mr-2" />
              Quick Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-0">
              By using MailPackr, you agree to use our service responsibly,
              respect other users, follow email sending best practices, and
              comply with applicable laws. We provide the service &ldquo;as
              is&rdquo; and aren&apos;t liable for indirect damages. Simple as
              that.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-foreground" />
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              By accessing and using MailPackr (&ldquo;the Service&rdquo;), you
              accept and agree to be bound by these terms and conditions. If you
              don&apos;t agree with any part of these terms, you may not use our
              service.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              These terms apply to all visitors, users, and others who access or
              use the service, whether you&apos;re using our free plan or a paid
              subscription.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-foreground" />
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              MailPackr provides email sending services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-lg mb-4">
              <li>Email campaign creation and management</li>
              <li>Contact list management and segmentation</li>
              <li>Email template design and customization</li>
              <li>Analytics and reporting tools</li>
              {/* <li>Automation workflows and triggers</li>
              <li>API access and integrations</li> */}
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We reserve the right to modify, suspend, or discontinue any part
              of the service at any time. We&apos;ll provide reasonable notice
              when possible, but some changes may be implemented immediately for
              security or legal reasons.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              3. Your Account
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Account Security
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-0">
                You&apos;re responsible for maintaining the security of your
                account and password. MailPackr cannot and will not be liable
                for any loss or damage from your failure to comply with this
                security obligation.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              You must provide accurate and complete information when creating
              your account. You&apos;re responsible for all activities that
              occur under your account.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              You may not use another person&apos;s account without permission,
              create false identities, or provide false information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              4. Acceptable Guidelines
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                What We Require
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Explicit Permission Only:</strong> Send email only to
                  individuals who have explicitly requested it
                </li>
                <li>
                  <strong>Proper List Management:</strong> Maintain clean,
                  verified email lists with documented consent
                </li>
                <li>
                  <strong>Bounce & Complaint Handling:</strong> Promptly process
                  bounce and complaint notifications
                </li>
                <li>
                  <strong>Unsubscribe Compliance:</strong> Honor unsubscribe
                  requests immediately
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Follow GDPR, CAN-SPAM, and
                  other applicable regulations
                </li>
                <li>
                  <strong>Identity Verification:</strong> Verify all
                  &quot;From&quot; addresses and sender domains
                </li>
              </ul>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Prohibited Uses
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You may not use MailPackr for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Sending spam or unsolicited bulk emails</li>
                <li>Illegal activities or content</li>
                <li>Harassment, abuse, or harmful content</li>
                <li>Phishing or fraudulent activities</li>
                <li>Violating others&apos; intellectual property rights</li>
                <li>Bypassing rate limits or service restrictions</li>
                <li>Selling or redistributing the service</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              5. Payment and Billing
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Our free plan is free forever with the features and limits
              described on our pricing page. Paid plans are billed monthly or
              annually in advance.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              For pay-per-send plans, you&apos;ll be charged based on actual
              usage with a minimum monthly charge as specified on our pricing
              page.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              All fees are non-refundable except where required by law. You can
              cancel your subscription at any time from your account dashboard.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              6. Email Sending Compliance
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AWS SES Compliance Requirements
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MailPackr utilizes Amazon SES (Simple Email Service) for
                reliable email delivery. By using our service, you agree to
                comply with all AWS SES requirements, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Explicit Permission:</strong> Send emails only to
                  recipients who have explicitly requested them
                </li>
                <li>
                  <strong>Bounce & Complaint Handling:</strong> Maintain proper
                  bounce and complaint handling processes
                </li>
                <li>
                  <strong>Identity Verification:</strong> Verify all sender
                  email addresses and domains
                </li>
                <li>
                  <strong>Email Authentication:</strong> Follow SPF, DKIM, and
                  DMARC best practices
                </li>
                <li>
                  <strong>Sender Reputation:</strong> Monitor and maintain good
                  sender reputation metrics
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">
              Supported Email Types
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-border p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">
                  Marketing Emails
                </h4>
                <p className="text-muted-foreground text-sm">
                  Newsletters, promotional campaigns, product announcements with
                  explicit opt-in consent
                </p>
              </div>
              <div className="border border-border p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">
                  Transactional Emails
                </h4>
                <p className="text-muted-foreground text-sm">
                  Order confirmations, password resets, account notifications,
                  and service communications
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              7. Privacy and Data
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              We take your privacy seriously. Please review our{" "}
              <Link
                href="/privacy"
                className="text-primary hover:text-muted-foreground underline"
              >
                Privacy Policy
              </Link>{" "}
              to understand how we collect, use, and protect your information.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              You retain ownership of your content and subscriber data. We
              won&apos;t sell, rent, or share your data with third parties
              except as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              MailPackr provides the service &ldquo;as is&rdquo; without
              warranties of any kind. We strive for 99.9% uptime but can&apos;t
              guarantee uninterrupted service.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To the maximum extent permitted by law, MailPackr shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or business
              opportunities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              9. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              We may update these terms from time to time. We&apos;ll notify you
              of significant changes via email or through our service.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Your continued use of the service after changes become effective
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              10. Contact Us
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Questions about these terms? We&apos;re here to help:
              </p>
              <div className="space-y-2 text-muted-foreground">
                {/* <p><strong>Email:</strong> legal@mailpackr.com</p> */}
                <p>
                  <strong>Support:</strong> support@mailpackr.com
                </p>
                <p>
                  <strong>Contact Page:</strong>{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-foreground"
                  >
                    Get in touch
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="border-t border-border pt-8 mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              <p>
                Also see our{" "}
                <Link
                  href="/privacy"
                  className="text-primary hover:text-muted-foreground underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}