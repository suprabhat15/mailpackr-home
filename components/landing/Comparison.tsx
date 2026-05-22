"use client";

import { useEffect, useRef } from "react";

const ROWS = [
  { feature: "Email Verification", theirs: "$0.008 to $0.01 per address", ours: "Free forever", ourGood: true, theirsBad: true },
  { feature: "Pricing model", theirs: "Per-contact (even unsent)", ours: "Per-send only", ourGood: true, theirsBad: true },
  { feature: "10,000 sends", theirs: "$20 to $75/mo (contact tiers)", ours: "$10 flat", ourGood: true, theirsBad: true },
  { feature: "Contacts limit", theirs: "500 to 50k, then upgrade", ours: "Unlimited", ourGood: true, theirsBad: true },
  { feature: "Domains included", theirs: "1 (extras cost extra)", ours: "Unlimited", ourGood: true, theirsBad: true },
  { feature: "Deliverability tools", theirs: "Basic / add-on", ours: "Enterprise-grade, included", ourGood: true, theirsBad: false },
];

export default function Comparison() {
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
      id="compare"
      style={{ background: "#eeede9", position: "relative", zIndex: 1 }}
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
            Head-to-Head
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
            The numbers
            <br />
            don&apos;t lie.
          </h2>
        </div>

        <div className="reveal" style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: 48,
              fontFamily: "var(--font-body)",
            }}
          >
            <thead>
              <tr>
                {["Feature", "Mailchimp / Others", "MailPackr"].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      padding: "16px 24px",
                      textAlign: "left",
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: i === 2 ? 800 : 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: i === 2 ? "#0d0e14" : "rgba(13,14,20,0.4)",
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.feature}
                  style={{ transition: "background 0.15s" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.02)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "transparent")
                  }
                >
                  <td
                    style={{
                      padding: "17px 24px",
                      fontSize: 15,
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                      fontWeight: 600,
                      color: "#0d0e14",
                    }}
                  >
                    {row.feature}
                  </td>
                  <td
                    style={{
                      padding: "17px 24px",
                      fontSize: 15,
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                      color: row.theirsBad ? "oklch(65% 0.22 25)" : "rgba(13,14,20,0.5)",
                      fontWeight: row.theirsBad ? 600 : 400,
                    }}
                  >
                    {row.theirs}
                  </td>
                  <td
                    style={{
                      padding: "17px 24px",
                      fontSize: 15,
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                      color: row.ourGood ? "#0d0e14" : "rgba(13,14,20,0.5)",
                      fontWeight: row.ourGood ? 700 : 400,
                    }}
                  >
                    {row.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
