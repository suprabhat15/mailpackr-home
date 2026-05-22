"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, animId: number;

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.35 + 0.08,
    }));

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -4) d.x = W + 4;
        if (d.x > W + 4) d.x = -4;
        if (d.y < -4) d.y = H + 4;
        if (d.y > H + 4) d.y = -4;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13,14,20,${d.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.35,
        }}
      />

      <section
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "130px 24px 90px",
          overflow: "hidden",
          background: "var(--background)",
        }}
      >
        {/* Glows */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1000,
            height: 700,
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.03) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -200,
            width: 600,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(255,100,60,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.15)",
            color: "#0d0e14",
            fontSize: 13,
            fontWeight: 600,
            padding: "7px 18px",
            borderRadius: 100,
            marginBottom: 40,
            letterSpacing: "0.3px",
            fontFamily: "var(--font-body)",
            animation: "fadeUp 0.8s ease both",
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: 7,
              height: 7,
              background: "#0d0e14",
              borderRadius: "50%",
              display: "block",
              flexShrink: 0,
            }}
          />
          Email verification is free here, ALWAYS, FOREVER
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(54px, 7.5vw, 100px)",
            lineHeight: 0.97,
            letterSpacing: "-4px",
            maxWidth: 1060,
            marginBottom: 10,
            color: "#0d0e14",
            animation: "fadeUp 0.8s 0.08s ease both",
          }}
        >
          Stop Paying
          <br />
          <span style={{ color: "#0d0e14" }}>Twice</span> to Send
          <br />
          <span style={{ color: "rgba(13,14,20,0.25)" }}>One</span> Email.
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 600,
            color: "rgba(13,14,20,0.55)",
            letterSpacing: "-0.5px",
            marginBottom: 28,
            animation: "fadeUp 0.8s 0.16s ease both",
            maxWidth: 700,
          }}
        >
          <strong style={{ color: "#0d0e14", fontWeight: 700 }}>
            Free verification.
          </strong>
          <br />
          Pay only for what you actually send.
        </p>

        {/* Body */}
        <p
          style={{
            fontSize: 17,
            color: "rgba(13,14,20,0.5)",
            maxWidth: 560,
            marginBottom: 48,
            animation: "fadeUp 0.8s 0.24s ease both",
            lineHeight: 1.75,
            fontFamily: "var(--font-body)",
          }}
        >
          Every other platform charges to verify your list, then charges again
          per contact just to send. MailPackr kills both bills. One flat rate
          per send. No hidden fees, no contact tiers, no BS.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 72,
            animation: "fadeUp 0.8s 0.32s ease both",
          }}
        >
          <Link
            href="https://app.mailpackr.com/auth"
            style={{
              background: "#0d0e14",
              color: "#f5f5f2",
              fontSize: 16,
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: 10,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 50px rgba(0,0,0,0.15)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 0 50px rgba(0,0,0,0.15)";
            }}
          >
            Start Sending
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            style={{
              background: "transparent",
              color: "#0d0e14",
              fontSize: 16,
              fontWeight: 600,
              padding: "16px 36px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.14)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(0,0,0,0.25)";
              el.style.background = "rgba(0,0,0,0.04)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(0,0,0,0.14)";
              el.style.background = "transparent";
              el.style.transform = "translateY(0)";
            }}
          >
            See How It Works
          </Link>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "flex",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            animation: "fadeUp 0.8s 0.4s ease both",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "$0", label: "Verification cost" },
            { num: "Unlimited", label: "Contacts stored" },
            { num: "Unlimited", label: "Domains included" },
            { num: "$10", label: "Per 10k sends" },
          ].map((s, i, arr) => (
            <div
              key={s.label}
              style={{
                padding: "22px 40px",
                textAlign: "center",
                borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                minWidth: 140,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: s.num.length > 3 ? 22 : 30,
                  fontWeight: 800,
                  color: "#0d0e14",
                  letterSpacing: "-1px",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(13,14,20,0.45)",
                  fontWeight: 500,
                  display: "block",
                  marginTop: 5,
                  fontFamily: "var(--font-body)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
