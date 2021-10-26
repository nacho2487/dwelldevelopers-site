const React = require('react');
const Styles = require('./styles');
const Scripts = require('./scripts');
const Langs = require('./langs');
const Header = require('./header');
const Footer = require('./footer');
const SliderScript = require('./slider-script');
const { default: classNames } = require('classnames');

function Layout(props) {
  const {
    footer,
    title_dwell,
    title,
    children,
    header,
    currentPath,
    lang,
    isHome,
    isProject,
    isAboutUs,
    isContact,
    projects,
    about_us,
    about_us_label,
  } = props;
  const bodyClassNames = classNames(
    'page-template-default page page-id-148 logged-in no-customize-support custom-background wp-custom-logo opal-style chrome platform-osx opal-layout-wide opal-page-title-right-left opal-footer-skin-light opal-header-absolute elementor-default elementor-kit-9 elementor-page elementor-page-148',
    {
      'home rehomes-front-page': isHome,
      'osf_portfolio-template-default single single-osf_portfolio': isProject,
      'elementor-page-371': isAboutUs,
      'elementor-page-341 page-template-page-elementor ': isContact,
    },
  );
  const titleHtml = title ? `${title} | ${title_dwell}` : title_dwell;
  return (
    <html>
      <head>
        <title>{titleHtml}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link href="https://fonts.gstatic.com" crossOrigin="true" rel="preconnect" />
        <link rel="canonical" href="https://dwelldevelopers.com/" />
        <link rel="shortlink" href="https://dwelldevelopers.com/" />
        <Styles />
        <link rel="alternate" href="https://dwelldevelopers.com/" hrefLang="en" />
        <link rel="alternate" href="https://dwelldevelopers.com/es/" hrefLang="es" />
        <SliderScript />
      </head>
      <body data-rsssl="1" className={bodyClassNames}>
        <div className="opal-wrapper">
          <div id="page" className="site">
            <Header {...header} currentPath={currentPath} />
            {children}
            <Footer {...footer} about_us={about_us} about_us_label={about_us_label} projects={projects} />
          </div>
        </div>
        <Scripts />
        <Langs {...lang} />
      </body>
    </html>
  );
}

module.exports = Layout;
