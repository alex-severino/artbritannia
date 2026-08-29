"use client";

const BRAND_LINES = ["Art", "Britannia"] as const;

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
