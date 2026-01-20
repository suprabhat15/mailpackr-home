"use client";

import { Activity, Globe, Shield, Zap } from "lucide-react";

export default function ScalePerformance() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-5" />
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg font-bold text-foreground mb-6 animate-in">
            Built to send at scale —
            <br />
            <span className="text-gradient">without burning your wallet</span>
          </h2>
          <p className="body-lg text-foreground/80 max-w-4xl mx-auto animate-in animate-in-delay-1">
            Whether you&apos;re sending your first email or your billionth, 
            Mailpackr scales effortlessly with cost-effective infrastructure.
          </p>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              icon: Activity,
              value: "10B+", 
              label: "Emails delivered monthly",
              description: "Growing 40% month over month"
            },
            { 
              icon: Shield,
              value: "99.99%", 
              label: "Uptime SLA",
              description: "Enterprise-grade reliability"
            },
            { 
              icon: Zap,
              value: "<2ms", 
              label: "API response time",
              description: "Lightning-fast global delivery"
            }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="glass-card-hover p-8 rounded-2xl text-center relative group animate-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3 glow-text">
                  {stat.value}
                </div>
                <div className="text-foreground font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-foreground/60 text-sm">
                  {stat.description}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Scale Features */}
        <div className="glass-card p-1 rounded-3xl mb-24">
          <div className="bg-background/80 rounded-[22px] p-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-in">
                <h3 className="heading-md font-bold text-foreground mb-6">
                  <span className="text-gradient">Enterprise-grade</span> infrastructure
                  <br />
                  that scales with you
                </h3>
                <p className="body-md text-foreground/80 mb-8 leading-relaxed">
                  Built on modern cloud infrastructure with automatic scaling, 
                  redundancy, and global distribution. Your emails are delivered 
                  fast, no matter where your users are located.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: Zap,
                      title: "Auto-scaling infrastructure",
                      description: "Handle traffic spikes seamlessly"
                    },
                    {
                      icon: Globe,
                      title: "Multi-region deployment", 
                      description: "Global delivery with local optimization"
                    },
                    {
                      icon: Activity,
                      title: "Real-time monitoring",
                      description: "Complete visibility into delivery performance"
                    }
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-foreground/70 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="relative animate-in animate-in-delay-2">
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/5 to-cyan-600/5" />
                  <div className="relative">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-foreground">Global Performance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">Live</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { region: "US East", latency: "1.2ms", load: "87%" },
                        { region: "EU West", latency: "1.8ms", load: "72%" },
                        { region: "Asia Pacific", latency: "2.1ms", load: "69%" },
                        { region: "US West", latency: "1.1ms", load: "91%" }
                      ].map((region, index) => (
                        <div key={index} className="glass-card p-4 rounded-xl">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground">{region.region}</span>
                            <span className="text-sm font-bold text-gradient">{region.latency}</span>
                          </div>
                          <div className="w-full bg-black/5 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: region.load }}
                            ></div>
                          </div>
                          <div className="text-xs text-foreground/60 mt-1">
                            Load: {region.load}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-foreground">Global Average</span>
                        <span className="text-lg font-bold text-gradient">1.6ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="text-center mb-20">
          <h3 className="heading-md font-bold text-foreground mb-12 animate-in">
            Stop overpaying for email
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                provider: "Traditional ESPs",
                cost: "$299/month",
                volume: "100K emails", 
                color: "red"
              },
              {
                provider: "Mailpackr + SES",
                cost: "$49/month", 
                volume: "100K emails",
                color: "green",
                featured: true
              },
              {
                provider: "Savings",
                cost: "83% less",
                volume: "Same deliverability",
                color: "primary"
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`glass-card-hover p-8 rounded-2xl relative animate-in ${
                  plan.featured ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{plan.provider}</h4>
                  <div className={`text-3xl font-bold mb-1 ${
                    plan.color === 'red' ? 'text-red-400' : 
                    plan.color === 'green' ? 'text-green-400' : 
                    'text-gradient'
                  }`}>
                    {plan.cost}
                  </div>
                  <div className="text-foreground/60 text-sm">{plan.volume}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}