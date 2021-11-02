const React = require('react');
const Layout = require('./layouts/default');

function ContactPage(props) {
  const { currentPath, lang, layout, title, home_text, home_link, located, hours, about_us, about_us_label, projects, form_subtitle, form_title, form_name, form_subject, form_message, form_button } =
    props;
  return (
    <Layout
      {...layout}
      title={title}
      lang={lang}
      currentPath={currentPath}
      isContact
      about_us={about_us}
      about_us_label={about_us_label}
      projects={projects}
    >
      <link rel="stylesheet" id="post-2965-css" href="/css/post-341.css" type="text/css" media="all" />
      <link rel="stylesheet" id="post-2965-css" href="/css/post-9.css" type="text/css" media="all" />
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
                data-elementor-type="wp-page"
                data-elementor-id="341"
                className="elementor elementor-341"
                data-elementor-settings="[]"
              >
                <div className="elementor-section-wrap">
                  <section
                    className="
                          elementor-section
                          elementor-top-section
                          elementor-element
                          elementor-element-2fc9969
                          elementor-section-boxed
                          elementor-section-height-default
                          elementor-section-height-default
                        "
                    data-id="2fc9969"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="
                              elementor-column
                              elementor-col-50
                              elementor-top-column
                              elementor-element
                              elementor-element-6a0d2ef
                            "
                        data-id="6a0d2ef"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="
                                  elementor-element elementor-element-cce7dd1
                                  animated-fast
                                  elementor-invisible elementor-widget elementor-widget-heading
                                "
                            data-id="cce7dd1"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up"}'
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-wrapper">
                                <span className="sub-title">{layout.footer.contact.title}</span>
                                <div className="elementor-heading-wrapper-inner">
                                  <h2 className="elementor-heading-title elementor-size-default">{located}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="
                                  elementor-element elementor-element-8a50b9a
                                  animated-fast
                                  icon-list-style1
                                  elementor-invisible elementor-widget elementor-widget-icon-list
                                "
                            data-id="8a50b9a"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up"}'
                            data-widget_type="icon-list.default"
                          >
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                  </span>
                                  <span className="elementor-icon-list-text">{layout.footer.contact.email.text}</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                  </span>
                                  <span className="elementor-icon-list-text">{layout.footer.contact.phone.number}</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-icon">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                  </span>
                                  <span className="elementor-icon-list-text">{hours}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                              elementor-column
                              elementor-col-50
                              elementor-top-column
                              elementor-element
                              elementor-element-1d6f08b
                            "
                        data-id="1d6f08b"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="
                                  elementor-element elementor-element-2014ac3
                                  animated-fast
                                  elementor-invisible elementor-widget elementor-widget-heading
                                "
                            data-id="2014ac3"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up","_animation_delay":150}'
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-wrapper">
                                <span className="sub-title">{form_subtitle}</span>
                                <div className="elementor-heading-wrapper-inner">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    {form_title}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="
                                  elementor-element elementor-element-cc707fe
                                  animated-fast
                                  elementor-align-left
                                  elementor-wpcf7-button-primary
                                  elementor-wpcf7-button-md
                                  elementor-invisible
                                  elementor-widget
                                  elementor-widget-opal-contactform7
                                "
                            data-id="cc707fe"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up","_animation_delay":250}'
                            data-widget_type="opal-contactform7.default"
                          >
                            <div className="elementor-widget-container">
                              <div role="form" className="wpcf7" id="wpcf7-f1052-p341-o1" lang="en-US" dir="ltr">
                                <div className="screen-reader-response">
                                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                                  <ul></ul>
                                </div>
                                <form
                                  action="/contacto"
                                  method="post"
                                  className="wpcf7-form init"
                                  data-status="init"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="mb-4">
                                        <span className="wpcf7-form-control-wrap text-337">
                                          <input
                                            type="text"
                                            name="name"
                                            size="40"
                                            className="wpcf7-form-control wpcf7-text"
                                            id="form-name"
                                            aria-invalid="false"
                                            placeholder={form_name}
                                            required
                                          />
                                        </span>
                                      </div>
                                      <div className="mb-4">
                                        <span className="wpcf7-form-control-wrap email-104">
                                          <input
                                            type="email"
                                            name="email"
                                            size="40"
                                            className="
                                                  wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email
                                                "
                                            id="form-email"
                                            aria-invalid="false"
                                            placeholder={layout.footer.contact.email.title}
                                            required
                                          />
                                        </span>
                                      </div>
                                      <div className="mb-4">
                                        <span className="wpcf7-form-control-wrap text-338">
                                          <input
                                            type="text"
                                            name="subject"
                                            size="40"
                                            className="wpcf7-form-control wpcf7-text"
                                            id="form-subject"
                                            aria-invalid="false"
                                            placeholder={form_subject}
                                            required
                                          />
                                        </span>
                                      </div>
                                      <div className="mb-4">
                                        <span className="wpcf7-form-control-wrap textarea-339">
                                          <textarea
                                            name="message"
                                            cols="40"
                                            rows="3"
                                            className="wpcf7-form-control wpcf7-textarea form-control"
                                            id="textarea"
                                            aria-invalid="false"
                                            placeholder={form_message}
                                            required
                                          ></textarea>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <p>
                                    <button className="btn btn-default btn-sm" type="submit">
                                      <span>{form_button}</span>
                                      <i className="opal-icon-arrow-right" aria-hidden="true"></i>
                                    </button>
                                  </p>
                                  <div className="wpcf7-response-output" aria-hidden="true"></div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ContactPage;
