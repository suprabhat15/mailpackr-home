"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start for free, scale as you grow. No hidden fees or long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <Card className="flex flex-col border-border bg-background relative overflow-hidden animate-fade-in delay-100">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for side projects and hobbyists.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold mb-6">
                $0<span className="text-lg font-normal text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3">
                {[
                  "3,000 emails per month",
                  "Unlimited contacts",
                  "Basic analytics",
                  "Community support",
                  "1 verified domain"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" size="lg">
                Get Started
              </Button>
            </CardFooter>
            <p className="text-xs text-center text-muted-foreground pb-6">
              No credit card required
            </p>
          </Card>

          {/* Pro Tier */}
          <Card className="flex flex-col border-primary/50 bg-background shadow-lg relative overflow-hidden animate-fade-in delay-200">
             <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Pro</CardTitle>
              <CardDescription>For growing businesses and startups.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold mb-6">
                $0.001<span className="text-lg font-normal text-muted-foreground">/email</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Pay as you go",
                  "Unlimited contacts",
                  "Advanced analytics & reporting",
                  "Dedicated IP options",
                  "Priority email support",
                  "Unlimited domains",
                  "90-day log retention"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full" size="lg">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="flex flex-col border-border bg-background animate-fade-in delay-300">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For high-volume senders and large teams.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold mb-6">
                Custom
              </div>
              <ul className="space-y-3">
                {[
                  "Volume discounts",
                  "SLA guarantees",
                  "Dedicated account manager",
                  "SSO & SAML",
                  "Custom integrations",
                  "24/7 phone support",
                  "Onboarding assistance"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" size="lg">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
