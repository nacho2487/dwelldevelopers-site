const React = require("react");
const classNames = require("classnames");

function Header(props) {
  const { sections, currentPath } = props;
  return (
    <header id="masthead" className="site-header">
      <div className="site-header">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="122"
          className="elementor elementor-122"
          data-elementor-settings="[]"
        >
          <div className="elementor-section-wrap">
            <section
              className="
              elementor-section
              elementor-top-section
              elementor-element
              elementor-element-abcfe3f
              elementor-section-stretched
              elementor-section-content-middle
              elementor-section-boxed
              elementor-section-height-default
              elementor-section-height-default
            "
              data-id="abcfe3f"
              data-element_type="section"
              data-settings='{"stretch_section":"section-stretched","background_background":"classNameic"}'
            >
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="
                  elementor-column
                  elementor-col-50
                  elementor-top-column
                  elementor-element
                  elementor-element-6b66c40
                "
                  data-id="6b66c40"
                  data-element_type="column"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div
                    className="
                    elementor-widget-wrap elementor-element-populated
                  "
                  >
                    <div
                      className="
                      elementor-element
                      elementor-element-84846c2
                      elementor-widget
                      elementor-widget-opal-site-logo
                      elementor-widget-image
                    "
                      data-id="84846c2"
                      data-element_type="widget"
                      data-widget_type="opal-site-logo.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-image">
                          <a href="/">
                            <img
                              width="220"
                              height="70"
                              src="/images/logo.png"
                              className="attachment-full size-full"
                              alt=""
                              loading="lazy"
                            />
                          </a>
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
                  elementor-element-39b1941
                "
                  data-id="39b1941"
                  data-element_type="column"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div
                    className="
                    elementor-widget-wrap elementor-element-populated
                  "
                  >
                    <div
                      className="
                      elementor-element elementor-element-8a8c4b4
                      elementor-nav-menu__align-right
                      elementor-nav-menu--dropdown-mobile
                      elementor-menu-toggle-mobile__align-right
                      elementor-nav-menu--indicator-angle
                      elementor-nav-menu__text-align-aside
                      elementor-nav-menu--toggle
                      elementor-nav-menu--burger
                      elementor-menu-toggle__align-left
                      elementor-widget elementor-widget-opal-nav-menu
                    "
                      data-id="8a8c4b4"
                      data-element_type="widget"
                      data-settings='{"layout":"horizontal","toggle":"burger"}'
                      data-widget_type="opal-nav-menu.default"
                    >
                      <div className="elementor-widget-container">
                        <nav
                          className="
                          elementor-nav-menu--mobile-enable
                          elementor-nav-menu--main
                          elementor-nav-menu__container
                          elementor-nav-menu--layout-horizontal
                          e--pointer-overline
                          e--animation-slide
                          e--pointer-sub-line
                        "
                          data-subMenusMinWidth="250"
                          data-subMenusMaxWidth="500"
                        >
                          <ul
                            id="menu-main-menu"
                            className="elementor-nav-menu"
                          >
                            {sections.map(({ title, link }) => {
                              const classNameActiveLi = classNames('menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-2365', {
                                'current-menu-item current_page_item': currentPath === link,
                              });
                              const classNameActiveAnchor = classNames('elementor-item', {
                                'elementor-item-active': currentPath === link,
                              });
                              return (
                                <li key={title.replace(' ', '-').toLowerCase()} className={classNameActiveLi}>
                                  <a
                                    href={link}
                                    className={classNameActiveAnchor}
                                  >
                                    <span className="menu-title">{title}</span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </nav>
                        <div
                          className="elementor-menu-toggle"
                          data-target="#menu-8a8c4b4"
                        >
                          <i className="eicon" aria-hidden="true"></i>
                          <span className="menu-toggle-title"></span>
                        </div>
                        <nav
                          id="menu-8a8c4b4"
                          className="elementor-nav-menu--canvas mp-menu"
                        >
                          <ul
                            id="menu-canvas-2-8a8c4b4"
                            className="nav-menu--canvas"
                          >
                            {sections.map(({ title, link }) => (
                              <li
                                className="
                                  menu-item
                                  menu-item-type-custom
                                  menu-item-object-custom
                                  current-menu-item current_page_item
                                  menu-item-home menu-item-2365
                                "
                              >
                                <a href={link} aria-current="page">
                                  {title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  );
}

module.exports = Header;
