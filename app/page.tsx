import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { 
  Mail, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Globe
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trusted by 10,000+ businesses worldwide
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-foreground">Ready to Cut Your Email</span>
              <br />
              <span className="text-foreground">Costs by 90%?</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Get enterprise-grade email sending platform, automation, and
              analytics at a fraction of the cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="text-primary-foreground px-10 py-2 text-lg font-semibold shadow-lg"
                asChild
              >
                <Link href="https://app.mailpackr.com/auth">
                  Start Free
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold border-2">
                View Live Demo
              </Button> */}
            </div>

            <div className="text-muted-foreground">
              Free plan • No credit card required • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tired of Expensive Email Architecture Tools?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why pay <strong>$99</strong> when <strong>MailPackr</strong> gives
              it for less?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center border-border bg-card">
              <DollarSign className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Overpriced Plans
              </h3>
              <p className="text-muted-foreground">
                Pay $99+/month for basic features that should cost a fraction of
                that price
              </p>
            </Card>

            <Card className="p-8 text-center border-border bg-card">
              <Clock className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Complex Setup
              </h3>
              <p className="text-muted-foreground">
                Spend weeks learning complicated interfaces instead of focusing
                on your business
              </p>
            </Card>

            <Card className="p-8 text-center border-border bg-card">
              <Globe className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Poor Deliverability
              </h3>
              <p className="text-muted-foreground">
                Watch your emails end up in spam folders despite paying premium
                prices
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              MailPackr Changes Everything
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get enterprise-grade email sending tools without the enterprise
              price tag. Simple, powerful, and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Beautiful Templates
              </h3>
              <p className="text-muted-foreground mb-4">
                Numerous professionally designed templates that convert.
                Drag-and-drop editor makes customization effortless.
              </p>
              {/* <div className="text-sm font-semibold text-primary">
                Save $50/month vs competitors
              </div> */}
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Advanced Analytics
              </h3>
              <p className="text-muted-foreground mb-4">
                Real-time reporting, A/B testing, and conversion tracking.
                Everything you need to optimize campaigns.
              </p>
              {/* <div className="text-sm font-semibold text-primary">
                Included at every plan level
              </div> */}
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                High Deliverability
              </h3>
              <p className="text-muted-foreground mb-4">
                AWS SES-powered infrastructure with strict compliance ensures
                your emails reach the inbox. Permission-based sending only.
              </p>
              {/* <div className="text-sm font-semibold text-primary">
                Better than services 10x the price
              </div> */}
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Smart Automation
              </h3>
              <p className="text-muted-foreground mb-4">
                Set up complex workflows in minutes. Welcome series, abandoned
                cart emails, and behavior triggers.
              </p>
              {/* <div className="text-sm font-semibold text-primary">
                No per-automation fees
              </div> */}
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Contact Management
              </h3>
              <p className="text-muted-foreground mb-4">
                Unlimited contacts, advanced segmentation, and custom fields. No
                contact limits.
              </p>
              {/* <div className="text-sm font-semibold text-primary">
                Save hundreds on contact fees
              </div> */}
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Easy Integration
              </h3>
              <p className="text-muted-foreground mb-4">
                Connect with many apps. WordPress, Shopify, WooCommerce, and
                more.
              </p>
              {/* <div className="text-sm font-semibold text-primary">
                All integrations free
              </div> */}
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent, Fair Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees, no contact limits, no surprises. Pay only for what
              you use, starting completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Free
                </h3>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $0
                </div>
                <p className="text-muted-foreground mb-8">
                  Perfect for getting started
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>2,000 emails/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Unlimited contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Email templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Bring your own Domain</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="https://app.mailpackr.com/auth">Start Today</Link>
              </Button>
            </Card>

            {/* Pay Per Send Plan */}
            <Card className="p-8 border-2 border-primary bg-secondary relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Pay Per Send
                </h3>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $0.001
                </div>
                <p className="text-muted-foreground mb-8">per email sent</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Unlimited contacts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Premium templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Automation workflows</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Bring your own Domain</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary" asChild>
                <Link href="https://app.mailpackr.com/auth">
                  Start Pay Per Send
                </Link>
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-foreground mb-2">
                  Custom
                </div>
                <p className="text-muted-foreground mb-8">
                  For high-volume senders
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Volume discounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Dedicated IP</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>Account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-foreground mr-3" />
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All plans include unlimited contacts, templates, and integrations.
              No setup fees or hidden costs.
            </p>
          </div>
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
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            <span className="text-background">Ready to Cut Your Email</span>
            <br />
            <span className="text-background"> Costs by 90%? </span>
          </h2>
          {/* Join thousands of smart businesses who've already made the switch. */}
          <p className="text-xl text-primary-foreground mb-12 max-w-3xl mx-auto">
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
              <Link href="https://app.mailpackr.com/auth">
                Start Free
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
      </section>

      <Footer />

      {/* Crisp Chat */}
      <Script
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
      />
    </div>
  );
}