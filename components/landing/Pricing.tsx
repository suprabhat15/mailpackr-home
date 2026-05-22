"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const VOLUME_BTNS = [
  { label: "10k", sends: 10000 },
  { label: "25k", sends: 25000 },
  { label: "50k", sends: 50000 },
  { label: "100k", sends: 100000 },
  { label: "250k+", sends: 250000 },
  { label: "Custom ✎", sends: -1 },
];

function fmtSends(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000) + "M";
  if (n >= 1000) return (n / 1000) + "k";
  return n.toLocaleString();
}

function getOldPrice(sends: number) {
  const verifyFee = sends * 0.008;
  const planCost = sends <= 10000 ? 45 : sends <= 25000 ? 75 : sends <= 50000 ? 130 : 230;
  return verifyFee + planCost;
}

export default function Pricing() {
  const [activeSends, setActiveSends] = useState(10000);
  const [customInput, setCustomInput] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isEnterprise = activeSends >= 250000;
  const ourPrice = isEnterprise ? 0 : activeSends * 0.001;
  const oldPrice = isEnterprise ? 0 : getOldPrice(activeSends);
  const savings = isEnterprise ? 0 : oldPrice - ourPrice;

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

  const handleVolBtn = (sends: number) => {
    if (sends === -1) {
      setShowCustom(true);
      setActiveSends(-1);
    } else {
      setShowCustom(false);
      setActiveSends(sends);
    }
  };

  const handleCustomChange = (val: string) => {
    setCustomInput(val);
    const n = parseInt(val);
    if (n && n > 0) setActiveSends(n);
  };

  const activeBtn = showCustom ? -1 : activeSends;

  const btnStyle = (sends: number): React.CSSProperties => ({
    padding: "12px 22px",
    borderRadius: 10,
    border: `1px solid ${activeBtn === sends ? "#0d0e14" : "rgba(0,0,0,0.14)"}`,
    background: activeBtn === sends ? "#0d0e14" : "transparent",
    color: activeBtn === sends ? "#ffffff" : "rgba(13,14,20,0.45)",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "var(--font-body)",
  });

  return (
    <div
      ref={sectionRef}
      id="pricing"
      style={{ background: "var(--background)", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "100px 24px" }}>
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
            Pricing
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
            Honest pricing.
            <br />
            Zero surprises.
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
            Verification, contacts, and domains are always free. You only pay
            for sends — and the rate drops as you scale.
          </p>
        </div>

        {/* Volume selector */}
        <div className="reveal" style={{ marginTop: 48 }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: 10,
              fontSize: 13,
              color: "rgba(13,14,20,0.45)",
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
            }}
          >
            How many emails will you send?
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: showCustom ? 14 : 0,
            }}
          >
            {VOLUME_BTNS.map((btn) => (
              <button
                key={btn.label}
                onClick={() => handleVolBtn(btn.sends)}
                style={btnStyle(btn.sends)}
                onMouseEnter={(e) => {
                  if (activeBtn !== btn.sends) {
                    (e.currentTarget as HTMLElement).style.color = "#0d0e14";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeBtn !== btn.sends) {
                    (e.currentTarget as HTMLElement).style.color = "rgba(13,14,20,0.45)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.14)";
                  }
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
          {showCustom && (
            <div style={{ textAlign: "center", marginTop: 14 }}>
              <input
                type="number"
                min="1000"
                step="1000"
                placeholder="Enter number of emails"
                value={customInput}
                onChange={(e) => handleCustomChange(e.target.value)}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#0d0e14",
                  padding: "12px 18px",
                  borderRadius: 10,
                  fontSize: 16,
                  fontFamily: "var(--font-body)",
                  width: "100%",
                  maxWidth: 320,
                  outline: "none",
                  textAlign: "center",
                }}
              />
            </div>
          )}
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isEnterprise ? "1fr 1fr" : "repeat(3, 1fr)",
            gap: 20,
            marginTop: 32,
          }}
          className="pricing-grid"
        >
          {/* Starter */}
          <div
            className="reveal"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 20,
              padding: 36,
              position: "relative",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.14)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(13,14,20,0.4)",
                marginBottom: 16,
                fontFamily: "var(--font-body)",
              }}
            >
              Starter
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: "-3px",
                lineHeight: 1,
                marginBottom: 4,
                color: "#0d0e14",
              }}
            >
              <sup style={{ fontSize: 22, verticalAlign: "top", marginTop: 12, letterSpacing: 0 }}>$</sup>
              1
              <sub style={{ fontSize: 16, color: "rgba(13,14,20,0.4)", fontWeight: 400, letterSpacing: 0 }}>/mo</sub>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(13,14,20,0.5)",
                marginBottom: 28,
                paddingBottom: 28,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                lineHeight: 1.6,
                fontFamily: "var(--font-body)",
              }}
            >
              Perfect for getting started — low volume, full features.
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 32,
              }}
            >
              {["Free email verification", "Unlimited contacts", "Unlimited domains", "Basic analytics", "Email support"].map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "rgba(13,14,20,0.7)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span style={{ color: "#0d0e14", fontSize: 13, fontWeight: 700 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="https://app.mailpackr.com/auth"
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.14)",
                background: "transparent",
                color: "#0d0e14",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                transition: "all 0.2s",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.14)";
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Growth / Enterprise (dynamic) */}
          {isEnterprise ? (
            <div
              className="reveal reveal-d1"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 20,
                padding: 36,
                transition: "transform 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(13,14,20,0.4)",
                  marginBottom: 16,
                  fontFamily: "var(--font-body)",
                }}
              >
                Enterprise
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 38,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                  marginBottom: 4,
                  color: "#0d0e14",
                }}
              >
                Custom
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(13,14,20,0.5)",
                  marginBottom: 28,
                  paddingBottom: 28,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-body)",
                }}
              >
                Volume pricing tailored to your needs.
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {["Everything in Growth plan", "Volume discounts", "Dedicated account manager", "Dedicated IP options"].map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "rgba(13,14,20,0.7)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span style={{ color: "#0d0e14", fontSize: 13, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@mailpackr.com"
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.14)",
                  background: "transparent",
                  color: "#0d0e14",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-body)",
                }}
              >
                Talk to Sales
              </a>
            </div>
          ) : (
            <div
              className="reveal reveal-d1"
              style={{
                background: "linear-gradient(160deg, #edf7f1 0%, #ffffff 100%)",
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 20,
                padding: 36,
                position: "relative",
                boxShadow: "0 0 70px rgba(0,0,0,0.04)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Most Popular tag */}
              <div
                style={{
                  position: "absolute",
                  top: -13,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0d0e14",
                  color: "#ffffff",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderRadius: 100,
                  whiteSpace: "nowrap",
                  fontFamily: "var(--font-body)",
                }}
              >
                Most Popular
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#0d0e14",
                  marginBottom: 16,
                  fontFamily: "var(--font-body)",
                }}
              >
                Growth
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 52,
                  fontWeight: 800,
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  marginBottom: 4,
                  color: "#0d0e14",
                  transition: "all 0.3s",
                }}
              >
                <sup style={{ fontSize: 22, verticalAlign: "top", marginTop: 12, letterSpacing: 0 }}>$</sup>
                {Math.round(ourPrice).toLocaleString()}
                <sub
                  style={{
                    fontSize: 16,
                    color: "rgba(13,14,20,0.4)",
                    fontWeight: 400,
                    letterSpacing: 0,
                  }}
                >
                  /{fmtSends(activeSends)}
                </sub>
              </div>
              {savings > 0 && (
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(13,14,20,0.5)",
                    marginTop: 4,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  vs{" "}
                  <span style={{ color: "oklch(65% 0.22 25)", fontWeight: 700, fontSize: 15 }}>
                    ${Math.round(oldPrice).toLocaleString()}
                  </span>{" "}
                  elsewhere —{" "}
                  <span style={{ color: "#0d0e14", fontWeight: 700 }}>
                    save ${Math.round(savings).toLocaleString()}
                  </span>
                </div>
              )}
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(13,14,20,0.5)",
                  marginBottom: 28,
                  paddingBottom: 28,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  lineHeight: 1.6,
                  marginTop: 8,
                  fontFamily: "var(--font-body)",
                }}
              >
                Pay-as-you-go. No contact fees. Scale up or down any time.
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {["Free verification — always", "Unlimited contacts", "Unlimited domains", "Full campaign analytics", "Priority support"].map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "rgba(13,14,20,0.7)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span style={{ color: "#0d0e14", fontSize: 13, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="https://app.mailpackr.com/auth"
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 10,
                  border: "1px solid #0d0e14",
                  background: "#0d0e14",
                  color: "#f5f5f2",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                  transition: "all 0.2s",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 6px 28px rgba(0,0,0,0.25)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
                  el.style.transform = "translateY(0)";
                }}
              >
                Start Sending Now →
              </Link>
            </div>
          )}

          {/* Enterprise (only shown when not in enterprise mode) */}
          {!isEnterprise && (
            <div
              className="reveal reveal-d2"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 20,
                padding: 36,
                transition: "transform 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(13,14,20,0.4)",
                  marginBottom: 16,
                  fontFamily: "var(--font-body)",
                }}
              >
                Enterprise
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 38,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                  marginBottom: 4,
                  color: "#0d0e14",
                }}
              >
                Custom
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(13,14,20,0.5)",
                  marginBottom: 28,
                  paddingBottom: 28,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-body)",
                }}
              >
                For high-volume senders who need power and support.
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {["Everything in Growth plan", "Volume discounts", "Dedicated account manager", "Dedicated IP options"].map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "rgba(13,14,20,0.7)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span style={{ color: "#0d0e14", fontSize: 13, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@mailpackr.com"
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.14)",
                  background: "transparent",
                  color: "#0d0e14",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-body)",
                }}
              >
                Talk to Sales
              </a>
            </div>
          )}
        </div>

        <p
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 13,
            color: "rgba(13,14,20,0.45)",
            lineHeight: 1.6,
            fontFamily: "var(--font-body)",
          }}
        >
          Rates scale down with volume — enterprise customers sending 250k+ emails get custom rates. No verification fees ever included.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
