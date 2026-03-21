"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Mail, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-primary/10 to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          {/* <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            v2.0 is now available
          </div> */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in delay-100">
            Send 10,000
            <br />
            <span className="">Emails for $10</span>
          </h1>

          <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in delay-200">
            The Mailchimp alternative with unlimited contacts and domains,
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in delay-200">
            Create, schedule, and track high-converting email campaigns with
            enterprise-grade deliverability.
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in delay-300">
            <Button size="xl" variant="primary" className="h-12 px-8">
              Start Sending for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button
              size="xl"
              variant="outline"
              className="h-12 px-8 bg-background"
            >
              View Documentation
            </Button> */}
          {/* </div>  */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="primary"
              className="bg-[#101828] text-white hover:bg-[#101828]/90 h-14 px-8 text-lg font-semibold"
              asChild
            >
              <Link href="https://app.mailpackr.com/auth">
                Start Sending Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 3D Mockup Container */}
        <div className="relative mx-auto max-w-6xl mt-8 animate-fade-in delay-500 perspective-1000">
          <div className="relative rounded-xl border border-border bg-background/50 shadow-2xl backdrop-blur-xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out overflow-hidden group">
            {/* Mockup Header */}
            <div className="border-b border-border bg-background/90 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
              </div>
              <div className="flex-1 text-center text-xs text-muted-foreground font-mono">
                app.mailpackr.com/dashboard
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="p-8 bg-background min-h-[500px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Total Subscribers",
                    value: "49,405",
                    change: "+12%",
                    icon: Users,
                  },
                  {
                    title: "Avg. Open Rate",
                    value: "52.8%",
                    change: "+4.3%",
                    icon: Mail,
                  },
                  {
                    title: "Click Rate",
                    value: "8.9%",
                    change: "+1.1%",
                    icon: BarChart3,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border p-6 bg-card/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </span>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </span>
                      <span className="text-xs text-green-500 font-medium">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-card/50 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Mailpackr Dashboard Analytics"
                  width={1200}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </div>

          {/* Shadow/Glow under the mockup */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-[20%] opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
