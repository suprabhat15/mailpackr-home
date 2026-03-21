"use client";

import {
  Layout,
  ShieldCheck,
  Users,
  Zap,
  Copy,
  UserPlus,
  Send,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Unlimited Campaigns",
      description:
        "Run as many email marketing campaigns as your business requires without any arbitrary limits.",
      icon: Send,
    },
    {
      title: "Unlimited Custom Domains",
      description:
        "Connect as many domains as you need. DNS verification (DKIM/SPF) ensures your emails hit the inbox, not spam.",
      icon: ShieldCheck,
    },
    {
      title: "Unlimited Templates",
      description:
        "Design, save, and organize an infinite library of email templates for every occasion.",
      icon: Copy,
    },
    {
      title: "Unlimited Contacts",
      description:
        "Grow your audience without fear. We don't charge you more just because your list gets bigger.",
      icon: UserPlus,
      className: "mid-span-2",
    },
    {
      title: "Rich Visual Editor",
      description:
        "Drag-and-drop to create beautiful emails, or bring your own HTML. We handle the responsiveness.",
      icon: Layout,
    },
    {
      title: "Real-time Analytics",
      description:
        "Track Opens, Clicks, Bounces, and Deliverability in real-time. Make data-driven decisions.",
      icon: Zap,
    },
    {
      title: "Smart Segmentation",
      description:
        "Filter users based on behavior, attributes, or past engagement. Send targeted campaigns that convert.",
      icon: Users,
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Everything you need to send at scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features built for developers and marketers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={i}
                className="bg-secondary/20 border-border transition-all hover:border-primary/50 hover:bg-secondary/40 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
