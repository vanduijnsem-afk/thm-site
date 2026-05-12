"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Op eerste render: kijk naar localStorage of system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = saved ?? (prefersLight ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <>
      {/* ===== NAV ===== */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <img src="/logo-full.png" alt="THM Partners" />
          </a>
          <div className="nav-links">
            <a href="#diensten">Diensten</a>
            <a href="#waarom">Waarom wij</a>
            <a href="#werkwijze">Werkwijze</a>
            <a href="#overons">Over ons</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Schakel naar light mode" : "Schakel naar dark mode"}
          >
            {/* Moon icon (shown in dark mode) */}
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            {/* Sun icon (shown in light mode) */}
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
          <a href="#contact" className="nav-cta">Gratis gesprek</a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <span className="hero-badge">Marketing &amp; Media — organisch én betaald</span>
          <h1>
            Meer klanten. <span className="grad">Meer zichtbaarheid.</span> Meer groei.
          </h1>
          <p className="hero-sub">
            Wij helpen ondernemingen groeien met slimme SEO, sterke videocontent en
            doelgerichte marketingstrategieën. Heb je budget? Dan schalen we sneller
            met ads. Geen budget? Dan bouwen we organisch op.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">
              Plan een gratis gesprek
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#werkwijze" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Bekijk onze aanpak
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <span className="stat-num">50+</span>
              <span className="stat-label">Projecten afgerond</span>
            </div>
            <div>
              <span className="stat-num">2x</span>
              <span className="stat-label">Gemiddelde groei</span>
            </div>
            <div>
              <span className="stat-num">100%</span>
              <span className="stat-label">Klanttevredenheid</span>
            </div>
            <div>
              <span className="stat-num">7+</span>
              <span className="stat-label">Jaar ervaring samen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIENSTEN ===== */}
      <section id="diensten">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow">Onze diensten</span>
            <h2 className="section-title">
              Alles wat je nodig hebt om <span className="grad">te groeien</span>
            </h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="service-title">Lokale SEO</h3>
              <p className="service-desc">
                Verschijn bovenaan in Google Maps en lokale zoekresultaten. Meer aanvragen
                van klanten uit jouw regio.
              </p>
              <ul className="service-list">
                <li>Google Bedrijfsprofiel optimalisatie</li>
                <li>Lokale zoekwoorden strategie</li>
                <li>Reviews &amp; reputatiemanagement</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <h3 className="service-title">Event films &amp; bedrijfsvideo</h3>
              <p className="service-desc">
                Professionele aftermovies, promotievideo&apos;s en bedrijfsverhalen die jouw
                merk tot leven brengen.
              </p>
              <ul className="service-list">
                <li>Aftermovies &amp; evenementvideo&apos;s</li>
                <li>Bedrijfspresentaties</li>
                <li>Direct bruikbaar voor marketing</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3 className="service-title">Short-form content</h3>
              <p className="service-desc">
                TikTok, Instagram Reels en YouTube Shorts die bereik en vertrouwen opbouwen
                bij jouw doelgroep.
              </p>
              <ul className="service-list">
                <li>Regelmatige contentproductie</li>
                <li>Platform-specifieke optimalisatie</li>
                <li>Trending formats &amp; storytelling</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="service-title">Marketing &amp; strategie</h3>
              <p className="service-desc">
                Van organische contentstrategie tot gerichte advertentiecampagnes. Met of
                zonder budget — wij laten jouw merk groeien.
              </p>
              <ul className="service-list">
                <li>Contentstrategie op maat</li>
                <li>Advertentiestrategie &amp; campagnes</li>
                <li>Positionering &amp; leadgeneratie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAAROM WIJ ===== */}
      <section id="waarom">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Waarom wij</span>
            <h2 className="section-title">
              Geen standaard bureau. <span className="grad">Wel resultaat.</span>
            </h2>
          </div>

          <div className="benefits-grid">
            {[
              {
                title: "Alles onder één dak",
                desc: "Strategie, contentproductie en uitvoering vanuit één team.",
              },
              {
                title: "Focus op meetbare groei",
                desc: "Geen loze beloftes — wij sturen op resultaten die je kunt zien.",
              },
              {
                title: "Organisch én betaald",
                desc: "Geen budget? Geen probleem. Wél budget? Dan schalen we sneller.",
              },
              {
                title: "Persoonlijke aanpak",
                desc: "Geen standaardpakketten. Wij luisteren, analyseren en leveren op maat.",
              },
              {
                title: "Snelle levertijden",
                desc: "Kort op de bal. Content en resultaten zonder maanden wachten.",
              },
              {
                title: "Lokaal gespecialiseerd",
                desc: "Wij kennen de markt en weten hoe lokale bedrijven groeien.",
              },
            ].map((b) => (
              <div key={b.title} className="benefit">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WERKWIJZE ===== */}
      <section id="werkwijze">
        <div className="container">
          <div className="section-head left">
            <span className="eyebrow blue">Werkwijze</span>
            <h2 className="section-title">
              Van strategie naar <span className="grad">resultaat</span>
            </h2>
          </div>

          <div className="steps-grid">
            <div>
              <div className="step-num">01</div>
              <h3 className="step-title">Analyse &amp; strategie</h3>
              <p className="step-desc">
                We duiken in je bedrijf, markt en concurrentie. Samen bepalen we de beste
                aanpak voor groei.
              </p>
            </div>
            <div>
              <div className="step-num">02</div>
              <h3 className="step-title">Creatie &amp; productie</h3>
              <p className="step-desc">
                Van videocontent tot SEO-optimalisatie — wij produceren alles wat nodig
                is om op te vallen.
              </p>
            </div>
            <div>
              <div className="step-num">03</div>
              <h3 className="step-title">Publicatie &amp; optimalisatie</h3>
              <p className="step-desc">
                Content gaat live op de juiste kanalen. We monitoren, testen en
                optimaliseren continu.
              </p>
            </div>
            <div>
              <div className="step-num">04</div>
              <h3 className="step-title">Continue groei</h3>
              <p className="step-desc">
                Maandelijkse rapportages, bijsturing en nieuwe content. Jouw groei stopt
                nooit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOOR WIE ===== */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow blue">Voor wie</span>
            <h2 className="section-title">
              Voor ondernemers die <span className="grad">willen groeien</span>
            </h2>
            <p className="section-sub">
              Kleine tot middelgrote bedrijven (1–50 medewerkers) die lokaal sterker
              willen worden en structureel meer klanten willen aantrekken.
            </p>
          </div>

          <div className="audience-grid">
            {[
              {
                name: "Lokale bedrijven",
                icon: (
                  <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="9" y1="6" x2="9.01" y2="6" />
                    <line x1="15" y1="6" x2="15.01" y2="6" />
                    <line x1="9" y1="10" x2="9.01" y2="10" />
                    <line x1="15" y1="10" x2="15.01" y2="10" />
                    <line x1="9" y1="14" x2="9.01" y2="14" />
                    <line x1="15" y1="14" x2="15.01" y2="14" />
                  </svg>
                ),
              },
              {
                name: "Dienstverleners",
                icon: (
                  <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                ),
              },
              {
                name: "Horeca",
                icon: (
                  <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                ),
              },
              {
                name: "Retail & e-commerce",
                icon: (
                  <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                ),
              },
              {
                name: "Tech & SaaS",
                icon: (
                  <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
              },
              {
                name: "Bouw & installatie",
                icon: (
                  <svg className="audience-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
              },
            ].map((a) => (
              <div key={a.name} className="audience-card">
                {a.icon}
                <div className="audience-name">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OVER ONS ===== */}
      <section id="overons">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Over ons</span>
            <h2 className="section-title">
              Twee <span className="grad">gedreven</span> ondernemers
            </h2>
            <p className="section-sub">
              Wij zijn Thomas en Sem — twee jonge ondernemers met verschillende
              achtergronden maar dezelfde drive: bedrijven helpen groeien met marketing
              die écht impact maakt. Samen brengen we strategie en creatie samen onder
              één dak.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <h3 className="team-name">Thomas Ham</h3>
              <p className="team-role">Strategie &amp; Marketing — THM Partners</p>
              <span className="team-badge">3+ jaar ervaring</span>
              <p className="team-bio">
                Thomas is de strategische kracht achter het duo. Met meer dan 3 jaar
                ervaring in marketing en communicatie weet hij precies hoe je een merk
                positioneert, een doelgroep bereikt en resultaten behaalt. Van
                contentstrategie tot campagneplanning — Thomas vertaalt bedrijfsdoelen
                naar concrete groeiplannen die werken.
              </p>
              <div className="team-tags">
                <span className="team-tag">Marketingstrategie</span>
                <span className="team-tag">Contentstrategie</span>
                <span className="team-tag">Merkpositionering</span>
                <span className="team-tag">Campagneplanning</span>
                <span className="team-tag">Leadgeneratie</span>
              </div>
            </div>

            <div className="team-card">
              <h3 className="team-name">Sem van Duijn</h3>
              <p className="team-role">Videografie &amp; Media — THM Partners</p>
              <span className="team-badge">4+ jaar ervaring</span>
              <p className="team-bio">
                Sem is de creatieve motor. Met ruim 4 jaar ervaring in videografie,
                editing, (social) media en Online Marketing weet hij als geen ander hoe
                je verhalen vertelt die blijven hangen. Van aftermovies tot short-form
                content — Sem combineert technische precisie met een creatief oog dat
                iedere productie naar een hoger niveau tilt.
              </p>
              <div className="team-tags">
                <span className="team-tag">Videografie</span>
                <span className="team-tag">Video editing</span>
                <span className="team-tag">Social media</span>
                <span className="team-tag">Short-form content</span>
                <span className="team-tag">Kleurgrading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact">
        <div className="container">
          <div className="contact-head">
            <span className="contact-eyebrow">Contact</span>
            <h2 className="section-title">
              Neem <span className="grad">contact</span> op
            </h2>
          </div>

          <div className="contact-intro">
            <p>
              <strong>Vragen?</strong> Mail ons dan via{" "}
              <a href="mailto:contact@THMpartners.nl">contact@THMpartners.nl</a>
            </p>
            <p>
              <strong>Wil je een gratis gesprek inplannen?</strong> Stuur ons ook een
              mailtje en we plannen het in!
            </p>
            <p>
              <strong>Heb je ons dringend nodig?</strong> Bel ons dan direct.
            </p>
          </div>

          <div className="contact-cards">
            <div className="contact-card" style={{ maxWidth: 420, margin: "0 auto" }}>
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-card-label">E-mail</div>
                <div className="contact-card-value">contact@THMpartners.nl</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">Telefoon</div>
                  <div className="contact-card-value">06 10244558</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">Werkgebied</div>
                  <div className="contact-card-value">Heel Nederland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SLOT ===== */}
      <section className="cta-slot">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">
              Klaar om te <span className="grad">groeien</span>?
            </h2>
            <p className="cta-sub">
              Plan een vrijblijvend gesprek en ontdek hoe wij jouw bedrijf meer
              zichtbaarheid, klanten en omzet bezorgen — organisch of met slimme ads.
            </p>
            <a href="mailto:contact@THMpartners.nl" className="btn-primary">
              Start jouw groeiplan
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <img src="/logo-full.png" alt="THM Partners" />
          <div>© 2026 THM Partners — Alle rechten voorbehouden</div>
        </div>
      </footer>
    </>
  );
}
