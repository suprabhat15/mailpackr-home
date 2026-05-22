"use client";

const ITEMS = [
  "ZeroBounce: $0.008 per verification",
  "NeverBounce: $0.01 per address",
  "Mailchimp: charges per contact, not per send",
  "100k list → $800 before you send anything",
  "MailPackr: verify FREE. Send for $10 per 10k.",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(255,80,40,0.06)",
        borderTop: "1px solid rgba(255,80,40,0.15)",
        borderBottom: "1px solid rgba(255,80,40,0.15)",
        padding: "13px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        className="ticker-animate"
        style={{ display: "inline-flex", gap: 56 }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "oklch(55% 0.22 25)",
              letterSpacing: "0.2px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                background: "oklch(55% 0.22 25)",
                borderRadius: "50%",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
