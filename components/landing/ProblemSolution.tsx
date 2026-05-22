"use client";

import { useEffect, useRef } from "react";

const PAINS = [
  {
    icon: "$",
    title: "Step 1: Pay to verify",
    desc: "$0.008 to $0.01 per address before you've sent anything",
  },
  {
    icon: "$",
    title: "Step 2: Pay to send",
    desc: "Billed on total contacts, even the ones you never email",
  },
  {
    icon: "!",
    title: "Tier up constantly",
    desc: "Hit a contact ceiling and your monthly bill jumps whether you send more or not",
  },
  {
    icon: "✕",
    title: "One domain per plan",
    desc: "Running multiple brands means multiple subscriptions",
  },
  {
    icon: "↑",
    title: "100k list = $800+ gone",
    desc: "Before a single email hits an inbox",
  },
];

const GOODS = [
  {
    icon: "$0",
    title: "Verification is free, always",
    desc: "Validate every address at zero cost, forever",
  },
  {
    icon: "→",
    title: "Pay only when you send",
    desc: "$10 per 10k emails. Contact count doesn't cost you anything.",
  },
  {
    icon: "∞",
    title: "Unlimited contacts",
    desc: "Import them. Store them. We don't charge for that.",
  },
  {
    icon: "∞",
    title: "Unlimited domains",
    desc: "Every brand, every client, one account, no upcharge",
  },
  {
    icon: "↓",
    title: "100k send = $100 flat",
    desc: "No verification bill on top. That's it.",
  },
];

export default function ProblemSolution() {
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
      style={{
        maxWidth: 1140,
        margin: "0 auto",
        padding: "100px 24px",
        position: "relative",
        zIndex: 1,
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
          The Problem
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.04,
            marginBottom: 20,
            color: "#0d0e14",
          }}
        >
          You&apos;re being
          <br />
          charged twice
          <br />
          for one campaign.
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 56,
        }}
        className="problem-grid"
      >
        {/* Bad card */}
        <div
          className="reveal reveal-d1"
          style={{
            background: "linear-gradient(140deg, #fdf0ed 0%, #ffffff 100%)",
            border: "1px solid rgba(255,80,40,0.2)",
            borderRadius: 20,
            padding: 40,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              background: "radial-gradient(rgba(255,80,40,0.08), transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 24,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "oklch(65% 0.22 25)",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 900,
                background: "rgba(255,80,40,0.15)",
                color: "oklch(65% 0.22 25)",
              }}
            >
              ✕
            </span>
            The Old Way
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {PAINS.map((p) => (
              <li
                key={p.title}
                style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 15, lineHeight: 1.55 }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    background: "rgba(255,80,40,0.12)",
                    color: "oklch(65% 0.22 25)",
                    border: "1px solid rgba(255,80,40,0.2)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {p.icon}
                </span>
                <span style={{ color: "rgba(13,14,20,0.65)", fontFamily: "var(--font-body)" }}>
                  <strong style={{ color: "#0d0e14", fontWeight: 700 }}>{p.title}</strong>
                  {". "}
                  {p.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Good card */}
        <div
          className="reveal reveal-d2"
          style={{
            background: "linear-gradient(140deg, #edfaf1 0%, #ffffff 100%)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 20,
            padding: 40,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              background: "radial-gradient(rgba(0,0,0,0.03), transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 24,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#0d0e14",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 900,
                background: "rgba(0,0,0,0.07)",
                color: "#0d0e14",
              }}
            >
              ✓
            </span>
            The MailPackr Way
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {GOODS.map((g) => (
              <li
                key={g.title}
                style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 15, lineHeight: 1.55 }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 800,
                    background: "rgba(0,0,0,0.05)",
                    color: "#0d0e14",
                    border: "1px solid rgba(0,0,0,0.12)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {g.icon}
                </span>
                <span style={{ color: "rgba(13,14,20,0.65)", fontFamily: "var(--font-body)" }}>
                  <strong style={{ color: "#0d0e14", fontWeight: 700 }}>{g.title}</strong>
                  {". "}
                  {g.desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Free badge */}
          <div
            style={{
              marginTop: 28,
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 14,
              padding: "16px 24px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 52,
                fontWeight: 800,
                color: "#0d0e14",
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              $0
            </div>
            <div style={{ fontSize: 13, color: "rgba(13,14,20,0.5)", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
              <strong style={{ color: "#0d0e14", display: "block", fontSize: 15 }}>
                Email Verification
              </strong>
              Free forever, zero asterisks
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
