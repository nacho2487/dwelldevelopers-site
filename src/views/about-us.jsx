const React = require('react');
const Layout = require('./layouts/default');

function ProjectPage(props) {
  const { currentPath, lang, layout, title, home_text, home_link, about_us, team, sub_text, projects, about_us_label, subtitle } = props;
  return (
    <Layout
      {...layout}
      lang={lang}
      title={title}
      currentPath={currentPath}
      isAboutUs
      about_us={about_us}
      about_us_label={about_us_label}
      projects={projects}
    >
      <link rel="stylesheet" id="post-2965-css" href="/css/post-371.css" type="text/css" media="all" />
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
              <article id="post-371" className="post-371 page type-page status-publish hentry">
                <div className="entry-content">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="371"
                    className="elementor elementor-371"
                    data-elementor-settings="[]"
                  >
                    <div className="elementor-section-wrap">
                      <section
                        className="
                              elementor-section
                              elementor-top-section
                              elementor-element
                              elementor-element-22b3ba7
                              elementor-section-stretched
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                        data-id="22b3ba7"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div
                            className="
                                  elementor-column
                                  elementor-col-100
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-e5a13ec
                                "
                            data-id="e5a13ec"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="
                                      elementor-element elementor-element-9e4412b
                                      animated-fast
                                      elementor-invisible elementor-widget elementor-widget-heading
                                    "
                                data-id="9e4412b"
                                data-element_type="widget"
                                data-settings='{"_animation":"opal-move-up"}'
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-heading-wrapper">
                                    <div className="elementor-heading-wrapper-inner">
                                      <h3 className="elementor-heading-title elementor-size-default">{about_us}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="
                              elementor-section
                              elementor-top-section
                              elementor-element
                              elementor-element-25817246
                              elementor-section-stretched
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                        data-id="25817246"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          {team.map(({ name, position, image, image_text, text }) => (
                            <div
                              className="
                                  elementor-column
                                  elementor-col-50
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-5ca14fd2
                                "
                              data-id="5ca14fd2"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="
                                      elementor-element elementor-element-6bc9e8c elementor-vertical-align-middle
                                      animated-fast
                                      elementor-position-top
                                      elementor-invisible
                                      elementor-widget
                                      elementor-widget-image-box
                                    "
                                  data-id="6bc9e8c"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"opal-move-up","_animation_delay":150}'
                                  data-widget_type="image-box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image-box-wrapper elementor-button-">
                                      <div className="elementor-image-framed">
                                        <figure className="elementor-image-box-img">
                                          <a href="#">
                                            <img src={image} title={image_text} alt={image_text} />
                                          </a>
                                        </figure>
                                      </div>
                                      <div className="elementor-image-box-content">
                                        <div className="elementor-image-box-sub-title">{position}</div>
                                        <h3 className="elementor-image-box-title"  dangerouslySetInnerHTML={{ __html: name }}></h3>
                                        <p
                                          className="elementor-image-box-description"
                                          dangerouslySetInnerHTML={{ __html: text }}
                                        ></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                      <section
                        className="
                              elementor-section
                              elementor-top-section
                              elementor-element
                              elementor-element-165c0f6
                              elementor-section-stretched
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                        data-id="165c0f6"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div
                            className="
                                  elementor-column
                                  elementor-col-100
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-9f55941
                                "
                            data-id="9f55941"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="
                                      elementor-element elementor-element-776e8eb
                                      animated-fast
                                      elementor-invisible elementor-widget elementor-widget-heading
                                    "
                                data-id="776e8eb"
                                data-element_type="widget"
                                data-settings='{"_animation":"opal-move-up"}'
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-heading-wrapper">
                                    <div className="elementor-heading-wrapper-inner">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                          {subtitle}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                                      elementor-element elementor-element-2857e50
                                      animated-fast
                                      elementor-invisible elementor-widget elementor-widget-text-editor
                                    "
                                data-id="2857e50"
                                data-element_type="widget"
                                data-settings='{"_animation":"opal-move-up"}'
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p dangerouslySetInnerHTML={{ __html: sub_text }}></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ProjectPage;
