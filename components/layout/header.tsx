"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 52px",
        borderBottom: "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s",
        fontFamily: "var(--font-body)",
        ...(scrolled
          ? {
              background: "rgba(245,245,242,0.95)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(0,0,0,0.1)",
            }
          : {}),
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
      >
        <svg
          style={{ height: 28 }}
          viewBox="0 0 180 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="#0d0e14" />
          <path
            d="M7 24V10l9 7 9-7v14"
            stroke="#f5f5f2"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="40"
            y="23"
            fontFamily="Syne, sans-serif"
            fontWeight="800"
            fontSize="18"
            fill="#0d0e14"
            letterSpacing="-0.5"
          >
            MAILPACKR
          </text>
        </svg>
      </Link>

      <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
        {[
          { label: "How It Works", href: "#how-it-works" },
          { label: "Pricing", href: "#pricing" },
          { label: "Compare", href: "#compare" },
          { label: "FAQ", href: "#faq" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: "rgba(13,14,20,0.5)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.1px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#0d0e14")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(13,14,20,0.5)")
            }
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://app.mailpackr.com/auth"
          style={{
            background: "#0d0e14",
            color: "#ffffff",
            fontSize: 14,
            fontWeight: 700,
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
            transition: "box-shadow 0.2s, transform 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.22)";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
            el.style.transform = "translateY(0)";
          }}
        >
          Start Free →
        </Link>
      </div>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#0d0e14", padding: "8px" }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(245,245,242,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "Compare", href: "#compare" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#0d0e14", textDecoration: "none", fontSize: 16, fontWeight: 600 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.mailpackr.com/auth"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#0d0e14",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Start Free →
          </Link>
        </div>
      )}
    </nav>
  );
}
