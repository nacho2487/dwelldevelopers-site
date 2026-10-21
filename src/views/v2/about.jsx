const React = require('react');
const Layout = require('./layout');
const { html, Eyebrow, CtaBand } = require('./parts');

function About(props) {
  const { site, lang, currentPath, altPath } = props;
  const a = site.about;

  return (
    <Layout
      site={site}
      lang={lang}
      title={a.meta_title}
      description={a.text}
      bodyClass="page-about"
      solidHeader
      currentPath={currentPath}
      altPath={altPath}
    >
      <section className="page-hero">
        <div className="container">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h1 className="page-title" dangerouslySetInnerHTML={html(a.title)} />
          <p className="page-lead">{a.text}</p>
        </div>
      </section>

      <section className="about-banner" data-reveal>
        <div className="container">
          <img src={a.image} alt="" />
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div data-reveal>
            <Eyebrow>{a.story_title}</Eyebrow>
          </div>
          <div data-reveal>
            <p className="lead">{a.story[0]}</p>
            <p className="muted-p">{a.story[1]}</p>
            <p className="signature">We develop, you Dwell.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {site.stats.map((s) => (
            <div className="stat" key={s.label} data-reveal>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section team">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <Eyebrow>{a.team_eyebrow}</Eyebrow>
              <h2 className="display">{a.team_title}</h2>
            </div>
          </div>
          <div className="team-grid">
            {a.team.map((m) => (
              <article className="member" key={m.name} data-reveal>
                <div className="member-photo">
                  <img src={m.image} alt={m.name} loading="lazy" />
                </div>
                <div>
                  <h3>{m.name}</h3>
                  <p className="member-role">{m.role}</p>
                  {m.bio.map((b) => (
                    <p key={b} className="muted-p">
                      {b}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand dark title={a.cta_title} button={a.cta_button} link={site.nav_cta.link} />
    </Layout>
  );
}

module.exports = About;
