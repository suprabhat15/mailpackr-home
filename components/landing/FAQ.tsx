"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Is email verification really free forever, with no catch?",
    a: "Yes, completely. We run syntax checking, MX lookups, SMTP pings, disposable address detection, and catch-all flagging on every address, at zero cost to you, forever. It's baked into the platform, not an add-on. No trial period, no \"free up to X addresses\" limit.",
  },
  {
    q: "What's included in the $10 / 10k sends?",
    a: "Everything: verification, delivery, analytics, scheduling, unlimited contacts and domains. You're paying for the act of sending, not for storing contacts or running your list through a verifier first. $10 = 10,000 emails delivered. Full stop.",
  },
  {
    q: "How is this different from Mailchimp?",
    a: "Mailchimp charges you based on the number of contacts in your account, not the number of emails you actually send. So even if you only email 1,000 people in a month, you're paying for all 50,000 contacts you've stored. MailPackr charges only for what you send. And we never charge for verification.",
  },
  {
    q: "What happens to risky and bad emails?",
    a: "They're silently filtered before your campaign sends. Addresses flagged as invalid, disposable, catch-all, or SMTP-unresponsive are blocked. You only pay for the emails that actually go out. Your sender reputation stays protected automatically.",
  },
  {
    q: "Can I send from multiple domains or brands?",
    a: "Yes, unlimited domains are included on every plan, even free. You can manage campaigns for multiple brands, clients, or products from one account with no per-domain charges.",
  },
  {
    q: "Do rates drop if I send more?",
    a: "Yes. The base rate is $0.001/email ($10 per 10k). Customers sending 250k+ emails get discounted rates. Contact us for a custom quote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="faq"
      style={{ position: "relative", zIndex: 1, background: "var(--background)" }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "100px 24px 80px" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 0" }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "rgba(13,14,20,0.45)",
              marginBottom: 14,
              fontFamily: "var(--font-body)",
            }}
          >
            FAQ
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 62px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.04,
              color: "#0d0e14",
            }}
          >
            Got questions?
            <br />
            We&apos;ve got receipts.
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: 780,
            margin: "52px auto 0",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                overflow: "hidden",
                ...(i === 0 ? { borderTop: "1px solid rgba(0,0,0,0.08)" } : {}),
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 0",
                  cursor: "pointer",
                  gap: 20,
                  fontSize: 17,
                  fontWeight: 600,
                  color: "rgba(13,14,20,0.9)",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  transition: "opacity 0.2s",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                {faq.q}
                <span
                  style={{
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    border: `1px solid ${open === i ? "#0d0e14" : "rgba(13,14,20,0.15)"}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s, border-color 0.2s",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    color: open === i ? "#0d0e14" : "rgba(13,14,20,0.45)",
                    fontSize: 12,
                  }}
                >
                  ▾
                </span>
              </button>
              <div
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                  fontSize: 15,
                  color: "rgba(13,14,20,0.55)",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-body)",
                }}
              >
                <div style={{ paddingBottom: 24 }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
