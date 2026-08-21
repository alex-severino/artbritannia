"use client";

import type { PointerEvent } from "react";

const BRAND_LINES = ["Art", "Britannia"] as const;

const VENTURES = [
  { name: "posteress.com", href: "https://posteress.com" },
  { name: "digitangels.com", href: "https://digitangels.com" },
  { name: "alexdealma.com", href: "https://alexdealma.com" },
  { name: "studiobetonika.com", href: "https://studiobetonika.com" },
  { name: "gicleeclub.com", href: null },
] as const;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function BrandLine({ text, lineIndex }: { text: string; lineIndex: number }) {
  return (
    <span className="line">
      <span style={{ display: "inline-flex" }}>
        {[...text].map((ch, i) => (
          <span
            key={i}
            className="char"
            style={{
              animationDelay: `${0.06 + lineIndex * 0.18 + i * 0.038}s`,
            }}
          >
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
}

function VentureLink({ name, href }: { name: string; href: string }) {
  const onPointerMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion()) return;
    const link = e.currentTarget;
    const r = link.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    link.style.transform = `translateX(${x * 10}px)`;
  };

  const onPointerLeave = (e: PointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion()) return;
    const link = e.currentTarget;
    link.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
    link.style.transform = "translateX(0)";
    window.setTimeout(() => {
      link.style.transition = "";
    }, 500);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span className="entry-name">{name}</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="aura" aria-hidden="true" />
      <div className="wrap">
        <header>
          <h1 className="brand" aria-label="Art Britannia">
            {BRAND_LINES.map((text, lineIndex) => (
              <BrandLine key={text} text={text} lineIndex={lineIndex} />
            ))}
          </h1>
          <p className="tagline">The studio group behind independent ventures in design, brand, tech, gaming, visual art and music.</p>
        </header>

        <section className="projects" aria-label="Ventures">
          <p className="projects-label">Ventures</p>
          <div className="rule" aria-hidden="true" />
          <ul className="register">
            {VENTURES.map((venture) => (
              <li key={venture.name}>
                {venture.href ? (
                  <VentureLink name={venture.name} href={venture.href} />
                ) : (
                  <span className="soon">
                    <span className="entry-name">
                      {venture.name}
                      <span className="soon-note">(coming soon)</span>
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <p className="company">Art Britannia Ltd · Company No. 16631916</p>
          <div className="row">
            <span>12 Mulberry Place, Pinnell Road, London, SE9 6AR</span>
            <span>hello@artbritannia.com</span>
          </div>
        </footer>
      </div>
    </>
  );
}
