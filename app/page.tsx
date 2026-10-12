"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STUDIOS = [
  { name: "Visual Art", note: "Original painting and commissioned work." },
  { name: "Design & Brand", note: "Identity, art direction and graphic design." },
  { name: "Technology", note: "Websites, software and digital products." },
  { name: "Gaming", note: "Games and interactive work." },
  { name: "Prints & Editions", note: "Posters and fine-art prints." },
  { name: "Music", note: "Composition, recording and performance." },
] as const;

const NUMERALS = ["I", "II", "III", "IV", "V", "VI"];

function Trident({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v35" />
      <path d="M4 5v5c0 4 3.5 6.5 8 6.5s8-2.5 8-6.5V5" />
      <path d="M12 3 9.8 6.6h4.4ZM4 5 2.2 8.4h3.6ZM20 5l-1.8 3.4h3.6Z" fill="currentColor" />
      <path d="M9 24h6" />
    </svg>
  );
}

// One engraved glyph per discipline, drawn as a single-weight line.
function Glyph({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (index) {
    case 0: // brush
      return (
        <svg {...common}>
          <path d="M34 8 20 24" />
          <path d="M38 6c2 2 2 4 0 6L24 27l-4-4L34 9c1.5-1.5 3-2 4-3Z" />
          <path d="M19 25c-4 0-7 3-7 7 0 3-2 5-4 6 6 2 14 0 16-7 1-3 0-5-2-6" />
        </svg>
      );
    case 1: // dividers
      return (
        <svg {...common}>
          <circle cx="24" cy="9" r="2.5" />
          <path d="M24 11.5 13 40M24 11.5 35 40" />
          <path d="M17 30h14" />
          <path d="M9 40h8M31 40h8" />
        </svg>
      );
    case 2: // node
      return (
        <svg {...common}>
          <path d="M24 6 39 15v18L24 42 9 33V15Z" />
          <circle cx="24" cy="24" r="4" />
          <path d="M24 6v14M24 28v14M9 15l11 7M39 15l-11 7M9 33l11-7M39 33l-11-7" />
        </svg>
      );
    case 3: // die
      return (
        <svg {...common}>
          <rect x="9" y="9" width="30" height="30" rx="4" />
          <circle cx="17" cy="17" r="1.6" fill="currentColor" />
          <circle cx="24" cy="24" r="1.6" fill="currentColor" />
          <circle cx="31" cy="31" r="1.6" fill="currentColor" />
          <circle cx="31" cy="17" r="1.6" fill="currentColor" />
          <circle cx="17" cy="31" r="1.6" fill="currentColor" />
        </svg>
      );
    case 4: // seal
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="32" />
          <rect x="13" y="13" width="22" height="22" />
          <path d="M18 20h12M18 24h12M18 28h7" />
        </svg>
      );
    default: // lyre
      return (
        <svg {...common}>
          <path d="M14 8c-3 8-3 17 2 22 3 3 13 3 16 0 5-5 5-14 2-22" />
          <path d="M14 8c0 3 2 4 4 4M34 8c0 3-2 4-4 4" />
          <path d="M20 12v21M24 12v21M28 12v21" />
          <path d="M16 38h16M24 33v5" />
        </svg>
      );
  }
}

function Key({ className = "" }: { className?: string }) {
  return <div className={`key ${className}`} aria-hidden="true" />;
}

function Letters({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="word" aria-hidden="true">
      {[...text].map((ch, i) => (
        <span key={i} className="mask">
          <span className="char" style={{ animationDelay: `${delay + i * 0.06}s` }}>
            {ch}
          </span>
        </span>
      ))}
    </span>
  );
}

function usePageEffects() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return scrolled;
}

export default function HomePage() {
  const scrolled = usePageEffects();

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="mark" aria-label="Art Britannia, back to top">
          <Trident />
        </a>
        <div className="nav-links">
          <a href="#studios">Studios</a>
          <a href="#enquiries">Enquiries</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="portico">
            <svg className="pediment" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,20 50,1 100,20" />
              <polygon points="8,20 50,6 92,20" />
            </svg>
            <div className="entablature" aria-hidden="true" />
            <div className="bay">
              <div className="column" aria-hidden="true" />
              <div className="niche">
                <Image
                  src="/logo.jpg"
                  alt="Britannia seated with a trident and a Union shield"
                  fill
                  priority
                  sizes="(max-width: 700px) 70vw, 340px"
                />
              </div>
              <div className="column" aria-hidden="true" />
            </div>
            <div className="stylobate" aria-hidden="true" />
          </div>

          <h1 className="wordmark" aria-label="Art Britannia">
            <Letters text="ART" delay={0.3} />
            <Letters text="BRITANNIA" delay={0.55} />
          </h1>
          <p className="sub">An art creation company · London</p>
        </section>

        <Key />

        <section className="statement">
          <p data-reveal>
            Art Britannia is a group of independent studios working in painting, design, technology,
            games, print and music.
          </p>
        </section>

        <section className="studios" id="studios" aria-labelledby="studios-title">
          <div className="head" data-reveal>
            <span className="eyebrow">The Studios</span>
            <h2 id="studios-title">Six Disciplines</h2>
          </div>
          <ol className="grid">
            {STUDIOS.map((s, i) => (
              <li key={s.name} className="card" data-reveal style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                <span className="numeral">{NUMERALS[i]}</span>
                <div className="medallion">
                  <Glyph index={i} />
                </div>
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </li>
            ))}
          </ol>
        </section>

        <Key className="key-dark" />

        <section className="enquiries" id="enquiries">
          <span className="eyebrow" data-reveal>
            Enquiries
          </span>
          <a className="mail" href="mailto:hello@artbritannia.com" data-reveal>
            hello@artbritannia.com
          </a>
          <address data-reveal>12 Mulberry Place, Pinnell Road, London, SE9 6AR</address>
        </section>
      </main>

      <footer className="footer">
        <Trident className="footer-trident" />
        <p>Art Britannia Ltd · Company No. 16631916</p>
      </footer>
    </>
  );
}
