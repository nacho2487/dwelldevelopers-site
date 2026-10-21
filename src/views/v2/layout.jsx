const React = require('react');

function Layout(props) {
  const { site, lang, children, bodyClass } = props;
  const { meta, nav, nav_cta, footer } = site;
  const isEn = lang.lang_locale === 'en';
  const homeLink = isEn ? '/en' : '/';
  const year = new Date().getFullYear();

  return (
    <html lang={lang.lang_locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="theme-color" content="#0d0d0c" />
        <link rel="canonical" href={`https://dwelldevelopers.com${isEn ? '/en' : '/'}`} />
        <link rel="alternate" href="https://dwelldevelopers.com/" hrefLang="es" />
        <link rel="alternate" href="https://dwelldevelopers.com/en" hrefLang="en" />
        <link rel="icon" href="/images/brand/dwell-logo-cuadrado.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Jost:wght@300;400;500;600&display=swap"
        />
        <link rel="stylesheet" href="/css/v2.css" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-66JLPE6MNN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-66JLPE6MNN');",
          }}
        />
      </head>
      <body className={bodyClass}>
        <header className="site-header" data-header>
          <div className="container header-inner">
            <a href={homeLink} className="brand" aria-label="Dwell Developers">
              <img src="/images/brand/dwell-badge.png" alt="Dwell Developers" width="200" height="48" />
            </a>
            <nav className="main-nav" aria-label="Principal">
              {nav.map(({ title, link }) => (
                <a key={link} href={link} className="nav-link">
                  {title}
                </a>
              ))}
              <a href={nav_cta.link} className="btn btn-small btn-light nav-cta">
                {nav_cta.title}
              </a>
              <a href={`/${lang.option_locale === 'es' ? '' : 'en'}`} className="lang-switch" hrefLang={lang.option_locale}>
                <span className="is-current">{lang.lang_locale.toUpperCase()}</span>
                <span className="sep">/</span>
                <span>{lang.option_locale.toUpperCase()}</span>
              </a>
            </nav>
            <button className="menu-toggle" type="button" aria-label="Menú" aria-expanded="false" data-menu-toggle>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        <div className="mobile-menu" data-mobile-menu aria-hidden="true">
          <nav>
            {nav.map(({ title, link }) => (
              <a key={link} href={link} className="mobile-link" data-menu-close>
                {title}
              </a>
            ))}
            <a href={nav_cta.link} className="mobile-link" data-menu-close>
              {nav_cta.title}
            </a>
          </nav>
          <div className="mobile-menu-footer">
            <a href={`tel:${footer.phone.replace(/\s/g, '')}`}>{footer.phone}</a>
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
            <a href={`/${lang.option_locale === 'es' ? '' : 'en'}`}>
              {lang.lang_locale.toUpperCase()} / <strong>{lang.option_locale.toUpperCase()}</strong>
            </a>
          </div>
        </div>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <img src="/images/brand/dwell-wordmark-blanco.png" alt="Dwell Developers" width="232" height="26" />
              <p>{footer.tagline}</p>
            </div>
            <div>
              <h4>{footer.contact_title}</h4>
              <ul>
                <li>
                  <a href={`tel:${footer.phone.replace(/\s/g, '')}`}>{footer.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${footer.email}`}>{footer.email}</a>
                </li>
                <li>{footer.location}</li>
              </ul>
            </div>
            <div>
              <h4>{footer.menu_title}</h4>
              <ul>
                {nav.map(({ title, link }) => (
                  <li key={link}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
                <li>
                  <a href={nav_cta.link}>{nav_cta.title}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>
              © {year} Dwell Developers. {footer.rights}
            </span>
            <a href={`/${lang.option_locale === 'es' ? '' : 'en'}`}>{lang.option_text}</a>
          </div>
        </footer>

        <script src="/js/v2.js" defer></script>
      </body>
    </html>
  );
}

module.exports = Layout;
