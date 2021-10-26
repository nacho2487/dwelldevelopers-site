const React = require('react');
const Layout = require('./layouts/default');

function ProjectPage(props) {
  const {
    currentPath,
    lang,
    layout,
    title,
    home_text,
    home_link,
    projects,
    status_label,
    type_label,
    about_us,
    about_us_label,
  } = props;
  return (
    <Layout
      {...layout}
      title={title}
      lang={lang}
      currentPath={currentPath}
      projects={{ projects, title }}
      about_us={about_us}
      about_us_label={about_us_label}
    >
      <div id="page-title-bar" className="page-title-bar">
        <div className="container">
          <div className="wrap w-100 d-flex align-items-center">
            <div
              className="page-title-bar-inner d-flex flex-column align-items-center w-100"
              style={{ paddingTop: '120px' }}
            >
              <div className="page-header">
                <h1 className="page-title typo-heading">{title}</h1>
              </div>
              <div className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <a property="item" typeof="WebPage" title="Go to dwelldevelopers." href={home_link} className="home">
                    <span property="name">{home_text}</span>
                  </a>
                  <meta property="position" content="1" />
                </span>
                <i className="opal-icon-arrow-right" aria-hidden="true"></i>
                <span className="archive post-osf_portfolio-archive current-item">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-content-contain">
        <div id="content" className="site-content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <div
                className="row isotope-grid elementor-portfolio-style-default1"
                data-elementor-columns="3"
                data-elementor-columns-tablet="2"
                data-elementor-columns-mobile="1"
              >
                {projects.map(({ name, status, type, image, link, location }) => (
                  <div className="column-item portfolio-entries">
                    <article
                      id="post-2596"
                      className="
                          portfolio portfolio-style2
                          post-2596
                          osf_portfolio
                          type-osf_portfolio
                          status-publish
                          has-post-thumbnail
                          hentry
                          osf_portfolio_cat-completed-projects
                        "
                    >
                      <div className="portfolio-inner">
                        <div className="portfolio-post-thumbnail">
                          <img
                            width="1200"
                            height="650"
                            src={image}
                            className="
                                attachment-rehomes-featured-image-full
                                size-rehomes-featured-image-full
                                wp-post-image
                              "
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="portfolio-content">
                          <div className="portfolio-content-inner">
                            <h4 className="entry-title">
                              <a href={link}>{name}</a>
                            </h4>
                            <div className="entry-locations">{location}</div>
                            <ul className="portfolio-list">
                              <li>
                                <label>{status_label} </label>
                                <p>{status}</p>
                              </li>
                              <li>
                                <label>{type_label} </label>
                                <p>{type}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ProjectPage;
