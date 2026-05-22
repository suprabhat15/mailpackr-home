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
              Clear, straightforward terms for our email deliverability
              platform. Protecting your sender reputation and our network.
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
              By using MailPackr, you agree to use our email infrastructure
              responsibly, own or control the domains you connect, strictly
              avoid sending spam, and comply with all applicable laws. We
              provide technical tools only. Legal compliance and recipient
              consent are solely your responsibility.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-foreground" />
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              By accessing and using MailPackr (&ldquo;the Service&rdquo;), you
              agree to be legally bound by these Terms. If you do not agree, you
              must not use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-foreground" />
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              MailPackr provides email sending infrastructure, queueing systems,
              rate limiting, analytics, bounce handling, and related APIs.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-lg mb-4">
              <li>Email campaign delivery</li>
              <li>Delivery monitoring and logs</li>
              <li>Complaint and bounce handling</li>
              <li>API and SMTP interfaces</li>
              <li>Abuse detection and suppression systems</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We may modify or discontinue features at any time without
              liability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              3. Account & Domain Responsibility
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              You are responsible for safeguarding credentials and API keys and
              for all activity under your account. You must own or be authorized
              to use all domains, sending identities, and email lists connected
              to the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              4. Acceptable Use & Anti-Spam Policy
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                <Ban className="w-5 h-5 mr-2" />
                Zero Tolerance for Abuse
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>No purchased, scraped, or rented lists</li>
                <li>Valid recipient consent where required</li>
                <li>No deceptive, illegal, or harmful content</li>
                <li>Functional unsubscribe mechanisms</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              We may immediately suspend accounts and cooperate with hosting
              providers, ISPs, or law enforcement when abuse is detected.
            </p>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Sending Quality Thresholds
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-0">
                To protect the deliverability of the wider network, we
                continuously monitor the health of every account&apos;s traffic.
                If your bounce rate rises above the{" "}
                <strong className="text-foreground">3.5% threshold</strong> and
                your spam-complaint rate exceeds the{" "}
                <strong className="text-foreground">0.1% threshold</strong>,
                MailPackr will suspend your account. Normal sending can resume
                once the
                underlying list-quality issues have been resolved.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              5. Payments and Refunds
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Fees are non-refundable except where required by law. Usage limits
              and quotas may apply based on plan.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              6. Data Roles and Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Customers are data controllers for recipient data. MailPackr acts
              solely as a processor and is not responsible for consent or data
              legality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              7. No Guarantees and Third-Party Dependencies
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Delivery depends on mailbox providers, DNS, reputation systems,
              and network conditions beyond our control. We do not guarantee
              uptime, inbox placement, or delivery rates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              8. Indemnification
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              You agree to indemnify and hold harmless MailPackr from claims,
              fines, damages, or losses arising from your email content, lists,
              campaigns, or legal violations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              9. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              To the maximum extent permitted by law, MailPackr shall not be
              liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              10. Force Majeure
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              We are not liable for service failures caused by events beyond
              reasonable control including cloud outages, legal orders, or
              infrastructure failures.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              These Terms are governed by the laws of India. Courts located in
              your registered business jurisdiction shall have exclusive
              authority over disputes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              12. Contact
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Questions about these terms?
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
