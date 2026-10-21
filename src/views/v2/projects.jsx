const React = require('react');
const Layout = require('./layout');
const { Eyebrow, ProjectRow, CtaBand } = require('./parts');

function Projects(props) {
  const { site, lang, projects, currentPath, altPath } = props;
  const { page, items } = projects;

  return (
    <Layout
      site={site}
      lang={lang}
      title={`${page.title} — Dwell Developers`}
      bodyClass="page-projects"
      solidHeader
      currentPath={currentPath}
      altPath={altPath}
    >
      <section className="page-hero">
        <div className="container">
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 className="page-title">{page.title}</h1>
          <p className="page-lead">{page.text}</p>
        </div>
      </section>

      <section className="projects projects-page section">
        <div className="container">
          <div className="project-list">
            {items.map((item, i) => (
              <ProjectRow key={item.slug} item={item} index={i} base={site.base} viewLabel={page.labels.view} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        dark
        title={site.investors.title}
        text={site.investors.text}
        button={site.investors.cta.title}
        link={site.investors.cta.link}
      />
    </Layout>
  );
}

module.exports = Projects;
