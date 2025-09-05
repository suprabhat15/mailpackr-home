import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Award,
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Mail,
  BarChart3,
  CheckCircle,
  ArrowRight,
  GraduationCap
} from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About MailPackr
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your trusted partner for SEO education and
              optimization resources, empowering 19+ professionals worldwide to master the
              art of search engine optimization.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              <GraduationCap className="w-4 h-4 mr-2" />
              Trusted by 19+ professionals
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To democratize SEO education and provide
                practical, results-driven learning experiences that transform
                organic visibility and drive sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Expert-Led Education
                </h3>
                <p className="text-muted-foreground">
                  Learn from professionals who have generated millions in
                  organic traffic through proven SEO optimization strategies.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Practical Focus
                </h3>
                <p className="text-muted-foreground">
                  Every course includes hands-on projects and real-world case
                  studies you can implement immediately.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  Our students see average 150% increase in organic traffic and
                  80% improvement in search rankings within 90 days.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive SEO education designed for every
                skill level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  SEO Fundamentals
                </h3>
                <p className="text-muted-foreground text-sm">
                  Master keyword research, on-page optimization, technical SEO, and
                  content strategy from the ground up.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Technical SEO & Site Speed
                </h3>
                <p className="text-muted-foreground text-sm">
                  Build optimized website architecture, improve crawling efficiency, and
                  implement advanced technical SEO strategies.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  SEO Analytics & Tracking
                </h3>
                <p className="text-muted-foreground text-sm">
                  Deep-dive into search console metrics, ranking tracking, and data-driven
                  optimization for maximum organic visibility.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Content SEO & Strategy
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learn content optimization, topic clustering, and
                  search intent targeting strategies.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Link Building & Authority
                </h3>
                <p className="text-muted-foreground text-sm">
                  Create powerful backlink strategies with effective
                  outreach and relationship building techniques.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Corporate Training
                </h3>
                <p className="text-muted-foreground text-sm">
                  Custom curriculum design and on-site training for teams and
                  organizations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Learning Paths
              </h2>
              <p className="text-lg text-muted-foreground">
                Structured programs designed to take you from beginner to expert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-2 border-green-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Beginner Path
                  </h3>
                  <div className="text-2xl font-bold text-green-600">$199</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>3 Foundation courses</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>20+ hours of content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>Course certificates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span>6 months access</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-primary relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Professional Path
                  </h3>
                  <div className="text-2xl font-bold text-primary">$399</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>6 Advanced courses</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>40+ hours of content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>1-on-1 mentorship</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-accent">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Corporate Training
                  </h3>
                  <div className="text-2xl font-bold text-accent">Custom</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    <span>Custom curriculum</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    <span>On-site training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    <span>Dedicated manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    <span>Volume discounts</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your SEO Skills?
            </h2>
            <p className="text-lg text-primary-foreground mb-8">
              Join our waitlist and be the first to know when enrollment opens.
              Get access to free SEO resources while you wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-secondary"
                asChild
              >
                <Link href="/#waitlist">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}