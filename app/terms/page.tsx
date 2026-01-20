import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Scale, Shield, Users, AlertCircle, Ban } from "lucide-react"
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
              Clear, straightforward terms for our email deliverability platform.
              Protecting your sender reputation and our network.
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
              By using MailPackr, you agree to use our email warming and deliverability tools
              responsibly. You must own the domains you connect, strictly avoid sending spam,
              and comply with all anti-spam laws (CAN-SPAM, GDPR, etc.). We provide tools to
              help your reputation, but responsible sending is ultimately your responsibility.
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
              platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-foreground" />
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              MailPackr provides email infrastructure and deliverability services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-lg mb-4">
              <li>Automated email warming and reputation management</li>
              <li>Inbox placement testing and analytics</li>
              <li>Blacklist monitoring and alerting</li>
              <li>Email content analysis and optimization suggestions</li>
              <li>SMTP/API email relay services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We reserve the right to modify, suspend, or discontinue any part of the Service
              at any time. We&apos;ll provide reasonable notice when possible, especially for
              changes that impact your active campaigns.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              3. Account & Security
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Account Responsibility
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-0">
                You are responsible for maintaining the security of your
                account credentials and API keys. You are also responsible for all
                email activity that occurs under your account, including activity
                by team members you authorize.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              You must provide accurate information when registering. You verify that
              you own or have explicit permission to use any domain or email address
              you add to the platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              4. Acceptable Use Policy (Anti-Spam)
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                <Ban className="w-5 h-5 mr-2" />
                Zero Tolerance for Spam
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MailPackr prohibits the use of our service for sending unsolicited
                bulk email (spam). You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Consent:</strong> Only email recipients who have opted in or
                  with whom you have a prior business relationship.
                </li>
                <li>
                  <strong>Compliance:</strong> Strictly adhere to CAN-SPAM Act, GDPR,
                  CASL, and other applicable regional regulations.
                </li>
                <li>
                  <strong>Content:</strong> Not send prohibited content (illegal goods,
                  scams, malware, phishing, hate speech).
                </li>
                <li>
                  <strong>Opt-Out:</strong> Include a functional unsubscribe link in
                  marketing emails and process requests promptly.
                </li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Violation of this policy will result in immediate account suspension
              without refund. We monitor sending patterns and abuse reports to maintain
              network integrity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              5. Payment and Billing
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Services are billed on a subscription basis (monthly or annually) or
              via usage-based credits. Payments are non-refundable except where
              required by law or specified in a service-level agreement.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              You may cancel your subscription at any time. Access continues until
              the end of the current billing period.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              6. Data Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              We respect your data. We do not sell your recipient lists or email
              content. We process data solely to provide the deliverability service
              and generate analytics. Please review our{" "}
              <Link
                href="/privacy"
                className="text-primary hover:text-muted-foreground underline"
              >
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              While we strive to improve your email deliverability, many factors
              depend on third-party mail providers (Google, Microsoft, Yahoo, etc.).
              We cannot guarantee 100% inbox placement or specific open rates.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To the maximum extent permitted by law, MailPackr is not liable for
              indirect damages, lost profits, or business interruption arising from
              the use or inability to use the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              9. Contact Us
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Questions about these terms? We&apos;re here to help:
              </p>
              <div className="space-y-2 text-muted-foreground">
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