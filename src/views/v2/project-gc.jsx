const React = require('react');
const Layout = require('./layout');
const { html, pad, Eyebrow, Arrow, Status, Gallery, Lightbox } = require('./parts');

function GreenConcept(props) {
  const { site, lang, project: p, next, labels, currentPath, altPath } = props;
  const gc = p.gc;
  const base = site.base;

  return (
    <Layout
      site={site}
      lang={lang}
      title={`${p.name_full} — Dwell Developers`}
      description={p.summary}
      bodyClass="page-project page-gc theme-gc"
      currentPath={currentPath}
      altPath={altPath}
    >
      {/* HERO */}
      <section className="gc-hero">
        <img className="p-hero-img" src={p.hero_image} alt={p.name_full} />
        <div className="hero-shade gc-shade"></div>
        <div className="container gc-hero-content">
          <a href={`${base}/proyectos`} className="back-link">
            ← {labels.back}
          </a>
          <img className="gc-hero-logo" src={gc.logo} alt={p.name_full} />
          <h1 className="hero-title gc-tagline" dangerouslySetInnerHTML={html(gc.tagline)} />
          <div className="hero-actions">
            <a href="#gc-contacto" className="btn btn-light">
              {gc.cta_primary} <Arrow />
            </a>
            <a href={p.website} className="btn btn-ghost-light" target="_blank" rel="noopener">
              {gc.cta_secondary}
            </a>
          </div>
        </div>
        <div className="container gc-hero-foot">
          <Status kind="new">{p.status}</Status>
          <span>{p.location}</span>
        </div>
      </section>

      {/* DATOS */}
      <section className="gc-facts">
        <div className="container">
          <dl className="facts-grid">
            {gc.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className="section gc-intro">
        <div className="container gc-split">
          <div className="gc-split-copy" data-reveal>
            <Eyebrow>{p.name_full}</Eyebrow>
            <h2 className="display">{gc.intro_title}</h2>
            <p className="lead">{gc.intro[0]}</p>
            <p className="muted-p">{gc.intro[1]}</p>
          </div>
          <div className="gc-split-media" data-reveal>
            <img src="/images/green-concept/paseo-frente.jpg" alt="" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="section gc-pillars">
        <div className="container">
          <p className="gc-pillars-intro" data-reveal>
            {gc.pillars_intro}
          </p>
          <div className="pillars-grid">
            {gc.pillars.map((pl, i) => (
              <div className="pillar" key={pl.title} data-reveal>
                <span className="pillar-num">{pad(i + 1)}</span>
                <h3>{pl.title}</h3>
                <p>{pl.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL PROYECTO */}
      <section className="section gc-project">
        <div className="container">
          <div className="gc-project-grid">
            <div className="gc-project-main" data-reveal>
              <img src="/images/green-concept/acceso-principal.jpg" alt="" loading="lazy" />
            </div>
            <div className="gc-project-copy" data-reveal>
              <Eyebrow>{gc.project_title}</Eyebrow>
              {gc.project_text.map((t, i) => (
                <p key={t} className={i === 0 ? 'lead' : 'muted-p'}>
                  {t}
                </p>
              ))}
              <img className="gc-project-side" src="/images/green-concept/vista-lateral.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section gc-amenities">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow light>{gc.amenities_title}</Eyebrow>
              <h2 className="display">{gc.amenities.length} amenities</h2>
            </div>
          </div>
          <ul className="gc-amenity-grid" data-reveal>
            {gc.amenities.map((a, i) => (
              <li key={a}>
                <span>{pad(i + 1)}</span>
                {a}
              </li>
            ))}
          </ul>
          <div className="gc-amenity-mosaic">
            {gc.amenities_images.map((im, i) => (
              <a
                key={im.image}
                href={im.image}
                className={`mosaic-item mosaic-${i + 1}`}
                data-lightbox
                data-caption={im.caption}
                data-reveal
              >
                <img src={im.image} alt={im.caption} loading="lazy" />
                <span className="gallery-caption">{im.caption}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="gc-location">
        <img src={gc.location_image} alt="" loading="lazy" />
        <div className="container">
          <div className="gc-location-panel" data-reveal>
            <Eyebrow>{gc.location_title}</Eyebrow>
            <p className="lead">{gc.location_text[0]}</p>
            <p className="muted-p">{gc.location_text[1]}</p>
            <ul className="nearby">
              {gc.nearby.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APARTAMENTOS */}
      <section className="section gc-apartments">
        <div className="container">
          <div className="gc-apartments-head" data-reveal>
            <h2 className="display">{gc.apartments_title}</h2>
            <div>
              <p className="muted-p">{gc.apartments_text}</p>
              <dl className="project-facts">
                {gc.apartments.map((a) => (
                  <div key={a.value}>
                    <dt>{a.value}</dt>
                    <dd>{a.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Gallery images={gc.gallery} labels={labels} variant="gc" />
        </div>
      </section>

      {/* ALIANZA Y CRÉDITOS */}
      <section className="section-tight gc-credits">
        <div className="container two-col">
          <div data-reveal>
            <Eyebrow>{gc.partnership_title}</Eyebrow>
            <p className="lead">{gc.partnership_text}</p>
          </div>
          <dl className="credits" data-reveal>
            {gc.credits.map((c) => (
              <div key={c.role}>
                <dt>{c.role}</dt>
                <dd>{c.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="gc-cta" id="gc-contacto">
        <img src="/images/green-concept/jardin-interior-noche.jpg" alt="" loading="lazy" />
        <div className="hero-shade gc-shade"></div>
        <div className="container gc-cta-inner" data-reveal>
          <img className="gc-cta-logo" src={gc.logo} alt="" />
          <h2 className="display">{gc.cta_title}</h2>
          <p>{gc.cta_text}</p>
          <div className="hero-actions">
            <a href={site.nav_cta.link} className="btn btn-light">
              {gc.cta_primary} <Arrow />
            </a>
            <a href={p.website} className="btn btn-ghost-light" target="_blank" rel="noopener">
              {gc.cta_secondary}
            </a>
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

      <Lightbox labels={labels} />
    </Layout>
  );
}

module.exports = GreenConcept;
