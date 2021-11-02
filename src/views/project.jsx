const React = require('react');
const Layout = require('./layouts/default');

function ProjectPage(props) {
  const {
    currentPath,
    lang,
    layout,
    name,
    main_image,
    website_link,
    website_label,
    overview_label,
    amenities_label,
    gallery_label,
    about_project_label,
    overview,
    about_project,
    amenities,
    status_label,
    location_label,
    type_label,
    start_date_label,
    end_date_label,
    investment_label,
    status,
    location,
    start_date,
    end_date,
    type,
    investment,
    images,
    about_us,
    about_us_label,
    projects,
  } = props;
  return (
    <>
      <Layout
        {...layout}
        title={name}
        lang={lang}
        currentPath={currentPath}
        isProject
        about_us={about_us}
        about_us_label={about_us_label}
        projects={projects}
      >
        <link rel="stylesheet" id="elementor-icons-css" href="/css/elementor-icons.css" type="text/css" media="all" />
        <link rel="stylesheet" id="post-2965-css" href="/css/post-2965.css" type="text/css" media="all" />
        <div id="page-title-bar" className="page-title-bar">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center">
              <div
                className="page-title-bar-inner d-flex flex-column align-items-center w-100"
                style={{ paddingTop: '120px' }}
              >
                <div className="page-header">
                  <h1 className="page-title typo-heading">{name}</h1>
                </div>
                {website_link && (
                  <div className="breadcrumb">
                    <a className="breadcrumb-projects" href={website_link}>
                      <span>{website_label}</span>
                      <span className="breadcrumb-icon">
                        <i className="opal-icon-arrow-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="site-content-contain">
          <div id="content" className="site-content">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="row single-portfolio-row">
                  <div className="col-12 single-portfolio-summary">
                    <div className="single-portfolio-summary-inner">
                      <ul className="single-portfolio-menu">
                        <li>
                          <a href="#overview">{overview_label}</a>
                        </li>
                        <li>
                          <a href="#aboutProject">{about_project_label}</a>
                        </li>
                        <li>
                          <a href="#amenities">{amenities_label}</a>
                        </li>
                        <li>
                          <a href="#gallery">{gallery_label}</a>
                        </li>
                      </ul>
                      <div id="overview" className="w-100">
                        <h3 className="single-portfolio-summary-meta-title">{overview_label}</h3>
                      </div>
                      <div className="single-portfolio-summary-meta row w-100">
                        <div className="col-xl-8 col-12">
                          <div className="row">
                            <div className="col-xl-6 col-12 pt-3">
                              <img
                                width="700"
                                height="379"
                                src={main_image}
                                className="attachment-rehomes-gallery-image size-rehomes-gallery-image wp-post-image"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div className="col-xl-6 col-12">
                              <div className="px-xl-3" dangerouslySetInnerHTML={{ __html: overview }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-12">
                          <ul className="single-portfolio-summary-meta-list">
                            {status && <li>
                              <span className="meta-title">{status_label} </span>
                              <span className="meta-value">{status}</span>
                            </li>}
                            {location && <li>
                              <span className="meta-title">{location_label}</span>
                              <span className="meta-value">{location}</span>
                            </li>}
                            {type && <li>
                              <span className="meta-title">{type_label}</span>
                              <span className="meta-value">{type}</span>
                            </li>}
                            {start_date && <li>
                              <span className="meta-title">{start_date_label}</span>
                              <span className="meta-value">{start_date}</span>
                            </li>}
                            {end_date && <li>
                              <span className="meta-title">{end_date_label}</span>
                              <span className="meta-value">{end_date}</span>
                            </li>}
                            {investment && <li>
                              <span className="meta-title">{investment_label}</span>
                              <span className="meta-value">{investment}</span>
                            </li>}
                          </ul>
                        </div>
                      </div>
                      <div className="single-portfolio-summary-content">
                        <div
                          data-elementor-type="wp-post"
                          data-elementor-id="2596"
                          className="elementor elementor-2596"
                          data-elementor-settings="[]"
                        >
                          <div className="elementor-section-wrap">
                            <section
                              className="
                              elementor-section
                              elementor-top-section
                              elementor-element
                              elementor-element-7a70a056
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                              data-id="7a70a056"
                              data-element_type="section"
                              id="aboutProject"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="
                                  elementor-column
                                  elementor-col-100
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-7b4a4a66
                                "
                                  data-id="7b4a4a66"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="
                                      elementor-element
                                      elementor-element-3ef73e88
                                      elementor-widget
                                      elementor-widget-text-editor
                                    "
                                      data-id="3ef73e88"
                                      data-element_type="widget"
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix">
                                          <h2>{about_project_label}</h2>
                                          <div dangerouslySetInnerHTML={{ __html: about_project }}></div>
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
                              elementor-element-77d97dc
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                              data-id="77d97dc"
                              data-element_type="section"
                              id="amenities"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="
                                  elementor-column
                                  elementor-col-100
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-bca0ec9
                                "
                                  data-id="bca0ec9"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="
                                      elementor-element
                                      elementor-element-ba5a4ee
                                      elementor-widget
                                      elementor-widget-text-editor
                                    "
                                      data-id="ba5a4ee"
                                      data-element_type="widget"
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix">
                                          <h2>{amenities_label}</h2>
                                          <div dangerouslySetInnerHTML={{ __html: amenities }}></div>
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
                              elementor-element-0517f9d
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                              data-id="0517f9d"
                              data-element_type="section"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="
                                  elementor-column
                                  elementor-col-100
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-cd18536
                                "
                                  data-id="cd18536"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="
                                      elementor-element
                                      elementor-element-da37fa2
                                      elementor-widget
                                      elementor-widget-text-editor
                                    "
                                      data-id="da37fa2"
                                      data-element_type="widget"
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix">
                                          <h2>{gallery_label}</h2>
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
                              elementor-element-5ace4f6
                              elementor-section-boxed
                              elementor-section-height-default
                              elementor-section-height-default
                            "
                              data-id="5ace4f6"
                              data-element_type="section"
                              id="gallery"
                            >
                              <div className="elementor-container elementor-column-gap-default">
                                <div
                                  className="
                                  elementor-column
                                  elementor-col-100
                                  elementor-top-column
                                  elementor-element
                                  elementor-element-2c91f5b
                                "
                                  data-id="2c91f5b"
                                  data-element_type="column"
                                >
                                  <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      className="
                                      elementor-element elementor-element-7efbb99
                                      gallery-spacing-custom
                                      elementor-widget elementor-widget-image-gallery
                                    "
                                      data-id="7efbb99"
                                      data-element_type="widget"
                                      data-widget_type="image-gallery.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image-gallery">
                                          <div
                                            id="gallery-1"
                                            className="gallery galleryid-2596 gallery-columns-3 gallery-size-full"
                                          >
                                            {images.map(({ image, text }) => (
                                              <figure className="gallery-item">
                                                <div className="gallery-icon landscape">
                                                  <a
                                                    data-elementor-open-lightbox="yes"
                                                    data-elementor-lightbox-slideshow="7efbb99"
                                                    data-elementor-lightbox-title={text}
                                                    href={image}
                                                  >
                                                    <img
                                                      width="1200"
                                                      height="650"
                                                      src={image}
                                                      className="attachment-full size-full"
                                                      alt={text}
                                                      loading="lazy"
                                                    />
                                                  </a>
                                                </div>
                                              </figure>
                                            ))}
                                          </div>
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
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="/js/preloaded-modules.js" id="preloaded-modules-js"></script>
        <script type="text/javascript" src="/js/swiper.min.js" id="swiper-js"></script>
      </Layout>
      <script type="text/javascript" src="/js/dialog.min.js" id="dialog-js"></script>
    </>
  );
}

module.exports = ProjectPage;
