"use client";

import { useEffect, useRef } from "react";

const RAW_EMAILS = [
  { addr: "alex@acme.com", type: "c", tag: "VALID" },
  { addr: "sara@startup.io", type: "c", tag: "VALID" },
  { addr: "team@tempmail.xyz", type: "r", tag: "RISKY" },
  { addr: "ceo@bigcorp.co", type: "c", tag: "VALID" },
  { addr: "noreply@broken.biz", type: "b", tag: "BAD" },
  { addr: "joe@realco.com", type: "c", tag: "VALID" },
  { addr: "test@fakedomain.net", type: "b", tag: "BAD" },
  { addr: "info@catchall.org", type: "r", tag: "RISKY" },
];

const SENT = ["alex@acme.com", "sara@startup.io", "ceo@bigcorp.co", "joe@realco.com"];
const BLOCKED = ["team@tempmail.xyz", "noreply@broken.biz", "test@fakedomain.net", "info@catchall.org"];

const CHECKS = [
  { k: "Syntax check", v: "✓" },
  { k: "MX record", v: "✓" },
  { k: "SMTP ping", v: "✓" },
  { k: "Disposable detect", v: "✓" },
  { k: "Catch-all flag", v: "✓" },
];

const DOT_COLORS = { c: "#0d0e14", r: "oklch(80% 0.18 80)", b: "oklch(65% 0.22 25)" };
const ROW_BG = { c: "rgba(0,0,0,0.04)", r: "rgba(255,200,60,0.08)", b: "rgba(255,80,40,0.08)" };
const ROW_BORDER = { c: "rgba(0,0,0,0.1)", r: "rgba(255,200,60,0.2)", b: "rgba(255,80,40,0.2)" };
const ROW_COLOR = { c: "#0d0e14", r: "oklch(80% 0.18 80)", b: "oklch(65% 0.22 25)" };
const TAG_BG = { c: "rgba(0,0,0,0.07)", r: "rgba(255,200,60,0.15)", b: "rgba(255,80,40,0.15)" };

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 24px",
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 60 }}>
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
            How It Works
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
            Your list goes in.
            <br />
            Only{" "}
            <span style={{ color: "#0d0e14" }}>clean emails</span> go out.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(13,14,20,0.5)",
              maxWidth: 520,
              lineHeight: 1.75,
              fontFamily: "var(--font-body)",
            }}
          >
            MailPackr scans every address in real time — routing clean emails
            to delivery, and silently dropping risky and bad addresses before
            they hurt your sender score.
          </p>
        </div>

        {/* Diagram — 3-col on desktop, stacked on mobile */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 80px 1fr 80px 1fr",
            alignItems: "center",
          }}
        >
          {/* Input list */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 18,
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(13,14,20,0.4)",
                marginBottom: 12,
                paddingBottom: 12,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                fontFamily: "var(--font-body)",
              }}
            >
              Your Raw List
            </div>
            {RAW_EMAILS.map((e) => (
              <div
                key={e.addr}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  background: ROW_BG[e.type as keyof typeof ROW_BG],
                  border: `1px solid ${ROW_BORDER[e.type as keyof typeof ROW_BORDER]}`,
                  color: ROW_COLOR[e.type as keyof typeof ROW_COLOR],
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: DOT_COLORS[e.type as keyof typeof DOT_COLORS],
                    flexShrink: 0,
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "monospace", fontSize: 12, flex: 1 }}>
                  {e.addr}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.5px",
                    background: TAG_BG[e.type as keyof typeof TAG_BG],
                    color: ROW_COLOR[e.type as keyof typeof ROW_COLOR],
                    marginLeft: "auto",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {e.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Arrow in */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.14), rgba(0,0,0,0.3))",
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid rgba(0,0,0,0.4)",
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                color: "rgba(13,14,20,0.4)",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginTop: 6,
                textAlign: "center",
                fontFamily: "var(--font-body)",
              }}
            >
              Passes
              <br />
              through
            </span>
          </div>

          {/* Engine box */}
          <div
            style={{
              background: "linear-gradient(160deg, #edf7f1 0%, #ffffff 100%)",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 18,
              padding: "28px 20px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <svg
              viewBox="0 0 56 56"
              fill="none"
              style={{ width: 56, height: 56, margin: "0 auto 12px" }}
            >
              <path
                d="M28 4L8 12v18c0 12 12 20 20 22 8-2 20-10 20-22V12L28 4Z"
                fill="rgba(13,14,20,0.05)"
                stroke="rgba(13,14,20,0.8)"
                strokeWidth="1.5"
              />
              <path
                d="M20 28l5 5 11-11"
                stroke="rgba(13,14,20,0.8)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="28"
                cy="28"
                r="10"
                stroke="rgba(13,14,20,0.12)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </svg>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 800,
                color: "#0d0e14",
                letterSpacing: "-0.5px",
                marginBottom: 8,
              }}
            >
              MAILPACKR
            </div>
            <div
              style={{
                fontSize: 11,
                color: "rgba(13,14,20,0.45)",
                marginBottom: 16,
                lineHeight: 1.4,
                fontFamily: "var(--font-body)",
              }}
            >
              Verification Engine
              <br />
              Real-time · Built-in · Free
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {CHECKS.map((c) => (
                <div
                  key={c.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    padding: "6px 10px",
                    background: "rgba(0,0,0,0.03)",
                    borderRadius: 6,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span style={{ color: "rgba(13,14,20,0.45)" }}>{c.k}</span>
                  <span style={{ color: "#0d0e14", fontWeight: 700 }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow out */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.14), rgba(0,0,0,0.3))",
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid rgba(0,0,0,0.4)",
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                color: "rgba(13,14,20,0.4)",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginTop: 6,
                textAlign: "center",
                fontFamily: "var(--font-body)",
              }}
            >
              Sorted
              <br />
              instantly
            </span>
          </div>

          {/* Output */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Sent */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                  color: "#0d0e14",
                  fontFamily: "var(--font-body)",
                }}
              >
                ✓ Sent to Inbox
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {SENT.map((addr) => (
                  <div
                    key={addr}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      padding: "7px 10px",
                      background: "rgba(0,0,0,0.03)",
                      borderRadius: 7,
                      fontFamily: "monospace",
                    }}
                  >
                    <span style={{ color: "#0d0e14", fontSize: 11 }}>✓</span>
                    <span style={{ color: "#0d0e14", opacity: 0.8 }}>{addr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blocked */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid rgba(255,80,40,0.2)",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                  color: "oklch(65% 0.22 25)",
                  fontFamily: "var(--font-body)",
                }}
              >
                ✕ Blocked — Not Sent
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {BLOCKED.map((addr) => (
                  <div
                    key={addr}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      padding: "7px 10px",
                      background: "rgba(255,80,40,0.06)",
                      borderRadius: 7,
                      textDecoration: "line-through",
                      opacity: 0.6,
                      fontFamily: "monospace",
                    }}
                  >
                    <span style={{ color: "oklch(65% 0.22 25)", fontSize: 11 }}>✕</span>
                    {addr}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
