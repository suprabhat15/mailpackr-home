import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Award,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About MailPackr
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We&apos;re on a mission to help creators and businesses build meaningful relationships with their audience through email.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                Email marketing shouldn&apos;t be complicated. We built MailPackr to provide a powerful, intuitive, and affordable platform for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-border hover:shadow-lg transition-all">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Quality First
                </h3>
                <p className="text-muted-foreground">
                  We obsess over deliverability and design. Your emails should land in the inbox and look perfect every time.
                </p>
              </Card>

              <Card className="p-6 text-center border-border hover:shadow-lg transition-all">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Customer Focused
                </h3>
                <p className="text-muted-foreground">
                  We listen to our users. Our roadmap is driven by the features you need to grow your business.
                </p>
              </Card>

              <Card className="p-6 text-center border-border hover:shadow-lg transition-all">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Growth Oriented
                </h3>
                <p className="text-muted-foreground">
                  We succeed when you succeed. Our tools are designed to help you scale your audience and revenue.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                    <div className="text-muted-foreground">Active Users</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-primary mb-2">500M+</div>
                    <div className="text-muted-foreground">Emails Sent</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the future of email marketing
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold text-primary"
                asChild
              >
                <Link href="https://app.mailpackr.com/auth">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary border"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
