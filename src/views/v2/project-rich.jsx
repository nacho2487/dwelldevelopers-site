const React = require('react');
const Layout = require('./layout');
const { html, pad, Eyebrow, Arrow, Status, Gallery, Lightbox } = require('./parts');

// Ficha de proyecto con la estructura aprobada para Green Concept.
// Cada proyecto aporta sus datos en `rich`; las secciones sin datos no se muestran.
function ProjectRich(props) {
  const { site, lang, project: p, next, labels, currentPath, altPath } = props;
  const r = p.rich;
  const base = site.base;
  const name = p.name_full || p.name;
  // lleva al formulario con el asunto ya completado
  const contactLink = `${site.nav_cta.link}?asunto=${encodeURIComponent(name)}`;
  const award = r.award;
  const stageWidth = (s) => (s.kind === 'sold' || s.kind === 'done' ? s.progress : s.kind === 'open' ? 8 : 0);

  return (
    <Layout
      site={site}
      lang={lang}
      title={`${name} — Dwell Developers`}
      description={p.summary}
      bodyClass={`page-project page-gc theme-${p.theme}`}
      currentPath={currentPath}
      altPath={altPath}
    >
      {/* PORTADA */}
      <section className="gc-hero">
        <img className="p-hero-img" src={p.hero_image} alt={name} />
        <div className="hero-shade gc-shade"></div>
        {award && award.logo && (
          <a href="#destacado" className="gc-hero-ribbon" aria-label={award.title}>
            <img src={award.logo} alt={award.badge} />
          </a>
        )}
        <div className="container gc-hero-content">
          <a href={`${base}/proyectos`} className="back-link">
            ← {labels.back}
          </a>
          {r.hero_badge && (
            <a href="#destacado" className="gc-hero-award">
              <span className="award-star" aria-hidden="true">
                ★
              </span>
              {r.hero_badge}
            </a>
          )}
          {r.logo ? (
            <img className="gc-hero-logo" src={r.logo} alt={name} />
          ) : (
            <p className="gc-hero-name">{name}</p>
          )}
          <h1
            className={`hero-title gc-tagline${r.tagline.replace(/<[^>]+>/g, '').length > 45 ? ' gc-tagline-long' : ''}`}
            dangerouslySetInnerHTML={html(r.tagline)}
          />
          {r.cta_primary && (
            <div className="hero-actions">
              <a href={contactLink} className="btn btn-light">
                {r.cta_primary} <Arrow />
              </a>
              {p.website && (
                <a href={p.website} className="btn btn-ghost-light" target="_blank" rel="noopener">
                  {r.cta_secondary}
                </a>
              )}
            </div>
          )}
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
            {r.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* DESTACADO (premio o diferencial) */}
      {award && (
        <section className={`gc-award${award.logo ? '' : ' gc-award-text'}`} id="destacado">
          <div className="container gc-award-grid">
            {award.logo && <img className="gc-award-ribbon" src={award.logo} alt={award.badge} data-reveal />}
            <div data-reveal>
              <span className="gc-award-badge">{award.badge}</span>
              <h2 className="display">{award.title}</h2>
              <p>{award.text}</p>
              {award.edition && <p className="gc-award-edition">{award.edition}</p>}
              {award.chips && (
                <ul className="nearby award-chips">
                  {award.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ETAPAS Y BENEFICIOS */}
      {(r.stages || r.results || r.promoted) && (
        <section className="section gc-status">
          <div className={`container gc-status-grid${r.promoted ? '' : ' gc-status-single'}`}>
            {r.results && (
              <div className="gc-stages gc-results" data-reveal>
                <Eyebrow>{r.results.eyebrow}</Eyebrow>
                <h2 className="display">{r.results.title}</h2>
                {r.results.text && <p className="muted-p">{r.results.text}</p>}
                <dl className="results-grid">
                  {r.results.items.map((it) => (
                    <div key={it.label}>
                      <dt>{it.value}</dt>
                      <dd>{it.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {r.stages && (
            <div className="gc-stages" data-reveal>
              <Eyebrow>{r.stages.eyebrow}</Eyebrow>
              <h2 className="display">{r.stages.title}</h2>
              <p className="muted-p">{r.stages.text}</p>
              <ol className="stage-list">
                {r.stages.items.map((s) => (
                  <li key={s.name} className={`stage stage-${s.kind}`}>
                    <div className="stage-head">
                      <span className="stage-name">
                        {s.name}
                        {s.detail && <small>{s.detail}</small>}
                      </span>
                      <span className="stage-status">{s.status}</span>
                    </div>
                    <span className="stage-bar">
                      <i style={{ width: `${stageWidth(s)}%` }}></i>
                    </span>
                    {s.link && (
                      <a href={`${base}${s.link.href}`} className="link-arrow stage-link">
                        {s.link.title} <Arrow />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
            )}
            {r.promoted && (
              <div className="gc-promoted" data-reveal>
                <span className="gc-promoted-badge">{r.promoted.eyebrow}</span>
                <h3>{r.promoted.title}</h3>
                <p>{r.promoted.text}</p>
                <ul className="check-list">
                  {r.promoted.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {r.promoted.note && <p className="gc-promoted-note">{r.promoted.note}</p>}
              </div>
            )}
          </div>
        </section>
      )}

      {/* RENDER DESTACADO */}
      {r.highlight && (
        <section className="gc-highlight">
          <div className="container gc-highlight-grid">
            <a
              href={r.highlight.image}
              className="gc-highlight-media"
              data-lightbox
              data-caption={r.highlight.caption}
              data-reveal
            >
              <img src={r.highlight.image} alt={r.highlight.caption} loading="lazy" />
            </a>
            <div className="gc-highlight-copy" data-reveal>
              <Eyebrow light>{r.highlight.eyebrow}</Eyebrow>
              <h2 className="display">{r.highlight.title}</h2>
              <p>{r.highlight.text}</p>
              <span className="gc-highlight-caption">{r.highlight.caption}</span>
            </div>
          </div>
        </section>
      )}

      {/* CONCEPTO */}
      <section className="section gc-intro">
        <div className="container gc-split">
          <div className="gc-split-copy" data-reveal>
            <Eyebrow>{name}</Eyebrow>
            <h2 className="display">{r.intro_title}</h2>
            <p className="lead">{r.intro[0]}</p>
            {r.intro.slice(1).map((t) => (
              <p key={t} className="muted-p">
                {t}
              </p>
            ))}
          </div>
          <div className="gc-split-media" data-reveal>
            <img src={r.intro_image} alt="" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PILARES / VIRTUDES */}
      {r.pillars && (
        <section className="section gc-pillars">
          <div className="container">
            <p className="gc-pillars-intro" data-reveal>
              {r.pillars_intro}
            </p>
            <div className={`pillars-grid pillars-${r.pillars.length}`}>
              {r.pillars.map((pl, i) => (
                <div className="pillar" key={pl.title} data-reveal>
                  <span className="pillar-num">{pad(i + 1)}</span>
                  <h3>{pl.title}</h3>
                  <p>{pl.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EL PROYECTO */}
      <section className="section gc-project">
        <div className="container">
          <div className="gc-project-grid">
            <div className="gc-project-main" data-reveal>
              <img src={r.project_images[0]} alt="" loading="lazy" />
            </div>
            <div className="gc-project-copy" data-reveal>
              <Eyebrow>{r.project_title}</Eyebrow>
              {r.project_text.map((t, i) => (
                <p key={t} className={i === 0 ? 'lead' : 'muted-p'}>
                  {t}
                </p>
              ))}
              {r.project_images[1] && <img className="gc-project-side" src={r.project_images[1]} alt="" loading="lazy" />}
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section gc-amenities">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow light>{r.amenities_title}</Eyebrow>
              <h2 className="display">{r.amenities_heading || `${r.amenities.length} amenities`}</h2>
            </div>
          </div>
          <ul className={`gc-amenity-grid${r.amenities[0].text ? ' gc-amenity-grid-detail' : ''}`} data-reveal>
            {r.amenities.map((a, i) => (
              <li key={a.title || a}>
                <span>{pad(i + 1)}</span>
                {a.text ? (
                  <div>
                    <strong>{a.title}</strong>
                    <p>{a.text}</p>
                  </div>
                ) : (
                  a
                )}
              </li>
            ))}
          </ul>
          {r.amenities_images && (
            <div className="gc-amenity-mosaic">
              {r.amenities_images.map((im, i) => (
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
          )}
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="gc-location">
        <img src={r.location_image} alt="" loading="lazy" />
        <div className="container">
          <div className="gc-location-panel" data-reveal>
            <Eyebrow>{r.location_title}</Eyebrow>
            <p className="lead">{r.location_text[0]}</p>
            {r.location_text.slice(1).map((t) => (
              <p key={t} className="muted-p">
                {t}
              </p>
            ))}
            <ul className="nearby">
              {r.nearby.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section className="section gc-apartments">
        <div className="container">
          <div className="gc-apartments-head" data-reveal>
            <h2 className="display">{r.apartments_title}</h2>
            <div>
              <p className="muted-p">{r.apartments_text}</p>
              <dl className="project-facts">
                {r.apartments.map((a) => (
                  <div key={a.value + a.label}>
                    <dt>{a.value}</dt>
                    <dd>{a.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Gallery images={r.gallery} labels={labels} variant="gc" />
        </div>
      </section>

      {/* ALIANZA Y EQUIPO */}
      {r.partners && (
        <section className="gc-partners">
          <div className="container">
            <div className="gc-partners-head" data-reveal>
              <h2 className="gc-partners-title">{r.partnership_title}</h2>
              <p>{r.partnership_text}</p>
            </div>
            <div className="gc-partners-dev" data-reveal>
              <span className="partner-role">{r.partners.developers_label}</span>
              <div className="partner-dev-logos">
                {r.partners.developers.map((d, i) => (
                  <React.Fragment key={d.name}>
                    {i > 0 && (
                      <span className="partner-x" aria-hidden="true">
                        ×
                      </span>
                    )}
                    <img src={d.logo} alt={d.name} loading="lazy" />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <ul className="gc-partners-team" data-reveal>
              {r.partners.team.map((t) => (
                <li key={t.name}>
                  <span className="partner-role">{t.role}</span>
                  <img src={t.logo} alt={t.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CONTACTO */}
      {r.cta_title && (
      <section className="gc-cta" id="contacto-proyecto">
        <img src={r.cta_image} alt="" loading="lazy" />
        <div className="hero-shade gc-shade"></div>
        <div className="container gc-cta-inner" data-reveal>
          {r.logo && <img className="gc-cta-logo" src={r.logo} alt="" />}
          <h2 className="display">{r.cta_title}</h2>
          <p>{r.cta_text}</p>
          <div className="hero-actions">
            <a href={contactLink} className="btn btn-light">
              {r.cta_primary} <Arrow />
            </a>
            {p.website && (
              <a href={p.website} className="btn btn-ghost-light" target="_blank" rel="noopener">
                {r.cta_secondary}
              </a>
            )}
          </div>
        </div>
      </section>
      )}

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

module.exports = ProjectRich;
