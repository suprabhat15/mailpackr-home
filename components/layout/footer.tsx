"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: "36px 52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        position: "relative",
        zIndex: 1,
        background: "var(--background)",
        fontFamily: "var(--font-body)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <svg
          viewBox="0 0 160 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 24 }}
        >
          <rect width="28" height="28" rx="7" fill="#0d0e14" />
          <path
            d="M6 21V9l8 6 8-6v12"
            stroke="#f5f5f2"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="36"
            y="20"
            fontFamily="Syne, sans-serif"
            fontWeight="800"
            fontSize="16"
            fill="#0d0e14"
            letterSpacing="-0.5"
          >
            MAILPACKR
          </text>
        </svg>
      </Link>

      <p style={{ fontSize: 13, color: "rgba(13,14,20,0.4)" }}>
        © {new Date().getFullYear()} MailPackr. All rights reserved.
      </p>

      <nav>
        {[
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: 13,
              color: "rgba(13,14,20,0.4)",
              textDecoration: "none",
              marginLeft: 24,
              transition: "color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#0d0e14")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(13,14,20,0.4)")
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
