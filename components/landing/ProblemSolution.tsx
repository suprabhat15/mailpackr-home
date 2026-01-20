"use client";

import { CheckCircle, X, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    "Emails landing in spam",
    "High sending costs",  
    "No visibility into deliverability"
  ];

  const solutions = [
    "Inbox placement tracking",
    "SES-powered low-cost sending",
    "Real-time analytics & logs"
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-5" />
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg font-bold text-foreground mb-6 animate-in">
            Stop fighting with email
            <br />
            <span className="text-gradient">Start delivering</span>
          </h2>
          <p className="body-lg text-foreground/80 max-w-3xl mx-auto animate-in animate-in-delay-1">
            Traditional email providers leave you guessing. Mailpackr gives you complete visibility 
            and control over your email delivery.
          </p>
        </div>

        {/* Problem → Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Problems */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-2">Common Problems</h3>
              <p className="text-foreground/60">What you&apos;re dealing with now</p>
            </div>
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl border-red-500/20 relative group animate-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{problem}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-2">Our Solutions</h3>
              <p className="text-foreground/60">What you get with Mailpackr</p>
            </div>
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="glass-card-hover p-6 rounded-xl border-green-500/20 relative group animate-in"
                style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">{solution}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 via-primary/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Developer Experience Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-in">
            <h3 className="heading-md font-bold text-foreground mb-6">
              Built for developers, 
              <br />
              <span className="text-gradient">trusted by businesses</span>
            </h3>
            <p className="body-md text-foreground/80 mb-8 leading-relaxed">
              Mailpackr handles the complex parts of email delivery so you can 
              focus on building great products. Get started in minutes with our 
              simple APIs and comprehensive documentation.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "99.9% uptime SLA",
                  description: "Enterprise-grade reliability you can count on"
                },
                {
                  title: "Global infrastructure", 
                  description: "Send from multiple regions for optimal performance"
                },
                {
                  title: "Expert support",
                  description: "Get help from email deliverability specialists"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">{item.title}</h4>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-in animate-in-delay-2">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/5 to-cyan-600/5" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-foreground">API Integration</span>
                  <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full">cURL</span>
                </div>
                <div className="glass-card rounded-xl p-6 text-sm font-mono text-foreground/90 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/30" />
                  <div className="relative space-y-3">
                    <div className="text-foreground/60"># Send an email</div>
                    <div className="space-y-1">
                      <div className="text-cyan-400">curl -X POST https://api.mailpackr.com/send</div>
                      <div className="text-primary pl-4">-H &quot;Authorization: Bearer YOUR_API_KEY&quot;</div>
                      <div className="text-green-400 pl-4">-d &apos;JSON_DATA&apos;</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground/80">Ready in 30 seconds</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}