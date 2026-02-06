import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  profile,
  nav,
  projects,
  publications,
  teaching,
  awards,
  talks,
  service
} from "./content";

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "home");

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.4, 0.6] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}

export default function App() {
  const sectionIds = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(sectionIds);

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenProject(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="app">
      <TopGlow />

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Go to top">
            <span className="brandDot" />
            <span className="brandText">{profile.name}</span>
          </a>

          {/* Desktop nav */}
          <nav className="navDesktop">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`navLink ${active === n.id ? "active" : ""}`}
              >
                {n.label}
              </a>
            ))}

            <button
              className="iconBtn"
              type="button"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              ◐
            </button>

            <a className="btn small" href={profile.cvUrl} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </nav>

          {/* Mobile button */}
          <button className="iconBtn burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="menuBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setMenuOpen(false)}
          >
            <motion.div
              className="menuPanel"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseDown={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="menuTop">
                <span className="muted">Menu</span>
                <button className="iconBtn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  ✕
                </button>
              </div>

              <div className="menuLinks">
                {nav.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className={`menuLink ${active === n.id ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {n.label}
                  </a>
                ))}
              </div>

              <div className="menuActions">
                <button className="btn ghost" onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
                  Toggle theme
                </button>
                <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>
        {/* HERO */}
        <section id="home" className="section hero">
          <div className="container heroGrid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <p className="kicker">{profile.title}</p>
              <h1 className="h1">
                Research portfolio with <span className="accent">clarity</span>,{" "}
                <span className="accent">impact</span>, and modern presentation.
              </h1>
              <p className="lead">{profile.subtitle}</p>

              <div className="ctaRow">
                <a className="btn" href="#research">Research Portfolio</a>
                <a className="btn ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">CV (PDF)</a>
                <a className="btn ghost" href={`mailto:${profile.email}`}>Email</a>
              </div>

              <div className="chips">
                {profile.links.map((l) => (
                  <a key={l.label} className="chip" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>

              <p className="micro">
                <span className="muted">{profile.affiliation}</span> •{" "}
                <span className="muted">{profile.location}</span>
              </p>
            </motion.div>

            <motion.aside
              className="glassCard"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            >
              <h2 className="h3">Research snapshot</h2>
              <ul className="bullets">
                {profile.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="cardRow">
                <a className="btn small ghost" href="#publications">Publications</a>
                <a className="btn small ghost" href="#talks">Talks</a>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* RESEARCH */}
        <Section id="research" title="Research" subtitle="Selected projects — click a card for details.">
          <div className="grid">
            {projects.map((p, idx) => (
              <motion.button
                key={p.id}
                className="projectCard"
                onClick={() => setOpenProject(p)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <div className="projectMedia">
                  <img
                    src={p.image}
                    alt={p.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="projectMediaOverlay" />
                </div>

                <div className="projectBody">
                  <div className="projectTop">
                    <h3 className="h4">{p.title}</h3>
                    <span className="pill">{p.timeframe}</span>
                  </div>

                  <p className="muted">{p.summary}</p>

                  <div className="tagRow">
                    {p.tags.slice(0, 4).map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Section>

        {/* PUBLICATIONS */}
        <Section id="publications" title="Publications" subtitle="Selected items (you can add full BibTeX later).">
          <div className="card">
            <ul className="pubs">
              {publications.map((pub) => (
                <li key={pub.title} className="pub">
                  <div className="pubTop">
                    <span className="pubTitle">{pub.title}</span>
                    <span className="pill">{pub.status}</span>
                  </div>
                  <div className="pubMeta muted">{pub.venue}</div>

                  {pub.links?.length ? (
                    <div className="pubLinks">
                      {pub.links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* TEACHING */}
        <Section id="teaching" title="Teaching" subtitle="Courses, labs, and tutoring roles.">
          <div className="twoCol">
            {teaching.map((t) => (
              <motion.div
                key={t.place}
                className="card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="rowTop">
                  <h3 className="h4">{t.place}</h3>
                  <span className="pill">{t.timeframe}</span>
                </div>
                <ul className="bullets">
                  {t.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* AWARDS */}
        <Section id="awards" title="Honors & Awards" subtitle="Selected awards and recognitions.">
          <div className="card">
            <div className="cols">
              {awards.map((a) => (
                <div key={a} className="awardItem">• {a}</div>
              ))}
            </div>
          </div>
        </Section>

        {/* TALKS */}
        <Section id="talks" title="Talks & Conferences" subtitle="Recent presentations and participation.">
          <div className="stack">
            {talks.map((t) => (
              <motion.div
                key={t.year}
                className="card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="rowTop">
                  <h3 className="h4">{t.year}</h3>
                </div>
                <ul className="bullets">
                  {t.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SERVICE */}
        <Section id="service" title="Service & Memberships" subtitle="Professional memberships and roles.">
          <div className="card">
            <ul className="bullets">
              {service.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" subtitle="The fastest way to reach me.">
          <div className="twoCol">
            <div className="card">
              <h3 className="h4">Email</h3>
              <p className="muted">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>

              <div className="spacer" />

              <h3 className="h4">Affiliation</h3>
              <p className="muted">{profile.affiliation}</p>

              <div className="spacer" />

              <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>

            <div className="card">
              <h3 className="h4">Links</h3>
              <div className="chips">
                {profile.links.map((l) => (
                  <a key={l.label} className="chip" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="spacer" />
              <p className="muted tiny">
                Edit your Scholar/ORCID/LinkedIn URLs in <code>src/content.js</code>.
              </p>
            </div>
          </div>
        </Section>

        <Footer />
      </main>

      <AnimatePresence>
        {openProject ? (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          className="sectionHead"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="h2">{title}</h2>
          <p className="muted">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modalBackdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
      aria-hidden="true"
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="modalTop">
          <div>
            <div className="rowTop">
              <h3 className="h3">{project.title}</h3>
              <span className="pill">{project.timeframe}</span>
            </div>
            <p className="muted">{project.role}</p>
          </div>

          <button className="iconBtn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="modalBody">
          <div className="modalMedia">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>

          <p className="leadSmall">{project.summary}</p>

          <ul className="bullets">
            {project.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>

          {project.links?.length ? (
            <div className="modalLinks">
              {project.links.map((l) => (
                <a key={l.label} className="btn small ghost" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span className="muted">© {new Date().getFullYear()} {profile.name}</span>
        <span className="muted">React + Vite • GitHub Pages</span>
      </div>
    </footer>
  );
}

function TopGlow() {
  return (
    <div className="topGlow" aria-hidden="true">
      <div className="glowBlob blob1" />
      <div className="glowBlob blob2" />
    </div>
  );
}
