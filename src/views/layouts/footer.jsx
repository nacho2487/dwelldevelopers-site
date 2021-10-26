const React = require("react");

function Footer(props) {
  const {
    contact: {
      title: contact_title,
      phone: { number: phone_number, title: phone_title },
      email: { title: email_title, text: email_text },
    },
    usefull_links: { title: usefull_links_title, links: usefull_links },
    projects: { title: proyects_title, projects: proyects_items },
    about_us_label,
    about_us,
  } = props;
  return (
    <footer id="colophon" className="site-footer">
      <div className="wrap">
        <div className="container">
          <div
            data-elementor-type="wp-post"
            data-elementor-id="161"
            className="elementor elementor-161"
            data-elementor-settings="[]"
          >
            <div className="elementor-section-wrap">
              <section
                className="
                elementor-section
                elementor-top-section
                elementor-element
                elementor-element-e59b0e0
                elementor-section-stretched
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
              "
                data-id="e59b0e0"
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
                    elementor-element-b197957
                  "
                    data-id="b197957"
                    data-element_type="column"
                  >
                    <div
                      className="
                      elementor-widget-wrap elementor-element-populated
                    "
                    >
                      <section
                        className="
                        elementor-section
                        elementor-inner-section
                        elementor-element
                        elementor-element-f89b0c3
                        elementor-section-boxed
                        elementor-section-height-default
                        elementor-section-height-default
                      "
                        data-id="f89b0c3"
                        data-element_type="section"
                      >
                        <div
                          className="
                          elementor-container elementor-column-gap-no
                        "
                        >
                          <div
                            className="
                            elementor-column
                            elementor-col-33
                            elementor-inner-column
                            elementor-element
                            elementor-element-0158fc5
                          "
                            data-id="0158fc5"
                            data-element_type="column"
                          >
                            <div
                              className="
                              elementor-widget-wrap
                              elementor-element-populated
                            "
                            >
                              <div
                                className="
                                elementor-element
                                elementor-element-844ae63
                                elementor-widget
                                elementor-widget-heading
                              "
                                data-id="844ae63"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-heading-wrapper">
                                    <div
                                      className="
                                      elementor-heading-wrapper-inner
                                    "
                                    >
                                      <h2
                                        className="
                                        elementor-heading-title
                                        elementor-size-default
                                      "
                                      >
                                        {contact_title}
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                                elementor-element
                                elementor-element-2ab9488
                                elementor-widget
                                elementor-widget-text-editor
                              "
                                data-id="2ab9488"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div
                                    className="
                                    elementor-text-editor
                                    elementor-clearfix
                                  "
                                  >
                                    <p>{phone_title}</p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                                elementor-element
                                elementor-element-93fd0ab
                                elementor-widget
                                elementor-widget-text-editor
                              "
                                data-id="93fd0ab"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div
                                    className="
                                    elementor-text-editor
                                    elementor-clearfix
                                  "
                                  >
                                    <p>
                                      <span
                                        data-story-id="story_92aa511021d9216a4fa516f47defc6d8"
                                        data-room-id="room_41b9d5a746797b69b8e12ab575213f5d"
                                        data-timestamp="1623329837899"
                                        data-text={phone_number}
                                        data-userid="1389599985763807232"
                                        data-orgid="1389599985763807233"
                                      >
                                        {phone_number}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="
                            elementor-column
                            elementor-col-33
                            elementor-inner-column
                            elementor-element
                            elementor-element-2a44980
                          "
                            data-id="2a44980"
                            data-element_type="column"
                          >
                            <div
                              className="
                              elementor-widget-wrap
                              elementor-element-populated
                            "
                            >
                              <div
                                className="
                                elementor-element
                                elementor-element-1413182
                                elementor-widget
                                elementor-widget-text-editor
                              "
                                data-id="1413182"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div
                                    className="
                                    elementor-text-editor
                                    elementor-clearfix
                                  "
                                  >
                                    <p>{email_title}</p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                                elementor-element
                                elementor-element-d13c940
                                elementor-widget
                                elementor-widget-text-editor
                              "
                                data-id="d13c940"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div
                                    className="
                                    elementor-text-editor
                                    elementor-clearfix
                                  "
                                  >
                                    <p>
                                      <a
                                        href={`mailto:${email_text}`}
                                        className="__cf_email__"
                                      >
                                        {email_text}
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="
                            elementor-column
                            elementor-col-33
                            elementor-inner-column
                            elementor-element
                            elementor-element-982896c
                            elementor-hidden-tablet
                            elementor-hidden-phone
                          "
                            data-id="982896c"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap"></div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="
                elementor-section
                elementor-top-section
                elementor-element
                elementor-element-f096368
                elementor-section-stretched
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
              "
                data-id="f096368"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="
                    elementor-column
                    elementor-col-25
                    elementor-top-column
                    elementor-element
                    elementor-element-fd7701d
                  "
                    data-id="fd7701d"
                    data-element_type="column"
                  >
                    <div
                      className="
                      elementor-widget-wrap elementor-element-populated
                    "
                    >
                      <div
                        className="
                        elementor-element
                        elementor-element-f428c96
                        elementor-widget
                        elementor-widget-heading
                      "
                        data-id="f428c96"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-heading-wrapper">
                            <div className="elementor-heading-wrapper-inner">
                              <h2
                                className="
                                elementor-heading-title
                                elementor-size-default
                              "
                              >
                                {about_us_label}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                        elementor-element
                        elementor-element-fdf4a01
                        elementor-widget
                        elementor-widget-text-editor
                      "
                        data-id="fdf4a01"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-text-editor elementor-clearfix">
                            <p>{about_us}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    elementor-column
                    elementor-col-25
                    elementor-top-column
                    elementor-element
                    elementor-element-fbfb74d
                  "
                    data-id="fbfb74d"
                    data-element_type="column"
                  >
                    <div
                      className="
                      elementor-widget-wrap elementor-element-populated
                    "
                    >
                      <div
                        className="
                        elementor-element
                        elementor-element-5d2741f
                        elementor-widget
                        elementor-widget-heading
                      "
                        data-id="5d2741f"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-heading-wrapper">
                            <div className="elementor-heading-wrapper-inner">
                              <h2
                                className="
                                elementor-heading-title
                                elementor-size-default
                              "
                              >
                                {proyects_title}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                        elementor-element elementor-element-6206ac4
                        icon-list-style1
                        elementor-widget elementor-widget-icon-list
                      "
                        data-id="6206ac4"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            {proyects_items.map(({ link, name }) => (
                              <li className="elementor-icon-list-item">
                                <a href={link}>
                                  <span className="elementor-icon-list-icon">
                                    <i
                                      className="opal-icon-chevron-right"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span className="elementor-icon-list-text">
                                    {name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    elementor-column
                    elementor-col-25
                    elementor-top-column
                    elementor-element
                    elementor-element-04f49e0
                  "
                    data-id="04f49e0"
                    data-element_type="column"
                  >
                    <div
                      className="
                      elementor-widget-wrap elementor-element-populated
                    "
                    >
                      <div
                        className="
                        elementor-element
                        elementor-element-585d552
                        elementor-widget
                        elementor-widget-heading
                      "
                        data-id="585d552"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-heading-wrapper">
                            <div className="elementor-heading-wrapper-inner">
                              <h2
                                className="
                                elementor-heading-title
                                elementor-size-default
                              "
                              >
                                {usefull_links_title}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="
                        elementor-element elementor-element-5ea92c2
                        icon-list-style1
                        elementor-widget elementor-widget-icon-list
                      "
                        data-id="5ea92c2"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            {usefull_links.map(({ link, title }) => (
                              <li className="elementor-icon-list-item">
                                <a href={link}>
                                  <span className="elementor-icon-list-icon">
                                    <i
                                      className="opal-icon-chevron-right"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span className="elementor-icon-list-text">
                                    {title}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
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
                elementor-element-069dc66
                elementor-section-stretched
                elementor-section-boxed
                elementor-section-height-default
                elementor-section-height-default
              "
                data-id="069dc66"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="
                    elementor-column
                    elementor-col-50
                    elementor-top-column
                    elementor-element
                    elementor-element-0ad5878
                  "
                    data-id="0ad5878"
                    data-element_type="column"
                  >
                    <div
                      className="
                      elementor-widget-wrap elementor-element-populated
                    "
                    >
                      <div
                        className="
                        elementor-element
                        elementor-element-a85a7eb
                        elementor-widget
                        elementor-widget-text-editor
                      "
                        data-id="a85a7eb"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-text-editor elementor-clearfix">
                            <p>
                              © 2021 &#8211; dwelldevelopers. All rights
                              reserved.
                            </p>
                          </div>
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
                    elementor-element-3d004e0
                  "
                    data-id="3d004e0"
                    data-element_type="column"
                  >
                    <div
                      className="
                      elementor-widget-wrap elementor-element-populated
                    "
                    >
                      <div
                        className="
                        elementor-element
                        elementor-element-9474fb4
                        elementor-widget
                        elementor-widget-text-editor
                      "
                        data-id="9474fb4"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-text-editor elementor-clearfix"></div>
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
    </footer>
  );
}

module.exports = Footer;
