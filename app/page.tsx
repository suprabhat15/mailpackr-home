import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WaitlistSignup } from "@/components/waitlist-signup";
import {
  Search,
  BarChart3,
  Zap,
  Users,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Target,
  TrendingUp,
  Award,
  Globe,
  LinkIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-8">
              <GraduationCap className="w-4 h-4 mr-2" />
              Trusted by 19+ professionals
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-foreground">Master SEO Optimization</span>
              <br />
              <span className="text-primary">Through Expert Training</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Learn search engine optimization, keyword research, and technical SEO
              strategies from industry professionals. Master the skills that
              drive organic traffic and improve search rankings.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {/* <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="https://app.mailpackr.com">
                  Start Learning
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button> */}
              {/* <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link href="#demo">
                  <PlayCircle className="mr-3 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button> */}
            </div>

            <WaitlistSignup />

            <div className="text-muted-foreground mt-15">
              Free SEO resources • Industry case studies • Practical
              optimization guides
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose MailPackr SEO?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry experts with proven track records in
              <strong> SEO optimization, organic growth success</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Expert Instructors
              </h3>
              <p className="text-muted-foreground">
                Learn from professionals who have generated millions in organic traffic
                through proven SEO strategies and optimization techniques
              </p>
            </Card>

            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Practical Learning
              </h3>
              <p className="text-muted-foreground">
                Hands-on projects and real-world case studies that you can
                implement immediately in your business
              </p>
            </Card>

            <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                Our students see average 150% increase in organic traffic and
                80% improvement in search rankings within 90 days
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20" id="courses">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive SEO Education & Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master every aspect of search engine optimization with our
              comprehensive educational resources. From beginner fundamentals to
              advanced SEO strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md group">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                  BEGINNER
                </span>
                <span className="text-accent font-semibold">$99</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                SEO Fundamentals
              </h3>
              <p className="text-muted-foreground mb-4">
                Master the basics of search engine optimization. Learn keyword research,
                on-page SEO, meta optimization, and crafting content strategies
                that rank higher in search results.
              </p>
              <div className="text-sm text-muted-foreground">
                12 lessons • 8 hours • Certificate included
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md group">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                  INTERMEDIATE
                </span>
                <span className="text-accent font-semibold">$149</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Technical SEO & Site Optimization
              </h3>
              <p className="text-muted-foreground mb-4">
                Master technical SEO fundamentals and advanced optimization.
                Site speed, crawling, indexing, schema markup, and
                mobile optimization techniques.
              </p>
              <div className="text-sm text-muted-foreground">
                18 lessons • 12 hours • Live Q&A sessions
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md group">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold">
                  ADVANCED
                </span>
                <span className="text-accent font-semibold">$199</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                SEO Analytics & Performance Optimization
              </h3>
              <p className="text-muted-foreground mb-4">
                Deep-dive into SEO metrics, ranking tracking, search console
                optimization, and data-driven SEO techniques for
                maximum organic visibility and traffic growth.
              </p>
              <div className="text-sm text-muted-foreground">
                15 lessons • 10 hours • Advanced tools access
              </div>
            </Card>

            {/* <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md group">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                  SPECIALIST
                </span>
                <span className="text-accent font-semibold">$129</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Lead Generation Mastery
              </h3>
              <p className="text-muted-foreground mb-4">
                Master lead generation strategies across multiple channels.
                Learn opt-in optimization, landing page creation, and lead
                nurturing techniques that convert.
              </p>
              <div className="text-sm text-muted-foreground">
                10 lessons • 6 hours • Deliverability audit
              </div>
            </Card> */}

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md group">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-semibold">
                  INTERMEDIATE
                </span>
                <span className="text-accent font-semibold">$119</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Content SEO & User Experience
              </h3>
              <p className="text-muted-foreground mb-4">
                Create SEO-optimized content that ranks and converts. Learn content
                strategy, user intent optimization, content clustering, and
                engagement optimization techniques.
              </p>
              <div className="text-sm text-muted-foreground">
                14 lessons • 9 hours • Content templates
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md group">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                  CREATIVE
                </span>
                <span className="text-accent font-semibold">$89</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Link Building & Authority Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Master advanced link building strategies that build domain authority. Learn
                outreach techniques, relationship building, and white-hat
                link acquisition methods.
              </p>
              <div className="text-sm text-muted-foreground">
                16 lessons • 11 hours • Outreach templates
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Programs Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete SEO Optimization Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured learning paths designed for your skill level. From
              beginner to expert, master search engine optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Beginner Program */}
            <Card className="p-8 border-2 border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Beginner Path
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  $199
                </div>
                <p className="text-muted-foreground mb-8">
                  Perfect for SEO newcomers
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>3 Foundation courses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>20+ hours of content</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Course certificates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>SEO templates library</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Community access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>6 months access</span>
                </li>
              </ul>
              {/* <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <Link href="https://app.mailpackr.com">Start Learning</Link>
              </Button> */}
            </Card>

            {/* Professional Program */}
            <Card className="p-8 border-2 border-primary bg-card relative hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Professional Path
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">$399</div>
                <p className="text-muted-foreground mb-8">
                  Most comprehensive program
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>6 Advanced courses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>40+ hours of content</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Professional certificates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>1-on-1 mentorship sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Live workshops</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Lifetime access</span>
                </li>
              </ul>
              {/* <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href="https://app.mailpackr.com">Enroll Now</Link>
              </Button> */}
            </Card>

            {/* Corporate Training */}
            <Card className="p-8 border-2 border-accent hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Corporate Training
                </h3>
                <div className="text-4xl font-bold text-accent mb-2">
                  Custom
                </div>
                <p className="text-muted-foreground mb-8">
                  For teams and organizations
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>Custom curriculum design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>On-site training available</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>Team progress tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>Volume pricing discounts</span>
                </li>
              </ul>
              <Button
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                variant="outline"
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </Card>
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All plans include unlimited contacts, templates, and integrations.
              No setup fees or hidden costs.
            </p>
          </div> */}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Loved by Businesses Worldwide
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "We switched from MailChimp and saved $2,400/year while getting better deliverability. 
                MailPackr just works."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Architecture Director, TechStart</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "The automation features are incredible. We've increased our email revenue by 40% 
                since switching to MailPackr."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Mike Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Founder, EcomPlus</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "Finally, an email service that doesn't break the bank. Great features at a fair price. 
                Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">LC</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Lisa Chen</div>
                  <div className="text-sm text-muted-foreground">CEO, CreativeAgency</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <span className="text-background">Ready to Cut Your Email</span>
            <br />
            <span className="text-background"> Costs by 90%? </span>
          </h2> */}
      {/* Join thousands of smart businesses who've already made the switch. */}
      {/* <p className="text-xl text-primary-foreground mb-12 max-w-3xl mx-auto">
            Start with our free plan today. <br />
            No Credit Card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-background text-primary hover:bg-secondary border-primary px-10 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="https://app.mailpackr.com">
                Start Learning
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-background/20 px-10 py-4 text-lg font-semibold"
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />

      {/* Crisp Chat */}
      {/* <Script
        id="crisp-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="ca46cb80-7108-4784-b9d2-8f5883d89aa7";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
        }}
      /> */}
    </div>
  );
}