"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTA() {
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
      style={{
        padding: "130px 24px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 600,
          background: "radial-gradient(ellipse, rgba(0,0,0,0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="reveal"
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
        No credit card. No contracts.
      </div>

      <h2
        className="reveal"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 4.5vw, 62px)",
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: 1.04,
          maxWidth: 820,
          margin: "14px auto 22px",
          color: "#0d0e14",
        }}
      >
        Stop paying to{" "}
        <span style={{ color: "#0d0e14" }}>verify</span>, start paying
        <br />
        only to <span style={{ color: "#0d0e14" }}>send</span>.
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: 18,
          color: "rgba(13,14,20,0.5)",
          maxWidth: 480,
          margin: "0 auto 52px",
          lineHeight: 1.75,
          fontFamily: "var(--font-body)",
        }}
      >
        Verification is free forever.
      </p>

      <div className="reveal">
        <Link
          href="https://app.mailpackr.com/auth"
          style={{
            background: "#0d0e14",
            color: "#f5f5f2",
            fontSize: 18,
            fontWeight: 700,
            padding: "18px 52px",
            borderRadius: 10,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            fontFamily: "var(--font-body)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
          }}
        >
          Create Free Account
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <p
          style={{
            marginTop: 18,
            fontSize: 13,
            color: "rgba(13,14,20,0.25)",
            fontFamily: "var(--font-body)",
          }}
        >
          Free verification forever · Unlimited contacts · Cancel anytime
        </p>
      </div>
    </section>
  );
}
