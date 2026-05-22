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
      <Link
        href="/"
        style={{
          textDecoration: "none",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: "-0.6px",
          color: "#0d0e14",
        }}
      >
        MailPackr
      </Link>

      <p style={{ fontSize: 13, color: "#0d0e14" }}>
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
              color: "#0d0e14",
              textDecoration: "none",
              marginLeft: 24,
              transition: "opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
