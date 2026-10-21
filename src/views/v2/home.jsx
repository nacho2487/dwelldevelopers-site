const React = require('react');
const Layout = require('./layout');

const html = (s) => ({ __html: s });

function Eyebrow({ children, light }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</span>;
}

function Arrow() {
  return (
    <svg className="arrow" width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
      <path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ProjectCard({ item, index }) {
  const isNew = item.status_kind === 'new';
  return (
    <article className={`project${isNew ? ' project-new' : ''}${index % 2 ? ' project-reverse' : ''}`} data-reveal>
      <a href={item.link} className="project-media" aria-label={item.name}>
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <span className="placeholder-mark">Green Concept</span>
            <span className="placeholder-sub">{item.status}</span>
          </div>
        )}
      </a>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <span className={`status status-${item.status_kind}`}>{item.status}</span>
        </div>
        <h3 className="project-name">{item.name}</h3>
        <p className="project-location">{item.location}</p>
        <p className="project-summary">{item.summary}</p>
        {item.facts.length > 0 && (
          <dl className="project-facts">
            {item.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        )}
        <a href={item.link} className="link-arrow">
          {item.cta} <Arrow />
        </a>
      </div>
    </article>
  );
}

function Home(props) {
  const { site, lang } = props;
  const { hero, stats, intro, projects, services, why, investors } = site;

  return (
    <Layout site={site} lang={lang} bodyClass="page-home">
      {/* HERO */}
      <section className="hero" data-hero>
        <div className="hero-slides">
          {hero.slides.map((s, i) => (
            <figure key={s.image} className={`hero-slide${i === 0 ? ' is-active' : ''}`} data-slide>
              <img src={s.image} alt="" />
            </figure>
          ))}
        </div>
        <div className="hero-shade"></div>
        <div className="container hero-content">
          <Eyebrow light>{hero.eyebrow}</Eyebrow>
          <h1 className="hero-title" dangerouslySetInnerHTML={html(hero.title)} />
          <p className="hero-text">{hero.text}</p>
          <div className="hero-actions">
            <a href={hero.cta_primary.link} className="btn btn-light">
              {hero.cta_primary.title} <Arrow />
            </a>
            <a href={hero.cta_secondary.link} className="btn btn-ghost-light">
              {hero.cta_secondary.title}
            </a>
          </div>
        </div>
        <div className="container hero-footer">
          <div className="hero-captions">
            {hero.slides.map((s, i) => (
              <button key={s.caption} type="button" className={`hero-dot${i === 0 ? ' is-active' : ''}`} data-dot={i}>
                <span className="dot-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="dot-label">{s.caption}</span>
                <span className="dot-bar"><i></i></span>
              </button>
            ))}
          </div>
          <a href="#intro" className="hero-scroll">
            {hero.scroll}
            <span className="scroll-line"></span>
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label} data-reveal>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section" id="intro">
        <div className="container intro-grid">
          <div data-reveal>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
          </div>
          <div>
            <h2 className="display" data-reveal dangerouslySetInnerHTML={html(intro.title)} />
            <div className="intro-cols" data-reveal>
              <p>{intro.text}</p>
              <div>
                <p className="signature">{intro.signature}</p>
                <a href={intro.link.link} className="link-arrow">
                  {intro.link.title} <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section" id="proyectos">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow>{projects.eyebrow}</Eyebrow>
              <h2 className="display">{projects.title}</h2>
            </div>
            <a href={projects.link.link} className="link-arrow">
              {projects.link.title} <Arrow />
            </a>
          </div>
          <div className="project-list">
            {projects.items.map((item, i) => (
              <ProjectCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="servicios">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow>{services.eyebrow}</Eyebrow>
              <h2 className="display">{services.title}</h2>
            </div>
          </div>
          <div className="services-grid">
            {services.items.map((s, i) => (
              <div className="service" key={s.title} data-reveal>
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why section section-dark">
        <div className="container">
          <div className="why-head" data-reveal>
            <Eyebrow light>{why.eyebrow}</Eyebrow>
            <h2 className="display">{why.title}</h2>
          </div>
          <div className="why-grid">
            {why.items.map((w) => (
              <div className="why-item" key={w.title} data-reveal>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="investors" id="inversores">
        <div className="investors-media">
          <img src={investors.image} alt="" loading="lazy" />
        </div>
        <div className="investors-panel" data-reveal>
          <Eyebrow>{investors.eyebrow}</Eyebrow>
          <h2 className="display">{investors.title}</h2>
          <p>{investors.text}</p>
          <ul className="check-list">
            {investors.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a href={investors.cta.link} className="btn btn-dark">
            {investors.cta.title} <Arrow />
          </a>
        </div>
      </section>
    </Layout>
  );
}

module.exports = Home;
