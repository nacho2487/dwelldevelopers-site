const React = require('react');
const Layout = require('./layout');
const { Eyebrow, Arrow, Status, Gallery, Lightbox, CtaBand } = require('./parts');

function Project(props) {
  const { site, lang, project: p, next, labels, currentPath, altPath } = props;
  const base = site.base;

  return (
    <Layout
      site={site}
      lang={lang}
      title={`${p.name} — Dwell Developers`}
      description={p.summary}
      bodyClass="page-project"
      currentPath={currentPath}
      altPath={altPath}
    >
      <section className="p-hero">
        <img className="p-hero-img" src={p.hero_image} alt={p.name} />
        <div className="hero-shade"></div>
        <div className="container p-hero-content">
          <a href={`${base}/proyectos`} className="back-link">
            ← {labels.back}
          </a>
          <Status kind={p.status_kind}>{p.status}</Status>
          <h1 className="hero-title">{p.name}</h1>
          <p className="hero-text">{p.location}</p>
        </div>
      </section>

      <section className="p-facts">
        <div className="container">
          <dl className="facts-grid">
            {p.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section p-overview">
        <div className="container two-col">
          <div data-reveal>
            <Eyebrow>{labels.overview}</Eyebrow>
            {p.trust && <p className="p-trust">{p.trust}</p>}
          </div>
          <div data-reveal>
            <p className="lead">{p.overview[0]}</p>
            {p.overview.slice(1).map((t) => (
              <p key={t} className="muted-p">
                {t}
              </p>
            ))}
            {p.website && (
              <a href={p.website} className="link-arrow" target="_blank" rel="noopener">
                {labels.website} <Arrow />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="p-amenities section-tight">
        <div className="container two-col">
          <div data-reveal>
            <Eyebrow>{labels.amenities}</Eyebrow>
          </div>
          <ul className="amenity-list" data-reveal>
            {p.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section p-gallery">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow>{labels.gallery}</Eyebrow>
            </div>
          </div>
          <Gallery images={p.gallery} labels={labels} />
        </div>
      </section>

      <section className="section section-dark p-numbers">
        <div className="container numbers-grid">
          <div data-reveal>
            <Eyebrow light>{labels.financing}</Eyebrow>
            {p.financing.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div data-reveal>
            <Eyebrow light>{labels.performance}</Eyebrow>
            {p.performance.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {next && (
        <a href={`${base}/proyectos/${next.slug}`} className="next-project">
          <img src={next.card_image} alt="" loading="lazy" />
          <div className="container next-inner">
            <span className="eyebrow eyebrow-light">{labels.next}</span>
            <span className="next-name">
              {next.name} <Arrow />
            </span>
          </div>
        </a>
      )}

      <CtaBand title={labels.cta_title} text={labels.cta_text} button={labels.cta_button} link={site.nav_cta.link} />

      <Lightbox labels={labels} />
    </Layout>
  );
}

module.exports = Project;
