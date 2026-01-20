import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mb-8 text-xl text-primary-foreground">
              How MailPackr collects, uses, and protects data while providing
              email marketing and campaign delivery services.
            </p>
            <div className="flex items-center justify-center text-primary-foreground">
              <Clock className="mr-2 h-5 w-5" />
              <span>Effective Date: 30/08/2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {/* <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-border bg-background p-8 shadow-lg md:p-12">
          <div className="prose max-w-none prose-gray">
            <div className="mb-12 flex justify-end">
              <Button variant="outline" asChild size="sm">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Intro */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <CheckCircle className="mr-3 h-8 w-8" />
                Introduction
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                MailPackr (“we”, “our”, “us”) operates an email marketing and
                campaign delivery platform available at mailpackr.com (the
                “Service”). This Privacy Policy explains how we collect, use,
                disclose, and protect personal data when you use the Service.
              </p>
              <p className="mt-4 text-muted-foreground">
                By using MailPackr, you agree to the practices described in this
                policy.
              </p>
            </section> */}

      {/* Scope */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <Globe className="mr-3 h-8 w-8" />
                Who This Policy Applies To
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Website visitors</li>
                <li>• Registered users and customers</li>
                <li>
                  • Individuals whose data is processed in customer campaigns
                  (“Recipients”)
                </li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                For account data, MailPackr is the{" "}
                <strong>Data Controller</strong>. For recipient data uploaded by
                customers, MailPackr is the <strong>Data Processor</strong> and
                the customer is the Data Controller.
              </p>

              <p className="mt-2 text-muted-foreground">
                Customers are responsible for ensuring they have lawful
                permission to collect and contact recipients.
              </p>
            </section> */}

      {/* Data Collected */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <CheckCircle className="mr-3 h-8 w-8" />
                Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                Account Information
              </h3>
              <p className="text-muted-foreground">
                Name, email address, password (hashed), company name (optional),
                and support communications.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">
                Campaign Data
              </h3>
              <p className="text-muted-foreground">
                Recipient email addresses, email content, templates, delivery
                status, bounce data, and timestamps.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">
                Technical Data
              </h3>
              <p className="text-muted-foreground">
                IP address, browser type, operating system, logs, and API usage
                metrics for security and performance.
              </p>

              <h3 className="mt-6 mb-3 text-xl font-semibold text-foreground">
                Billing Data
              </h3>
              <p className="text-muted-foreground">
                Payment status, subscription plan, and transaction references
                from third-party payment providers. We do not store card
                details.
              </p>
            </section> */}

      {/* Usage */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <CheckCircle className="mr-3 h-8 w-8" />
                How We Use Information
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Operate and maintain the Service</li>
                <li>• Deliver campaigns and analytics</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Provide customer support</li>
                <li>• Improve reliability and performance</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section> */}

      {/* Storage & Security */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <Shield className="mr-3 h-8 w-8" />
                Data Storage and Security
              </h2>
              <p className="text-muted-foreground">
                Data is hosted using cloud service providers and may be
                processed in multiple regions including the United States and
                other locations where our providers operate.
              </p>
              <p className="mt-3 text-muted-foreground">
                We use encryption, access controls, monitoring, and regular
                security updates to protect data.
              </p>
            </section> */}

      {/* Rights */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <CheckCircle className="mr-3 h-8 w-8" />
                Your Rights
              </h2>
              <p className="text-muted-foreground">
                Depending on your location, you may request access, correction,
                deletion, or restriction of your personal data by contacting
                support@mailpackr.com.
              </p>
              <p className="mt-3 text-muted-foreground">
                Recipients should contact the sender of the email directly, as
                MailPackr processes recipient data on behalf of customers.
              </p>
            </section> */}

      {/* Breach */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <Shield className="mr-3 h-8 w-8" />
                Data Breach Response
              </h2>
              <p className="text-muted-foreground">
                In case of a data breach, we will investigate, contain the
                incident, and notify affected parties where required by law.
              </p>
            </section> */}

      {/* Updates */}
      {/* <section className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-foreground">
                <Clock className="mr-3 h-8 w-8" />
                Policy Updates
              </h2>
              <p className="text-muted-foreground">
                We may update this policy from time to time. Continued use of
                the Service after updates means acceptance of the revised
                policy.
              </p>
            </section> */}

      {/* Contact */}
      {/* <section className="rounded-2xl bg-primary p-8 text-primary-foreground">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy or your data,
                contact us at:
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>support@mailpackr.com</span>
              </div>
            </section> */}
      {/* </div>
        </div>
      </main> */}

      <main className="container mx-auto max-w-4xl px-4 py-16">
        {/* <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>

        <p className="mb-8 text-sm text-muted-foreground">
          Effective Date: 30/08/2025
        </p> */}
        <div className="mb-12 flex items-center justify-between">
          <Button variant="outline" asChild size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-background p-8 shadow-lg md:p-12">
          <p className="mb-4">
            MailPackr (“we”, “our”, “us”) operates an email marketing and
            campaign delivery platform available at{" "}
            <a
              href="https://mailpackr.com"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mailpackr.com
            </a>{" "}
            (the “Service”). This Privacy Policy explains how we collect, use,
            disclose, and protect personal data when you use our Service.
          </p>

          <p className="mb-8">
            By using MailPackr, you agree to the practices described in this
            policy.
          </p>

          {/* 1 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              1. Who This Policy Applies To
            </h2>

            <ul className="mb-4 list-disc pl-6 space-y-1">
              <li>Visitors of our website</li>
              <li>Registered users and customers of MailPackr</li>
              <li>
                Individuals whose personal data is processed through customer
                email campaigns (“Recipients”)
              </li>
            </ul>

            <p className="mb-2">
              MailPackr acts in different legal roles depending on the data:
            </p>

            <ul className="mb-4 list-disc pl-6 space-y-1">
              <li>
                For customer account data, MailPackr is the{" "}
                <strong>Data Controller</strong>
              </li>
              <li>
                For recipient data uploaded by customers, MailPackr is the{" "}
                <strong>Data Processor</strong>, and the customer is the Data
                Controller
              </li>
            </ul>

            <p>
              Customers are responsible for ensuring they have lawful permission
              to collect and contact recipients.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              2. Information We Collect
            </h2>

            <h3 className="mt-4 mb-2 font-semibold">
              A. Information You Provide to Us
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Password (stored in encrypted or hashed form)</li>
              <li>Company or organization name (optional)</li>
              <li>Support communications</li>
            </ul>

            <h3 className="mt-4 mb-2 font-semibold">
              B. Campaign and Messaging Data (Provided by Customers)
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Recipient email addresses</li>
              <li>Email content and templates</li>
              <li>Campaign metadata (delivery status, bounces, timestamps)</li>
            </ul>
            <p className="mb-4">
              This data is processed only to provide email delivery and
              analytics services.
            </p>

            <h3 className="mt-4 mb-2 font-semibold">
              C. Technical and Usage Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device and operating system</li>
              <li>Log files and timestamps</li>
              <li>API usage metrics</li>
            </ul>

            <h3 className="mt-4 mb-2 font-semibold">D. Billing Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payment status</li>
              <li>Subscription plan</li>
              <li>Invoices and transaction references</li>
            </ul>
            <p className="mt-2">
              We do not store full credit card details on our servers.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              3. How We Use Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and operate the Service</li>
              <li>Deliver email campaigns and analytics</li>
              <li>Authenticate users and prevent fraud</li>
              <li>Provide customer support</li>
              <li>Improve platform reliability and performance</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-2 font-medium">We do not sell personal data.</p>
          </section>

          {/* 4 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              4. Lawful Basis for Processing
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performance of a contract (providing the Service)</li>
              <li>
                Legitimate interests (security, fraud prevention, monitoring)
              </li>
              <li>Legal obligations</li>
              <li>Consent, where applicable</li>
            </ul>
            <p className="mt-2">
              Customers are responsible for ensuring lawful processing of
              recipient data.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              5. Data Storage and International Transfers
            </h2>
            <p>
              Data may be processed in multiple geographic regions, including
              the United States and other locations where our providers operate.
              We rely on contractual safeguards and industry-standard
              protections.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">6. Data Security</h2>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Encryption in transit and at rest</li>
              <li>Access controls and role-based permissions</li>
              <li>Network monitoring and logging</li>
              <li>Regular system updates and patching</li>
            </ul>
            <p>
              No system is 100% secure, but we continuously improve safeguards.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">7. Data Retention</h2>
            <p>
              Data is retained only as long as necessary for service operation
              and legal obligations. Customers may delete campaigns and contact
              lists at any time.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">8. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Access</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Restriction or objection</li>
              <li>Data portability</li>
            </ul>
            <p>
              Requests: <strong>support@mailpackr.com</strong>
            </p>
            <p className="mt-2">
              Recipients should contact the sender directly.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              9. U.S. Privacy Rights (Including California)
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to know</li>
              <li>Right to delete</li>
              <li>Right to correct</li>
              <li>Right to non-discrimination</li>
            </ul>
            <p className="mt-2">
              Requests: <strong>support@mailpackr.com</strong>
            </p>
          </section>

          {/* 10 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              10. Children’s Privacy
            </h2>
            <p>
              MailPackr is not intended for children under 13. Any discovered
              data will be deleted promptly.
            </p>
          </section>

          {/* 11 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              11. Third-Party Services
            </h2>
            <p>
              We use third-party providers for infrastructure, email delivery,
              analytics, and billing under strict contractual obligations.
            </p>
          </section>

          {/* 12 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">
              12. Data Breach Response
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Investigate and contain incidents</li>
              <li>Notify where legally required</li>
              <li>Prevent recurrence</li>
            </ul>
          </section>

          {/* 13 */}
          <section className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">13. Policy Updates</h2>
            <p>
              Updates will be posted on this page. Continued use means
              acceptance of changes.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              14. Contact Information
            </h2>
            <p>
              Email: <strong>support@mailpackr.com</strong>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://mailpackr.com"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mailpackr.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
