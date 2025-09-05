import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Shield, ArrowLeft, Clock, CheckCircle, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground mb-8">
              Your privacy as a learner is our priority. Discover how we protect
              and handle your educational data and learning progress.
            </p>
            <div className="flex items-center justify-center text-primary-foreground">
              <Clock className="h-5 w-5 mr-2" />
              <span>Effective Date: 30/08/2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-background rounded-2xl shadow-lg p-8 md:p-12 border border-border">
          <div className="prose prose-gray max-w-none">
            <div className="flex items-center justify-between mb-12">
              {/* <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-foreground rounded-full"></div>
                <span className="text-sm text-muted-foreground font-medium">
                  This policy is effective and up to date
                </span>
              </div> */}
              <Button variant="outline" asChild size="sm">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 mr-3 text-foreground" />
                Introduction & Organizational Info
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                We, at MailPackr Education, are dedicated to serving our
                students and learners to the best of our abilities. Part of our
                commitment involves the responsible management of personal and
                educational information collected through our learning platform
                mailpackr.com, and any related interactions. Our primary goals
                in processing this information include:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    Enhancing the learning experience by understanding student
                    needs and educational preferences.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    Providing timely educational support and responding to
                    student inquiries or course-related questions.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    Improving our courses and educational content to meet the
                    evolving needs of our students.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-3"></div>
                  <p className="text-muted-foreground">
                    Conducting necessary educational operations, such as course
                    enrollment, progress tracking, and certification management.
                  </p>
                </div>
              </div>
              <div className="bg-secondary border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                <p className="text-foreground">
                  At present, we do not have an appointed Data Protection
                  Officer (DPO), but we remain fully committed to addressing all
                  privacy concerns promptly. Should you have any questions or
                  require further information about how we manage personal
                  information, please feel free to contact us at{" "}
                  <strong>support@mailpackr.com</strong>.
                </p>
              </div>
            </section>

            {/* Scope and Application */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Globe className="h-8 w-8 mr-3 text-foreground" />
                Scope and Application
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Our privacy policy is designed to protect the personal
                information of all our stakeholders, including prospective
                students, enrolled learners, and website visitors. Whether you
                are browsing our educational platform, enrolled in our courses,
                or participating in our learning community, we ensure that your
                personal data is processed with the highest standards of privacy
                and security.
              </p>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 mr-3 text-foreground" />
                Data Collection and Processing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Our commitment to transparency and data protection extends to
                how we collect and use your personal information. We gather
                personal data through various educational interactions,
                including when you enroll in our courses, participate in
                learning activities, access course materials, interact with
                instructors, participate in community discussions, and utilize
                our educational resources and tools.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Types of Personal Information We May Process:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    Student Information
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    First and Last Name, Email, Educational Background
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    Technical Information
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Operating system, Device ID, IP Address, Browser Information
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    Learning Progress
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Course completion, quiz scores, assignment submissions, time
                    spent
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">
                    Payment Information
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Course payments, enrollment history, billing details
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                How We Use Your Information:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Student Authentication and Security
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Course Content Delivery
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Educational Communications
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Student Support Services
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Learning Progress Tracking
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Certificate and Credential Management
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Student Engagement and Learning Analytics
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Educational Feedback and Course Improvement
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Personalizing Learning Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Compliance with Educational Regulations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Learning Analytics and Course Effectiveness
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Storage and Protection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Shield className="h-8 w-8 mr-3 text-foreground" />
                Data Storage and Protection
              </h2>
              <div className="bg-secondary p-6 rounded-xl mb-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Data Storage:
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Personal information is stored in secure servers located in
                  the following locations: NA, AS. For services that require
                  international data transfer, we ensure that such transfers
                  comply with all applicable laws and maintain data protection
                  standards equivalent to those in our primary location.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Data Hosting Partners:</strong> We partner with
                  reputable data hosting providers committed to using
                  state-of-the-art security measures. These partners are
                  selected based on their adherence to stringent data protection
                  standards.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Data Protection Measures:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 border border-border">
                    <Shield className="h-6 w-6 text-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Encryption
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Data protected during transfer and at rest with robust
                    encryption
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 border border-border">
                    <CheckCircle className="h-6 w-6 text-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Access Control
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Strict access controls limited to authorized personnel
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 border border-border">
                    <Globe className="h-6 w-6 text-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Security Audits
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Regular security audits and monitoring systems
                  </p>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 mr-3 text-foreground" />
                User Rights and Choices
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                At MailPackr, we recognize and respect your rights regarding
                your personal information, in accordance with the General Data
                Protection Regulation (GDPR) and other applicable data
                protection laws. As a student or prospective learner, you have
                full control over your data.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Your Rights Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right of Access
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Request access to personal information we hold about you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Rectification
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Request correction of incorrect or incomplete
                        information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Erasure
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Request deletion of your personal information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Restriction
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Request restriction of processing under certain
                        conditions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Data Portability
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Receive your data in a machine-readable format
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Object
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Object to processing, including direct sending
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Withdraw Consent
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Withdraw consent at any time without affecting
                        lawfulness
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">
                        Right to Lodge a Complaint
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        File a complaint with supervisory authorities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* US Privacy Laws */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Globe className="h-8 w-8 mr-3 text-foreground" />
                US Privacy Laws Compliance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                For residents of the United States of America, the California
                Consumer Privacy Act provides specific rights regarding personal
                information:
              </p>
              <div className="space-y-4 mb-6">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Right to Know
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request disclosure of categories and specific pieces of
                    personal information collected
                  </p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Right to Delete
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request deletion of personal information collected about you
                  </p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Right to Correct
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request correction of inaccurate information
                  </p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Right to Non-Discrimination
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Protection from discrimination for exercising your rights
                  </p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Shield className="h-8 w-8 mr-3 text-foreground" />
                Children&apos;s Privacy
              </h2>
              <div className="bg-secondary border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                <p className="text-foreground font-semibold mb-2">
                  Age Requirements: Our services are not intended for children
                  under the age of 18.
                </p>
                <p className="text-muted-foreground">
                  We do not knowingly collect personal information from children
                  under this age without verifiable parental consent. If you are
                  under 18, please do not use our services or provide personal
                  information to us.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we become aware that we have inadvertently collected personal
                information from a child under 18 without verifiable parental
                consent, we will take prompt steps to delete such information.
                Parents have the right to review, update, or delete their
                child&apos;s information.
              </p>
            </section>

            {/* Data Breach Notification */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Shield className="h-8 w-8 mr-3 text-foreground" />
                Data Breach Notification Procedures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                We have established clear procedures for promptly identifying,
                assessing, and mitigating data breaches that pose risks to your
                privacy rights and freedoms.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Detection and Assessment:
                  </h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Internal monitoring and security systems
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Thorough impact assessment of breaches
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Notification Timeline:
                  </h3>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Regulatory authorities notified within 30 days
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-foreground mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Affected individuals notified within 30 days
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Clock className="h-8 w-8 mr-3 text-foreground" />
                Policy Updates and Changes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                We may update this privacy policy from time to time to reflect
                changes in legal requirements, industry standards, or our
                business operations. We will provide notice through email,
                website notifications, or other appropriate channels for
                significant changes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of our services after any changes signifies
                your acceptance of the updated terms. We encourage you to review
                our privacy policy periodically to stay informed.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6 text-primary-foreground">
                If you have any questions about this Privacy Policy or your
                data, we&apos;re here to help.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                  <div>
                    <strong className="block">Learning Support:</strong>
                    <span className="text-primary-foreground">
                      learn@mailpackr.com
                    </span>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                  <div>
                    <strong className="block">Phone Support:</strong>
                    <span className="text-primary-foreground">+91 9700129000</span>
                  </div>
                </div> */}
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  asChild
                  className="bg-background text-primary hover:bg-secondary border-primary"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}