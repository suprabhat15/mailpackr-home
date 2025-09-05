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
              Clear, straightforward terms for our SEO educational platform.
              Protecting both SEO learners and educators with transparent policies.
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
              By using MailPackr, you agree to use our SEO learning platform
              responsibly, respect other learners, follow SEO course guidelines and
              ethical optimization practices, and comply with applicable laws. We
              provide SEO educational content &ldquo;as is&rdquo; and aren&apos;t
              liable for indirect damages. Simple as that.
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
              SEO educational platform.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              These terms apply to all visitors, SEO students, and others who access
              or use the service, whether you&apos;re accessing free SEO resources
              or enrolled in paid SEO courses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-foreground" />
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              MailPackr provides SEO optimization education services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-lg mb-4">
              <li>SEO optimization courses and training programs</li>
              <li>Keyword research and technical SEO education</li>
              <li>Content SEO and link building training</li>
              <li>SEO analytics and performance optimization courses</li>
              <li>SEO certification programs and learning resources</li>
              <li>SEO student progress tracking and support</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We reserve the right to modify, suspend, or discontinue any SEO course
              or educational content at any time. We&apos;ll provide reasonable
              notice when possible, but some changes may be implemented
              immediately for SEO educational quality or legal reasons.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              3. Your Account
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                SEO Student Account Security
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-0">
                You&apos;re responsible for maintaining the security of your
                SEO student account and password. MailPackr cannot and will not be
                liable for any loss of SEO learning progress or access from your failure to
                comply with this security obligation.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              You must provide accurate and complete information when enrolling
              in SEO courses. You&apos;re responsible for all SEO learning activities
              that occur under your account.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              You may not share account access with others, create multiple
              accounts, or provide false information that would affect SEO course
              completion or SEO certification.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              4. SEO Learning Guidelines & Code of Conduct
            </h2>
            <div className="bg-secondary border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                SEO Learning Expectations
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Respectful SEO Learning:</strong> Maintain respectful
                  communication in all SEO course discussions and interactions
                </li>
                <li>
                  <strong>Academic Integrity:</strong> Complete assignments and
                  assessments honestly without unauthorized assistance
                </li>
                <li>
                  <strong>Ethical SEO Application:</strong> Use learned SEO
                  strategies ethically and in compliance with search engine guidelines
                </li>
                <li>
                  <strong>SEO Course Participation:</strong> Engage constructively
                  in SEO course activities and community discussions
                </li>
                <li>
                  <strong>SEO Compliance:</strong> Follow search engine guidelines, webmaster
                  policies, and white-hat SEO practices when applying course concepts
                </li>
                <li>
                  <strong>Intellectual Property:</strong> Respect SEO course
                  materials and do not redistribute without permission
                </li>
              </ul>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Prohibited Activities
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You may not use MailPackr for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Sharing or redistributing SEO course materials without permission
                </li>
                <li>
                  Creating multiple accounts to access content inappropriately
                </li>
                <li>Harassment of instructors or fellow students</li>
                <li>Cheating on assessments or certifications</li>
                <li>Using SEO course content for black-hat or illegal SEO activities</li>
                <li>Reverse engineering or copying our educational platform</li>
                <li>Reselling access to SEO courses or certification programs</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              5. Payment and Billing
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Our free SEO educational resources are available at no cost with the
              features described on our SEO courses page. Paid SEO courses and
              certification programs are billed as one-time payments or monthly
              subscriptions as specified.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              SEO course access and materials are provided immediately upon
              successful payment. Subscription-based SEO programs provide ongoing
              access as long as payments are current.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              SEO course fees are non-refundable after 7 days except where required
              by law. You can cancel ongoing subscriptions at any time from your
              SEO student dashboard.
            </p>
          </section>

          {/* <section className="mb-12">
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
          </section> */}

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              6. Privacy and Data
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
              You retain ownership of your SEO learning progress and any work
              created during SEO courses. We won&apos;t sell, rent, or share your
              SEO student data with third parties except as described in our Privacy
              Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              MailPackr provides SEO educational content &ldquo;as is&rdquo; without
              warranties of any kind. We strive for reliable access to SEO courses
              but can&apos;t guarantee uninterrupted service or specific
              SEO learning outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To the maximum extent permitted by law, MailPackr shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of business opportunities, SEO career
              advancement, or expected SEO learning outcomes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              8. Changes to Terms
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
              9. Contact Us
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