const React = require('react');
const Layout = require('./layout');
const { html, pad, Eyebrow, Arrow, ProjectRow } = require('./parts');

function Home(props) {
  const { site, lang, projects, currentPath, altPath } = props;
  const { hero, stats, featured, intro, services, why, investors } = site;
  const base = site.base;

  return (
    <Layout site={site} lang={lang} bodyClass="page-home" currentPath={currentPath} altPath={altPath}>
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
        <div className="container hero-content hero-brand-content">
          <h1 className="hero-brand">
            <img src="/images/brand/dwell-wordmark-blanco.png" alt="Dwell Developers" width="928" height="104" />
          </h1>
          <p className="hero-tagline">{hero.tagline}</p>
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
                <span className="dot-num">{pad(i + 1)}</span>
                <span className="dot-label">{s.caption}</span>
                <span className="dot-bar">
                  <i></i>
                </span>
              </button>
            ))}
          </div>
          <a href="#destacado" className="hero-scroll">
            {hero.scroll}
            <span className="scroll-line"></span>
          </a>
        </div>
      </section>

      {/* CIFRAS */}
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

      {/* GREEN CONCEPT DESTACADO */}
      <section className="featured theme-gc" id="destacado">
        <div className="container featured-grid">
          <div className="featured-copy" data-reveal>
            <span className="featured-badge">{featured.eyebrow}</span>
            <img className="featured-logo" src={featured.logo} alt="Green Concept Carrasco" />
            <h2 className="display" dangerouslySetInnerHTML={html(featured.title)} />
            <p>{featured.text}</p>
            <dl className="featured-facts">
              {featured.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
            <div className="featured-actions">
              <a href={featured.cta_primary.link} className="btn btn-light">
                {featured.cta_primary.title} <Arrow />
              </a>
              <a href={featured.cta_secondary.link} className="link-arrow link-light" target="_blank" rel="noopener">
                {featured.cta_secondary.title} <Arrow />
              </a>
            </div>
          </div>
          <div className="featured-media" data-reveal>
            <a href={featured.cta_primary.link} className="fm fm-main">
              <img src={featured.images[0]} alt="Green Concept — acceso principal" loading="lazy" />
            </a>
            <a href={featured.cta_primary.link} className="fm fm-a">
              <img src={featured.images[1]} alt="Green Concept — piscina" loading="lazy" />
            </a>
            <a href={featured.cta_primary.link} className="fm fm-b">
              <img src={featured.images[2]} alt="Green Concept — living" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro intro-simple section" id="intro">
        <div className="container intro-simple-grid">
          <h2 className="intro-heading" data-reveal>
            {intro.title}
          </h2>
          <div className="intro-body" data-reveal>
            <p>{intro.text}</p>
            <a href={intro.link.link} className="link-arrow">
              {intro.link.title} <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* PROYECTOS (sin Green Concept, que ya tiene su sección) */}
      <section className="projects section" id="proyectos">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow>{site.projects.eyebrow}</Eyebrow>
              <h2 className="display">{site.projects.title}</h2>
            </div>
            <a href={site.projects.link.link} className="link-arrow">
              {site.projects.link.title} <Arrow />
            </a>
          </div>
          <div className="project-list">
            {projects.items
              .filter((p) => p.status_kind !== 'new')
              .map((item, i) => (
                <ProjectRow key={item.slug} item={item} index={i} base={base} viewLabel={projects.page.labels.view} />
              ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
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
                <span className="service-num">{pad(i + 1)}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ DWELL */}
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

      {/* INVERSORES */}
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
