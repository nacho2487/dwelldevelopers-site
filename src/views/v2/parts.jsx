const React = require('react');

const html = (s) => ({ __html: s });

const pad = (n) => String(n).padStart(2, '0');

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

function Status({ kind, children }) {
  return <span className={`status status-${kind}`}>{children}</span>;
}

// Tarjeta editorial de proyecto (home y listado)
function ProjectRow({ item, index, base, viewLabel }) {
  const link = `${base}/proyectos/${item.slug}`;
  const isNew = item.status_kind === 'new';
  return (
    <article className={`project${isNew ? ' project-new' : ''}${index % 2 ? ' project-reverse' : ''}`} data-reveal>
      <a href={link} className="project-media" aria-label={item.name}>
        <img src={item.card_image} alt={item.name} loading="lazy" />
        {isNew && item.rich && <img className="project-media-logo" src={item.rich.logo} alt="" />}
      </a>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-index">{pad(index + 1)}</span>
          <Status kind={item.status_kind}>{item.status}</Status>
        </div>
        <h3 className="project-name">{item.name}</h3>
        <p className="project-location">{item.location}</p>
        <p className="project-summary">{item.summary}</p>
        {item.card_facts && item.card_facts.length > 0 && (
          <dl className="project-facts">
            {item.card_facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        )}
        <a href={link} className="link-arrow">
          {viewLabel} <Arrow />
        </a>
      </div>
    </article>
  );
}

// Galería con lightbox
function Gallery({ images, labels, variant }) {
  return (
    <div className={`gallery${variant ? ` gallery-${variant}` : ''}`} data-gallery>
      {images.map((g, i) => (
        <a
          key={g.image}
          href={g.image}
          className="gallery-item"
          data-lightbox
          data-caption={g.caption || ''}
          data-reveal
        >
          <img src={g.image} alt={g.caption || ''} loading="lazy" />
          {g.caption && <span className="gallery-caption">{g.caption}</span>}
        </a>
      ))}
    </div>
  );
}

function Lightbox({ labels }) {
  return (
    <div className="lightbox" data-lightbox-root aria-hidden="true">
      <button type="button" className="lb-close" data-lb-close aria-label={labels.close}>
        ×
      </button>
      <button type="button" className="lb-nav lb-prev" data-lb-prev aria-label={labels.prev_img}>
        <Arrow />
      </button>
      <figure className="lb-figure">
        <img src="" alt="" data-lb-img />
        <figcaption data-lb-caption></figcaption>
      </figure>
      <button type="button" className="lb-nav lb-next" data-lb-next aria-label={labels.next_img}>
        <Arrow />
      </button>
    </div>
  );
}

function CtaBand({ title, text, button, link, dark }) {
  return (
    <section className={`cta-band${dark ? ' section-dark' : ''}`}>
      <div className="container cta-inner" data-reveal>
        <div>
          <h2 className="display" dangerouslySetInnerHTML={html(title)} />
          {text && <p>{text}</p>}
        </div>
        <a href={link} className={`btn ${dark ? 'btn-light' : 'btn-dark'}`}>
          {button} <Arrow />
        </a>
      </div>
    </section>
  );
}

module.exports = { html, pad, Eyebrow, Arrow, Status, ProjectRow, Gallery, Lightbox, CtaBand };
