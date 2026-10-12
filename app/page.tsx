import { Band, Medallion, Seal, Watermark } from "./plates";
import { Trident } from "./trident";

const STUDIOS = [
  { name: "Visual Art", subject: "Visual art enquiry" },
  { name: "Design Strategy", subject: "Design strategy enquiry" },
  { name: "Design Advisory & Education", subject: "Design advisory and education enquiry" },
  { name: "Art Curation & Printing", subject: "Art curation and printing enquiry" },
  { name: "Video Games", subject: "Video games enquiry" },
  { name: "Music", subject: "Music enquiry" },
];
const NUMERALS = ["I", "II", "III", "IV", "V", "VI"];

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M3 12h17m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="header wrap" id="top">
        <a href="#top" className="brand" aria-label="Art Britannia, home">
          <Trident className="brand-mark" />
          <span>Art Britannia</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#studios">Studios</a>
          <a href="#enquiries">Enquiries</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="label">London</p>
            <h1 id="hero-title">
              <span className="hero-art">Art</span> <span className="hero-britannia">Britannia</span>
            </h1>
            <p className="hero-lead">An art creation company.</p>
            <p className="hero-text">
              The studio group behind independent ventures in visual art, design strategy, design advisory and
              education, art curation and printing, video games, and music.
            </p>
            <div className="hero-actions">
              <a href="#studios" className="button">The studios <Arrow /></a>
              <a href="mailto:hello@artbritannia.com" className="quiet-link">hello@artbritannia.com</a>
            </div>
          </div>
          <Medallion />
        </section>

        <Band />

        <section className="studios wrap" id="studios" aria-labelledby="studios-title">
          <div className="studios-head">
            <div>
              <p className="label">Six disciplines, one house</p>
              <h2 id="studios-title">The <em>Studios</em></h2>
            </div>
            <p className="studios-intro">Write to any studio directly.</p>
          </div>
          <ol className="studio-grid">
            {STUDIOS.map((studio, index) => (
              <li key={studio.name}>
                <a className="studio" href={`mailto:hello@artbritannia.com?subject=${encodeURIComponent(studio.subject)}`}>
                  <Seal index={index} numeral={NUMERALS[index]} />
                  <h3>{studio.name}</h3>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="enquiries" id="enquiries" aria-labelledby="enquiries-title">
          <Watermark />
          <div className="enquiries-inner wrap">
            <Trident className="enquiries-mark" />
            <h2 id="enquiries-title" className="label">Enquiries</h2>
            <a href="mailto:hello@artbritannia.com" className="contact-link">hello<span className="at">@</span>artbritannia.com</a>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p className="microprint" aria-hidden="true">{"Art Britannia Ltd · London · ".repeat(30)}</p>
        <div className="footer-row">
          <a href="#top" className="footer-brand"><Trident className="footer-mark" />Art Britannia</a>
          <address>12 Mulberry Place, Pinnell Road<br />London SE9 6AR</address>
          <a href="#top" className="back-top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
        <p className="footer-legal">Art Britannia Ltd · Registered in England &amp; Wales · Company No. 16631916</p>
      </footer>
    </>
  );
}
