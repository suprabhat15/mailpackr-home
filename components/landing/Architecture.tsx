"use client";

import React from "react";
import { ArrowRight, Database, Cloud, Activity, Zap } from "lucide-react";

export default function Architecture() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-5" />

      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg font-bold text-foreground mb-6 animate-in">
            <span>Engineering-first</span>
            <br />
            architecture & trust
          </h2>
          <p className="body-lg text-foreground/80 max-w-3xl mx-auto animate-in animate-in-delay-1">
            Built with fault tolerance, eventual consistency, and zero data loss
            design. Production-grade reliability your engineering team can
            trust.
          </p>
        </div>

        {/* System Architecture Flow */}
        <div className="glass-card p-12 rounded-3xl mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-cyan-600/10" />
          <div className="relative">
            <h3 className="heading-md font-bold text-foreground mb-12 text-center">
              How it works under the hood
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {[
                {
                  icon: Cloud,
                  title: "Your App",
                  description: "Send via API",
                  position: "start",
                },
                {
                  icon: ArrowRight,
                  title: "→",
                  description: "Queue",
                  position: "connector",
                },
                {
                  icon: Database,
                  title: "Queue",
                  description: "Redis + DB sync",
                  position: "middle",
                },
                {
                  icon: ArrowRight,
                  title: "→",
                  description: "SES",
                  position: "connector",
                },
                {
                  icon: Activity,
                  title: "Inbox",
                  description: "Delivered",
                  position: "end",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`text-center animate-in ${
                    step.position === "connector" ? "lg:col-span-1" : ""
                  }`}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {step.position === "connector" ? (
                    <div className="flex justify-center items-center h-20">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  ) : (
                    <div className="group">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                        {React.createElement(step.icon, {
                          className: "w-10 h-10 text-white",
                        })}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                        {step.title}
                      </h4>
                      <p className="text-foreground/70 text-sm">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Webhooks flow */}
            <div className="mt-12 pt-12 border-t border-border">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Real-time webhooks flowing back
                </h4>
                <p className="text-foreground/70">
                  Complete event tracking and delivery confirmations
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">Sent</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">Delivered</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-foreground/80">Opened</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Steps */}
        <div className="text-center mb-20">
          <h3 className="heading-md font-bold text-foreground mb-12 animate-in">
            Start building today
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign up",
                description: "Create your free account in 30 seconds",
                icon: Cloud,
              },
              {
                step: "2",
                title: "Configure",
                description: "Set up your domain and DNS records",
                icon: Database,
              },
              {
                step: "3",
                title: "Integrate",
                description: "Add our API to your application",
                icon: Zap,
              },
              {
                step: "4",
                title: "Send",
                description: "Start sending emails at scale",
                icon: Activity,
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="glass-card-hover p-8 rounded-2xl relative group animate-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-cyan-600/5" />
          <div className="relative grid lg:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Free tier",
                subtitle: "10,000 emails per month",
                description: "Get started with no commitment",
              },
              {
                title: "No setup fees",
                subtitle: "Pay only for what you use",
                description: "Transparent, usage-based pricing",
              },
              {
                title: "24/7 support",
                subtitle: "Expert help when you need it",
                description: "Email deliverability specialists",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="animate-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gradient font-medium mb-2">
                  {benefit.subtitle}
                </p>
                <p className="text-foreground/70 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
