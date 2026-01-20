"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-3xl bg-white border border-border shadow-xl p-12 md:p-20 relative overflow-hidden animate-fade-in">
          {/* Abstract decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-[#101828]">
            Ready to upgrade your email strategy?
          </h3>
          {/* <p className="text-lg md:text-xl text-[#101828]/70 mb-10 max-w-2xl mx-auto">
            Join thousands of developers and businesses sending smarter emails
            today.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="primary"
              className="bg-[#101828] text-white hover:bg-[#101828]/90 h-14 px-8 text-lg font-semibold"
              asChild
            >
              <Link href="https://app.mailpackr.com/auth">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
