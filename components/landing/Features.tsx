"use client";

import { useEffect, useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Enterprise Deliverability",
    desc: "Dedicated IPs, SPF/DKIM/DMARC auto-setup, and real-time reputation monitoring baked in.",
  },
  {
    icon: "✅",
    title: "Free Built-in Verification",
    desc: "Syntax, MX, SMTP, disposable address detection, and catch-all flagging — all running silently, all free, always.",
  },
  {
    icon: "📊",
    title: "Campaign Analytics",
    desc: "Open rates, click maps, bounces, heatmaps, and conversion tracking in one clean dashboard. No CSV archaeology.",
  },
  {
    icon: "🔗",
    title: "Unlimited Domains",
    desc: "Manage every brand, product, and client under a single account. No per-domain fees. Ever.",
  },
];

export default function Features() {
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
      id="features"
      style={{
        background: "#eeede9",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.14), transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "100px 24px",
        }}
      >
        <div className="reveal">
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
            Everything Included
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
            Built for senders
            <br />
            who mean business.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 56,
          }}
          className="features-grid"
        >
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal${i > 0 ? ` reveal-d${Math.min(i, 4)}` : ""}`}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 16,
                padding: 32,
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,0,0,0.2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,0,0,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: 13,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  fontSize: 20,
                }}
              >
                {f.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 8,
                  letterSpacing: "-0.3px",
                  color: "#0d0e14",
                }}
              >
                {f.title}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(13,14,20,0.55)",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-body)",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
