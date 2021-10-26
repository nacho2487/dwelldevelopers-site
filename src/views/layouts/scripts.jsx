var React = require("react");

function Scripts() {
  return (
    <>
      <script
        type="text/javascript"
        src="/js/jquery.js"
        id="jquery-core-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/jquery-migrate.js"
        id="jquery-migrate-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/modernizr.js"
        id="modernizr-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/rbtools.js"
        id="tp-tools-js"
      ></script>
      <script type="text/javascript" src="/js/rs6.js" id="revmin-js"></script>
      <script type="text/javascript" src="/js/front-js.js" id="wp-weglot-js-js"></script>
      <script
        type="text/javascript"
        src="/js/smartmenus.js"
        id="smartmenus-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/jquery.magnific-popup.min.js"
        id="magnific-popup-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/mlpushmenu.js"
        id="mlpushmenu-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/classie.js"
        id="classie-js"
      ></script>
      <link
        rel="stylesheet"
        property="stylesheet"
        id="rs-icon-set-fa-icon-css"
        href="/css/font-aweseome.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        property="stylesheet"
        id="rs-icon-set-pe-7s-css"
        href="/css/revslider.css"
        type="text/css"
        media="all"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400%2C700%2C500%7CBe+Vietnam:600%2C400%2C700%7CDM+Serif+Display:400%7COpen+Sans:400"
        rel="stylesheet"
        property="stylesheet"
        media="all"
        type="text/css"
      />
      <script
        type="text/javascript"
        src="/js/webpack.runtime.min.js"
        id="elementor-webpack-runtime-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/frontend-modules.min.js"
        id="elementor-frontend-modules-js"
      ></script>
      <script
        type="text/javascript"
        id="elementor-frontend-js-before"
        dangerouslySetInnerHTML={{
          __html: `
    var elementorFrontendConfig = {
      environmentMode: {
        edit: false,
        wpPreview: false,
        isScriptDebug: false,
      },
      i18n: {
        shareOnFacebook: "Compartir en Facebook",
        shareOnTwitter: "Compartir en Twitter",
        pinIt: "Fijarlo",
        download: "Descargar",
        downloadImage: "Descargar imagen",
        fullscreen: "Pantalla completa",
        zoom: "Zoom",
        share: "Compartir",
        playVideo: "Reproducir v\u00eddeo",
        previous: "Anterior",
        next: "Siguiente",
        close: "Cerrar",
      },
      is_rtl: false,
      breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
      responsive: {
        breakpoints: {
          mobile: {
            label: "M\u00f3vil",
            value: 767,
            default_value: 767,
            direction: "max",
            is_enabled: true,
          },
          mobile_extra: {
            label: "Celular grande",
            value: 880,
            default_value: 880,
            direction: "max",
            is_enabled: false,
          },
          tablet: {
            label: "Tableta",
            value: 1024,
            default_value: 1024,
            direction: "max",
            is_enabled: true,
          },
          tablet_extra: {
            label: "Tableta grande",
            value: 1200,
            default_value: 1200,
            direction: "max",
            is_enabled: false,
          },
          laptop: {
            label: "Portable",
            value: 1366,
            default_value: 1366,
            direction: "max",
            is_enabled: false,
          },
          widescreen: {
            label: "Pantalla grande",
            value: 2400,
            default_value: 2400,
            direction: "min",
            is_enabled: false,
          },
        },
      },
      version: "3.4.4",
      is_static: false,
      experimentalFeatures: {
        e_dom_optimization: true,
        a11y_improvements: true,
        e_import_export: true,
        "landing-pages": true,
        "elements-color-picker": true,
        "admin-top-bar": true,
      },
      urls: {
        assets:
          "",
      },
      settings: { page: [], editorPreferences: [] },
      kit: {
        active_breakpoints: ["viewport_mobile", "viewport_tablet"],
        global_image_lightbox: "yes",
        lightbox_enable_counter: "yes",
        lightbox_enable_fullscreen: "yes",
        lightbox_enable_zoom: "yes",
        lightbox_enable_share: "yes",
        lightbox_title_src: "title",
        lightbox_description_src: "description",
      },
      post: {
        id: 148,
        title: "dwelldevelopers%20%E2%80%93%20Real%20Estate%20Developer",
        excerpt: "",
        featuredImage: false,
      },
      user: { roles: ["administrator"] },
    };
    `,
        }}
      />
      <script
        type="text/javascript"
        src="/js/frontend.min.js?ver=3.4.4"
        id="elementor-frontend-js"
      ></script>
      <script
        type="text/javascript"
        src="/js/frontend.js"
        id="opal-elementor-frontend-js"
      ></script>
    </>
  );
}

module.exports = Scripts;
