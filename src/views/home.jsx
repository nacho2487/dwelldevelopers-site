const React = require('react');
const Layout = require('./layouts/default');

function HomePage(props) {
  const {
    currentPath,
    lang,
    layout,
    slides: {
      title_1,
      subtitle_1,
      button_text_1,
      title_2,
      subtitle_2,
      button_text_2,
      title_3,
      subtitle_3,
      button_text_3,
    },
    mission: { title: mission_title, text: mission_text, subtext: mission_subtext },
    services: {
      residential: { title: residential_title, text: residential_text },
      commercial: { title: commercial_title, text: commercial_text },
      investor: { title: investor_title, text: investor_text },
    },
    projects_section: { title: projects_title, subtitle: projects_subtitle, link: projects_link },
    why: {
      title: why_title,
      subtitle: why_subtitle,
      reassons: {
        quality: { title: quality_title, text: quality_text },
        amenities: { title: amenities_title, text: amenities_text },
        environment: { title: environment_title, text: environment_text },
        community: { title: community_title, text: community_text },
      },
    },
    projects,
    about_us,
    about_us_label,
  } = props;

  return (
    <Layout
      {...layout}
      lang={lang}
      currentPath={currentPath}
      projects={projects}
      isHome
      about_us={about_us}
      about_us_label={about_us_label}
    >
      <div className="site-content-contain">
        <div id="content" className="site-content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <div
                data-elementor-type="wp-page"
                data-elementor-id="148"
                className="elementor elementor-148"
                data-elementor-settings="[]"
              >
                <div className="elementor-section-wrap">
                  <section
                    className="
          elementor-section
          elementor-top-section
          elementor-element
          elementor-element-76eb734
          elementor-section-stretched
          elementor-section-boxed
          elementor-section-height-default
          elementor-section-height-default
        "
                    data-id="76eb734"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="
              elementor-column
              elementor-col-100
              elementor-top-column
              elementor-element
              elementor-element-aca202e
            "
                        data-id="aca202e"
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
                  elementor-element-0fed0ca
                  elementor-widget
                  elementor-widget-opal-revslider
                "
                            data-id="0fed0ca"
                            data-element_type="widget"
                            data-widget_type="opal-revslider.default"
                          >
                            <div className="elementor-widget-container">
                              <p className="rs-p-wp-fix"></p>
                              <rs-module-wrap
                                id="rev_slider_1_1_wrapper"
                                data-alias="slider-home1"
                                data-source="gallery"
                                style={{
                                  background: 'transparent',
                                  padding: 0,
                                  margin: '0px auto',
                                  marginTop: 0,
                                  marginBottom: 0,
                                }}
                              >
                                <rs-module id="rev_slider_1_1" data-version="6.4.2">
                                  <rs-slides>
                                    <rs-slide
                                      data-key="rs-1"
                                      data-title="Slide1"
                                      data-anim="p:transparent;"
                                      data-in="o:0;"
                                      data-out="o:0;"
                                      data-alttrans="slidingoverlayright,slidingoverlayup"
                                    >
                                      <img
                                        loading="lazy"
                                        src="/images/2057_01-iluminacion-nocturna_ZEN_F2.jpeg"
                                        title="2057_01 &#8211; iluminacion nocturna_ZEN_F2"
                                        width="1200"
                                        height="675"
                                        className="rev-slidebg"
                                        data-no-retina
                                      />
                                      <rs-group
                                        id="slider-1-slide-1-layer-1"
                                        data-type="group"
                                        data-xy="x:l,c,c,c;xo:160px,0,0,0;y:m;yo:0,0,-80px,18px;"
                                        data-text="l:22;a:inherit,center,center,center;"
                                        data-dim="w:516px,620px,600px,451px;h:375px,374px,375px,320px;"
                                        data-frame_0="x:-50px;"
                                        data-frame_1="sp:2000;sR:10;"
                                        data-frame_999="o:0;st:w;sR:6990;sA:9000;"
                                        style={{ zIndex: 11 }}
                                      >
                                        <rs-layer
                                          id="slider-1-slide-1-layer-2"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;"
                                          data-text="s:15;l:22;fw:600;a:inherit,center,center,center;"
                                          data-frame_0="x:-50px;"
                                          data-frame_1="st:180;sp:2000;sR:170;"
                                          data-frame_999="x:-50px;o:0;st:w;sp:2000;sR:6820;"
                                          style={{
                                            zIndex: 8,
                                            fontFamily: 'Be Vietnam',
                                          }}
                                        >
                                          {subtitle_1}{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-1-layer-3"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;yo:58px,58px,58px,57px;"
                                          data-text="s:60,60,60,50;l:60,60,60,50;a:inherit;"
                                          data-dim="w:auto,544px,544px,424px;h:auto,209px,209px,184px;"
                                          data-frame_0="o:1;"
                                          data-frame_0_lines="d:10;x:-50px;o:0;"
                                          data-frame_1="st:760;sp:2000;sR:750;"
                                          data-frame_1_lines="d:10;"
                                          data-frame_999="z:0;sX:1;sY:1;o:1;rX:0;rY:0;rZ:0;skX:0;skY:0;st:w;sp:2000;sR:6040;"
                                          data-frame_999_lines="d:10;x:-50px;o:0;"
                                          style={{
                                            zIndex: 9,
                                            fontFamily: 'DM Serif Display',
                                          }}
                                          dangerouslySetInnerHTML={{ __html: title_1 }}
                                        ></rs-layer>
                                        <a
                                          id="slider-1-slide-1-layer-5"
                                          className="rs-layer rev-btn"
                                          href="/proyectos"
                                          target="_self"
                                          data-type="button"
                                          data-color="rgba(255,255,255,1)"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;xo:-1px,0,0,0;yo:304px,305px,305px,257px;"
                                          data-text="s:11;l:60,60,60,54;ls:2px;a:inherit;"
                                          data-padding="r:40;l:40;"
                                          data-border="bor:3px,3px,3px,3px;"
                                          data-frame_0="x:-50px;"
                                          data-frame_1="st:1310;sp:1610;sR:1300;"
                                          data-frame_999="x:-50px;o:0;st:w;sp:2000;sR:6080;"
                                          data-frame_hover="bgc:#bc986b;boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 10,
                                            backgroundColor: '#bda588',
                                            fontFamily: 'Be Vietnam',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          {button_text_1}
                                          <i className="fa-long-arrow-right"></i>{' '}
                                        </a>
                                      </rs-group>
                                      <rs-group
                                        id="slider-1-slide-1-layer-6"
                                        data-type="group"
                                        data-xy="x:r,r,r,c;xo:50px,30px,30px,0;y:b;yo:30px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:450px,347px,347px,347px;h:50px,47,47,47px;"
                                        data-basealign="slide"
                                        data-frame_0="o:1;"
                                        data-frame_1="sR:10;"
                                        data-frame_999="st:w;sR:8690;sA:9000;"
                                        style={{ zIndex: 22 }}
                                      >
                                        <rs-layer
                                          id="slider-1-slide-1-layer-7"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-border="bos:solid;boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 16,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          01{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-1-layer-9"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="xo:60px;y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-actions="o:click;a:jumptoslide;slide:rs-2;"
                                          data-border="boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 17,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          02{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-1-layer-10"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="xo:120px;y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-actions="o:click;a:jumptoslide;slide:rs-3;"
                                          data-border="boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 18,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          03{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-1-layer-11"
                                          className="tp-shape tp-shapewrapper"
                                          data-type="shape"
                                          data-rsp_ch="on"
                                          data-xy="xo:160px,154px,154px,154px;y:m;"
                                          data-text="fw:700;a:inherit;"
                                          data-dim="w:160px,100px,100px,100px;h:1px;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 19,
                                            backgroundColor: '#ffffff',
                                          }}
                                        ></rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-1-layer-12"
                                          className="rev-btn"
                                          data-type="button"
                                          data-xy="x:l,r,r,r;xo:345px,40px,40px,40px;y:m;"
                                          data-text="s:36;l:36;fw:500;a:inherit;"
                                          data-dim="w:36px;h:36px;"
                                          data-actions="o:click;a:jumptoslide;slide:previous;"
                                          data-rsp_bd="off"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          data-frame_hover="c:#000;bgc:rgba(255,255,255,0.7);boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 20,
                                            fontFamily: 'Roboto',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          <i className="pe-7s-angle-left"></i>{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-1-layer-13"
                                          className="rev-btn"
                                          data-type="button"
                                          data-xy="x:l,r,r,r;xo:400px,0,0,0;y:m;"
                                          data-text="s:36;l:36;fw:500;a:inherit;"
                                          data-dim="w:36px;h:36px;"
                                          data-actions="o:click;a:jumptoslide;slide:next;"
                                          data-rsp_bd="off"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          data-frame_hover="c:#000;bgc:rgba(255,255,255,0.7);boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 21,
                                            fontFamily: 'Roboto',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          <i className="pe-7s-angle-right"></i>{' '}
                                        </rs-layer>
                                      </rs-group>
                                    </rs-slide>
                                    <rs-slide
                                      data-key="rs-2"
                                      data-title="Slide2"
                                      data-anim="p:transparent;"
                                      data-in="o:0;"
                                      data-out="o:0;"
                                      data-alttrans="slidingoverlayright,slidingoverlayup"
                                    >
                                      <img
                                        loading="lazy"
                                        src="/images/1961_04_ZEN_noche_F1.jpeg"
                                        title="1961_04_ZEN_noche_F1"
                                        width="1200"
                                        height="675"
                                        className="rev-slidebg"
                                        data-no-retina
                                      />
                                      <rs-group
                                        id="slider-1-slide-2-layer-1"
                                        data-type="group"
                                        data-xy="x:l,c,c,c;xo:160px,0,0,0;y:m;yo:0,0,-80px,14px;"
                                        data-text="l:22;a:inherit,center,center,center;"
                                        data-dim="w:516px,620px,600px,451px;h:375px,374,375px,320;"
                                        data-frame_0="x:-50px;"
                                        data-frame_1="sp:2000;sR:10;"
                                        data-frame_999="o:0;st:w;sR:6990;sA:9000;"
                                      >
                                        <rs-layer
                                          id="slider-1-slide-2-layer-2"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;"
                                          data-text="s:15;l:22;fw:600;a:inherit,center,center,center;"
                                          data-frame_0="x:-50px;"
                                          data-frame_1="st:180;sp:2000;sR:170;"
                                          data-frame_999="x:-50px;o:0;st:w;sp:2000;sR:6820;"
                                        >
                                          {subtitle_2}{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-2-layer-3"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;yo:58px,58px,58px,57px;"
                                          data-text="s:60,60,60,50;l:60,60,60,50;a:inherit;"
                                          data-dim="w:508px,544px,544px,424px;h:181px,209px,209px,184px;"
                                          data-frame_0="o:1;"
                                          data-frame_0_lines="d:10;x:-50px;o:0;"
                                          data-frame_1="st:760;sp:2000;sR:750;"
                                          data-frame_1_lines="d:10;"
                                          data-frame_999="z:0;sX:1;sY:1;o:1;rX:0;rY:0;rZ:0;skX:0;skY:0;st:w;sp:2000;sR:6040;"
                                          data-frame_999_lines="d:10;x:-50px;o:0;"
                                          style={{
                                            zIndex: 7,
                                            fontFamily: 'DM Serif Display',
                                          }}
                                          dangerouslySetInnerHTML={{ __html: title_2 }}
                                        />
                                        <a
                                          id="slider-1-slide-2-layer-5"
                                          className="rs-layer rev-btn"
                                          href="/proyectos"
                                          target="_self"
                                          data-type="button"
                                          data-color="rgba(255,255,255,1)"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;xo:-1px,0,0,0;yo:304px,305px,305px,257px;"
                                          data-text="s:11;l:60,60,60,54;ls:2px;a:inherit;"
                                          data-padding="r:40;l:40;"
                                          data-border="bor:3px,3px,3px,3px;"
                                          data-frame_0="x:-50px;"
                                          data-frame_1="st:1310;sp:1610;sR:1300;"
                                          data-frame_999="x:-50px;o:0;st:w;sp:2000;sR:6080;"
                                          data-frame_hover="bgc:#bc986b;boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 8,
                                            backgroundColor: '#bda588',
                                            fontFamily: 'Be Vietnam',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          {button_text_2}
                                          <i className="fa-long-arrow-right"></i>{' '}
                                        </a>
                                      </rs-group>
                                      <rs-group
                                        id="slider-1-slide-2-layer-6"
                                        data-type="group"
                                        data-xy="x:r,r,r,c;xo:50px,30px,30px,0;y:b;yo:30px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:450px,347px,347px,347px;h:50px,47,47,47px;"
                                        data-basealign="slide"
                                        data-frame_0="o:1;"
                                        data-frame_1="sR:10;"
                                        data-frame_999="st:w;sR:8690;sA:9000;"
                                        style={{ zIndex: 13 }}
                                      >
                                        <rs-layer
                                          id="slider-1-slide-2-layer-7"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-actions="o:click;a:jumptoslide;slide:rs-1;"
                                          data-border="boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 17,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          01{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-2-layer-9"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="xo:60px;y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-border="bos:solid;boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 15,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          02{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-2-layer-10"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="xo:120px;y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-actions="o:click;a:jumptoslide;slide:rs-3;"
                                          data-border="boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 16,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          03{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-2-layer-11"
                                          className="tp-shape tp-shapewrapper"
                                          data-type="shape"
                                          data-rsp_ch="on"
                                          data-xy="xo:160px,154px,154px,154px;y:m;"
                                          data-text="fw:700;a:inherit;"
                                          data-dim="w:160px,100px,100px,100px;h:1px;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 17,
                                            backgroundColor: '#ffffff',
                                          }}
                                        ></rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-2-layer-12"
                                          className="rev-btn"
                                          data-type="button"
                                          data-xy="x:l,r,r,r;xo:345px,40px,40px,40px;y:m;"
                                          data-text="s:36;l:36;fw:500;a:inherit;"
                                          data-dim="w:36px;h:36px;"
                                          data-actions="o:click;a:jumptoslide;slide:previous;"
                                          data-rsp_bd="off"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          data-frame_hover="c:#000;bgc:rgba(255,255,255,0.7);boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 18,
                                            fontFamily: 'Roboto',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          <i className="pe-7s-angle-left"></i>{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-2-layer-13"
                                          className="rev-btn"
                                          data-type="button"
                                          data-xy="x:l,r,r,r;xo:400px,0,0,0;y:m;"
                                          data-text="s:36;l:36;fw:500;a:inherit;"
                                          data-dim="w:36px;h:36px;"
                                          data-actions="o:click;a:jumptoslide;slide:next;"
                                          data-rsp_bd="off"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          data-frame_hover="c:#000;bgc:rgba(255,255,255,0.7);boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 19,
                                            fontFamily: 'Roboto',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          <i className="pe-7s-angle-right"></i>{' '}
                                        </rs-layer>
                                      </rs-group>
                                    </rs-slide>
                                    <rs-slide
                                      data-key="rs-3"
                                      data-title="Slide3"
                                      data-in="o:0;x:(100%);"
                                      data-out="a:false;"
                                      data-alttrans="slidingoverlayright,slidingoverlayup"
                                    >
                                      <img
                                        loading="lazy"
                                        src="/images/1961_03_ZEN_OP7.jpeg"
                                        title="1961_03_ZEN_OP7"
                                        width="1200"
                                        height="675"
                                        className="rev-slidebg"
                                        data-no-retina
                                      />
                                      <rs-group
                                        id="slider-1-slide-3-layer-1"
                                        data-type="group"
                                        data-xy="x:l,c,c,c;xo:160px,0,0,0;y:m;yo:86px,0,-80px,16px;"
                                        data-text="l:22;a:inherit,center,center,center;"
                                        data-dim="w:640px,620px,600px,451px;h:374,374,375px,320;"
                                        data-frame_0="x:-50px;"
                                        data-frame_1="sp:2000;sR:10;"
                                        data-frame_999="o:0;st:w;sR:6990;sA:9000;"
                                        style={{ zIndex: 5 }}
                                      >
                                        <rs-layer
                                          id="slider-1-slide-3-layer-2"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;"
                                          data-text="s:15;l:22;fw:600;a:inherit,center,center,center;"
                                          data-frame_0="x:-50px;"
                                          data-frame_1="st:180;sp:2000;sR:170;"
                                          data-frame_999="x:-50px;o:0;st:w;sp:2000;sR:6820;"
                                          style={{
                                            zIndex: 6,
                                            fontFamily: 'Be Vietnam',
                                          }}
                                        >
                                          {subtitle_3}{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-3-layer-3"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;yo:58px,58px,58px,57px;"
                                          data-text="s:60,60,60,48;l:60,60,60,50;a:inherit;"
                                          data-dim="w:614px,567px,567px,424px;h:192px,210px,210px,184px;"
                                          data-frame_0="o:1;"
                                          data-frame_0_lines="d:10;x:-50px;o:0;"
                                          data-frame_1="st:760;sp:2000;sR:750;"
                                          data-frame_1_lines="d:10;"
                                          data-frame_999="z:0;sX:1;sY:1;o:1;rX:0;rY:0;rZ:0;skX:0;skY:0;st:w;sp:2000;sR:6040;"
                                          data-frame_999_lines="d:10;x:-50px;o:0;"
                                          style={{
                                            zIndex: 7,
                                            fontFamily: 'DM Serif Display',
                                          }}
                                          dangerouslySetInnerHTML={{ __html: title_3 }}
                                        />
                                        <a
                                          id="slider-1-slide-3-layer-5"
                                          className="rs-layer rev-btn"
                                          href="/portfolio"
                                          target="_self"
                                          data-type="button"
                                          data-color="rgba(255,255,255,1)"
                                          data-rsp_ch="on"
                                          data-xy="x:l,c,c,c;xo:-1px,0,0,0;yo:304px,305px,305px,257px;"
                                          data-text="s:11;l:60,60,60,54;ls:2px;a:inherit;"
                                          data-padding="r:40;l:40;"
                                          data-border="bor:3px,3px,3px,3px;"
                                          data-frame_0="x:-50px;"
                                          data-frame_1="st:1310;sp:1610;sR:1300;"
                                          data-frame_999="x:-50px;o:0;st:w;sp:2000;sR:6080;"
                                          data-frame_hover="bgc:#bc986b;boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 8,
                                            backgroundColor: '#bda588',
                                            fontFamily: 'Be Vietnam',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          {button_text_3}
                                          <i className="fa-long-arrow-right"></i>{' '}
                                        </a>
                                      </rs-group>
                                      <rs-group
                                        id="slider-1-slide-3-layer-6"
                                        data-type="group"
                                        data-xy="x:r,r,r,c;xo:50px,30px,30px,0;y:b;yo:30px;"
                                        data-text="l:22;a:inherit;"
                                        data-dim="w:450px,347px,347px,347px;h:50px,47,47,47px;"
                                        data-basealign="slide"
                                        data-frame_0="o:1;"
                                        data-frame_1="sR:10;"
                                        data-frame_999="st:w;sR:8690;sA:9000;"
                                      >
                                        <rs-layer
                                          id="slider-1-slide-3-layer-7"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-actions="o:click;a:jumptoslide;slide:rs-1;"
                                          data-border="boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 14,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          01{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-3-layer-9"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="xo:60px;y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-actions="o:click;a:jumptoslide;slide:rs-2;"
                                          data-border="boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 15,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          02{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-3-layer-10"
                                          data-type="text"
                                          data-rsp_ch="on"
                                          data-xy="xo:120px;y:m;"
                                          data-text="s:15;l:22;fw:700;a:center;"
                                          data-border="bos:solid;boc:#ffffff;bow:0px,0,2px,0;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 16,
                                            fontFamily: 'Be Vietnam',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          03{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-3-layer-11"
                                          className="tp-shape tp-shapewrapper"
                                          data-type="shape"
                                          data-rsp_ch="on"
                                          data-xy="xo:160px,154px,154px,154px;y:m;"
                                          data-text="fw:700;a:inherit;"
                                          data-dim="w:160px,100px,100px,100px;h:1px;"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          style={{
                                            zIndex: 17,
                                            backgroundColor: '#ffffff',
                                          }}
                                        ></rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-3-layer-12"
                                          className="rev-btn"
                                          data-type="button"
                                          data-xy="x:l,r,r,r;xo:345px,40px,40px,40px;y:m;"
                                          data-text="s:36;l:36;fw:500;a:inherit;"
                                          data-dim="w:36px;h:36px;"
                                          data-actions="o:click;a:jumptoslide;slide:previous;"
                                          data-rsp_bd="off"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          data-frame_hover="c:#000;bgc:rgba(255,255,255,0.7);boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 18,
                                            fontFamily: 'Roboto',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          <i className="pe-7s-angle-left"></i>{' '}
                                        </rs-layer>
                                        <rs-layer
                                          id="slider-1-slide-3-layer-13"
                                          className="rev-btn"
                                          data-type="button"
                                          data-xy="x:l,r,r,r;xo:400px,0,0,0;y:m;"
                                          data-text="s:36;l:36;fw:500;a:inherit;"
                                          data-dim="w:36px;h:36px;"
                                          data-actions="o:click;a:jumptoslide;slide:next;"
                                          data-rsp_bd="off"
                                          data-frame_999="o:0;st:w;sR:8690;"
                                          data-frame_hover="c:#000;bgc:rgba(255,255,255,0.7);boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;e:none;"
                                          style={{
                                            zIndex: 19,
                                            fontFamily: 'Roboto',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            boxSizing: 'border-box',
                                            MozBoxSizing: 'border-box',
                                            WebkitBoxSizing: 'border-box',
                                          }}
                                        >
                                          <i className="pe-7s-angle-right"></i>{' '}
                                        </rs-layer>
                                      </rs-group>
                                    </rs-slide>
                                  </rs-slides>
                                </rs-module>
                                <script
                                  type="text/javascript"
                                  dangerouslySetInnerHTML={{
                                    __html: `setREVStartSize({
            c: "rev_slider_1_1",
            rl: [1240, 1024, 778, 480],
            el: [780, 780, 660, 660],
            gw: [1600, 1024, 778, 480],
            gh: [780, 780, 660, 660],
            type: "standard",
            justify: "",
            layout: "fullwidth",
            mh: "0",
          });
          var revapi1, tpj;
          function revinit_revslider11() {
            jQuery(function () {
              tpj = jQuery;
              revapi1 = tpj("#rev_slider_1_1");
              if (
                revapi1 == undefined ||
                revapi1.revolution == undefined
              ) {
                revslider_showDoubleJqueryError(
                  "rev_slider_1_1"
                );
              } else {
                revapi1.revolution({
                  sliderLayout: "fullwidth",
                  visibilityLevels:
                    "1240,1024,778,480",
                  gridwidth: "1600,1024,778,480",
                  gridheight: "780,780,660,660",
                  spinner: "spinner0",
                  perspective: 600,
                  perspectiveType: "local",
                  editorheight: "780,780,660,660",
                  responsiveLevels:
                    "1240,1024,778,480",
                  ajaxNonce: "8b24ba6e49",
                  progressBar: {
                    disableProgressBar: true,
                  },
                  navigation: {
                    onHoverStop: false,
                  },
                  fallbacks: {
                    allowHTML5AutoPlayOnAndroid: true,
                  },
                });
              }
            });
          } // End of RevInitScript
          var once_revslider11 = false;
          if (document.readyState === "loading") {
            document.addEventListener(
              "readystatechange",
              function () {
                if (
                  (document.readyState ===
                    "interactive" ||
                    document.readyState ===
                      "complete") &&
                  !once_revslider11
                ) {
                  once_revslider11 = true;
                  revinit_revslider11();
                }
              }
            );
          } else {
            once_revslider11 = true;
            revinit_revslider11();
          }`,
                                  }}
                                ></script>
                              </rs-module-wrap>
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
          elementor-element-da29085
          elementor-section-stretched
          elementor-section-boxed
          elementor-section-height-default
          elementor-section-height-default
        "
                    data-id="da29085"
                    data-element_type="section"
                    id="services"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="
              elementor-column
              elementor-col-100
              elementor-top-column
              elementor-element
              elementor-element-52045a5
            "
                        data-id="52045a5"
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
                  elementor-element-58867da
                  elementor-section-full_width
                  elementor-section-height-default
                  elementor-section-height-default
                "
                            data-id="58867da"
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
                      elementor-col-50
                      elementor-inner-column
                      elementor-element
                      elementor-element-cde4138
                    "
                                data-id="cde4138"
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
                          elementor-element-20d1c9d
                          animated-fast
                          elementor-invisible
                          elementor-widget
                          elementor-widget-heading
                        "
                                    data-id="20d1c9d"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"opal-move-up"}'
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-heading-wrapper">
                                        <span className="sub-title">{mission_title}</span>
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
                                            {mission_text}
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                      elementor-column
                      elementor-col-50
                      elementor-inner-column
                      elementor-element
                      elementor-element-06f1172
                    "
                                data-id="06f1172"
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
                          elementor-element-629defc
                          animated-fast
                          elementor-invisible
                          elementor-widget
                          elementor-widget-text-editor
                        "
                                    data-id="629defc"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"opal-move-up"}'
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-text-editor
                              elementor-clearfix
                            "
                                      >
                                        <p>{mission_subtext}</p>
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
                  elementor-inner-section
                  elementor-element
                  elementor-element-089bfc6
                  elementor-section-full_width
                  elementor-section-height-default
                  elementor-section-height-default
                "
                            data-id="089bfc6"
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
                      elementor-element-011bbf3
                    "
                                data-id="011bbf3"
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
                          elementor-element-121b46a
                          elementor-position-top
                          elementor-vertical-align-top
                          elementor-widget
                          elementor-widget-image-box
                        "
                                    data-id="121b46a"
                                    data-element_type="widget"
                                    data-widget_type="image-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-image-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-image-framed">
                                          <figure className="elementor-image-box-img">
                                            <img
                                              width="200"
                                              height="140"
                                              src="/images/development_1.png"
                                              className="
                                    attachment-full
                                    size-full
                                  "
                                              alt=""
                                              loading="lazy"
                                            />
                                          </figure>
                                        </div>
                                        <div className="elementor-image-box-content">
                                          <h3 className="elementor-image-box-title">{residential_title}</h3>
                                          <p
                                            className="
                                  elementor-image-box-description
                                "
                                          >
                                            {residential_text}
                                          </p>
                                        </div>
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
                      elementor-element-66bafd0
                    "
                                data-id="66bafd0"
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
                          elementor-element-6024e80
                          elementor-position-top
                          elementor-vertical-align-top
                          elementor-widget
                          elementor-widget-image-box
                        "
                                    data-id="6024e80"
                                    data-element_type="widget"
                                    data-widget_type="image-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-image-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-image-framed">
                                          <figure className="elementor-image-box-img">
                                            <img
                                              width="200"
                                              height="140"
                                              src="/images/development_2.png"
                                              className="
                                    attachment-full
                                    size-full
                                  "
                                              alt=""
                                              loading="lazy"
                                            />
                                          </figure>
                                        </div>
                                        <div className="elementor-image-box-content">
                                          <h3 className="elementor-image-box-title">{commercial_title}</h3>
                                          <p
                                            className="
                                  elementor-image-box-description
                                "
                                          >
                                            {commercial_text}
                                          </p>
                                        </div>
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
                      elementor-element-4e4abed
                    "
                                data-id="4e4abed"
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
                          elementor-element-f908854
                          elementor-position-top
                          elementor-vertical-align-top
                          elementor-widget
                          elementor-widget-image-box
                        "
                                    data-id="f908854"
                                    data-element_type="widget"
                                    data-widget_type="image-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-image-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-image-framed">
                                          <figure className="elementor-image-box-img">
                                            <img
                                              width="200"
                                              height="140"
                                              src="/images/investor.png"
                                              className="
                                    attachment-full
                                    size-full
                                  "
                                              alt=""
                                              loading="lazy"
                                            />
                                          </figure>
                                        </div>
                                        <div className="elementor-image-box-content">
                                          <h3 className="elementor-image-box-title">{investor_title}</h3>
                                          <p
                                            className="
                                  elementor-image-box-description
                                "
                                          >
                                            {investor_text}
                                          </p>
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
                  </section>
                  <section
                    className="
          elementor-section
          elementor-top-section
          elementor-element
          elementor-element-1327303
          elementor-section-stretched
          elementor-section-content-bottom
          elementor-section-boxed
          elementor-section-height-default
          elementor-section-height-default
        "
                    data-id="1327303"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="
              elementor-column
              elementor-col-50
              elementor-top-column
              elementor-element
              elementor-element-c3df5ea
            "
                        data-id="c3df5ea"
                        data-element_type="column"
                      >
                        <div
                          className="
                elementor-widget-wrap elementor-element-populated
              "
                        >
                          <div
                            className="
                  elementor-element elementor-element-962e1e9
                  animated-fast
                  elementor-invisible
                  elementor-widget
                  elementor-widget-heading
                "
                            data-id="962e1e9"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up"}'
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-wrapper">
                                <span className="sub-title">{projects_subtitle}</span>
                                <div className="elementor-heading-wrapper-inner">
                                  <h2
                                    className="
                          elementor-heading-title
                          elementor-size-default
                        "
                                  >
                                    {projects_title}
                                  </h2>
                                </div>
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
              elementor-element-90a07f6
            "
                        data-id="90a07f6"
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
                  elementor-element-d004d41
                  elementor-align-right
                  elementor-mobile-align-center
                  animated-fast
                  elementor-invisible
                  elementor-widget
                  elementor-widget-button
                "
                            data-id="d004d41"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up"}'
                            data-widget_type="button.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="
                      elementor-button-wrapper
                      elementor-button-primary
                    "
                              >
                                <a
                                  href="/portfolio"
                                  className="
                        elementor-button-link
                        elementor-button
                        elementor-size-md
                      "
                                  role="button"
                                >
                                  <span className="elementor-button-content-wrapper">
                                    <span
                                      className="
                            elementor-button-icon
                            elementor-align-icon-right
                          "
                                    >
                                      <i className="opal-icon-arrow-right" aria-hidden="true"></i>
                                    </span>
                                    <span className="elementor-button-text">{projects_link}</span>
                                  </span>
                                </a>
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
          elementor-element-3742719
          elementor-section-stretched
          elementor-section-boxed
          elementor-section-height-default
          elementor-section-height-default
        "
                    data-id="3742719"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      {projects.projects.map(({ name, link, image, location }, i) => (
                        <div
                          className="
                elementor-column
                elementor-col-33
                elementor-top-column
                elementor-element
                elementor-element-06ea702"
                          data-id="06ea702"
                          data-element_type="column"
                        >
                          <div
                            className="
                elementor-widget-wrap elementor-element-populated
              "
                          >
                            <div
                              className="
                  elementor-element elementor-element-eb402e2
                  elementor-cta--skin-cover
                  elementor-cta--valign-bottom
                  call-to-action-wrapper-transform-none
                  elementor-animated-content
                  elementor-bg-transform
                  elementor-bg-transform-zoom-in
                  elementor-widget
                  elementor-widget-call-to-action
                "
                              data-id="eb402e2"
                              data-element_type="widget"
                              data-widget_type="call-to-action.default"
                            >
                              <div className="elementor-widget-container">
                                <a href={link} className="elementor-cta">
                                  <div className="elementor-cta__bg-wrapper">
                                    <div
                                      className="elementor-cta__bg elementor-bg"
                                      style={{
                                        backgroundImage: `url(${image})`,
                                      }}
                                    ></div>
                                    <div className="elementor-cta__bg-overlay"></div>
                                  </div>
                                  <div className="elementor-cta__content">
                                    <div className="elmentor-cta_content-inner">
                                      <h2
                                        className="
                            elementor-cta__title
                            elementor-cta__content-item
                            elementor-content-item
                            elementor-animated-item--grow
                          "
                                      >
                                        {name}
                                      </h2>
                                      <div
                                        className="
                            elementor-cta__description
                            elementor-cta__content-item
                            elementor-content-item
                            elementor-animated-item--grow
                          "
                                      >
                                        {location}
                                      </div>
                                    </div>
                                    <div className="elementor-cta-number">0{i + 1}</div>
                                  </div>
                                </a>
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
          elementor-element-7f518b8
          elementor-section-stretched
          elementor-section-boxed
          elementor-section-height-default
          elementor-section-height-default
        "
                    data-id="7f518b8"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="
              elementor-column
              elementor-col-100
              elementor-top-column
              elementor-element
              elementor-element-54a69f0
            "
                        data-id="54a69f0"
                        data-element_type="column"
                      >
                        <div
                          className="
                elementor-widget-wrap elementor-element-populated
              "
                        >
                          <div
                            className="
                  elementor-element elementor-element-99ed3d6
                  animated-fast
                  elementor-invisible
                  elementor-widget
                  elementor-widget-heading
                "
                            data-id="99ed3d6"
                            data-element_type="widget"
                            data-settings='{"_animation":"opal-move-up"}'
                            data-widget_type="heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-wrapper">
                                <span className="sub-title">{why_subtitle}</span>
                                <div className="elementor-heading-wrapper-inner">
                                  <h2
                                    className="
                          elementor-heading-title
                          elementor-size-default
                        "
                                  >
                                    {why_title}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <section
                            className="
                  elementor-section
                  elementor-inner-section
                  elementor-element
                  elementor-element-5a8261b
                  elementor-section-boxed
                  elementor-section-height-default
                  elementor-section-height-default
                "
                            data-id="5a8261b"
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
                      elementor-col-50
                      elementor-inner-column
                      elementor-element
                      elementor-element-a3c4658
                    "
                                data-id="a3c4658"
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
                          elementor-element-69b993a
                          animated-fast
                          elementor-view-default
                          elementor-position-top
                          icon-box-default
                          elementor-vertical-align-top
                          elementor-invisible
                          elementor-widget
                          elementor-widget-icon-box
                        "
                                    data-id="69b993a"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"opal-move-up"}'
                                    data-widget_type="icon-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-icon-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-icon-box-icon">
                                          <span
                                            className="
                                  elementor-icon
                                  elementor-animation-
                                "
                                          >
                                            <i
                                              className="
                                    opal-icon-
                                    opal-icon-product
                                    opal-custom
                                  "
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                        </div>
                                        <div className="elementor-icon-box-content">
                                          <h3 className="elementor-icon-box-title">
                                            <span>{quality_title}</span>
                                          </h3>
                                          <p
                                            className="
                                  elementor-icon-box-description
                                "
                                          >
                                            {quality_text}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                      elementor-column
                      elementor-col-50
                      elementor-inner-column
                      elementor-element
                      elementor-element-3f338de
                    "
                                data-id="3f338de"
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
                          elementor-element-ea1b39f
                          animated-fast
                          elementor-view-default
                          elementor-position-top
                          icon-box-default
                          elementor-vertical-align-top
                          elementor-invisible
                          elementor-widget
                          elementor-widget-icon-box
                        "
                                    data-id="ea1b39f"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"opal-move-up","_animation_delay":100}'
                                    data-widget_type="icon-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-icon-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-icon-box-icon">
                                          <span
                                            className="
                                  elementor-icon
                                  elementor-animation-
                                "
                                          >
                                            <i
                                              className="
                                    opal-icon-
                                    opal-icon-amenities
                                    opal-custom
                                  "
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                        </div>
                                        <div className="elementor-icon-box-content">
                                          <h3 className="elementor-icon-box-title">
                                            <span>{amenities_title}</span>
                                          </h3>
                                          <p
                                            className="
                                  elementor-icon-box-description
                                "
                                          >
                                            {amenities_text}
                                          </p>
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
                  elementor-inner-section
                  elementor-element
                  elementor-element-b05910b
                  elementor-section-boxed
                  elementor-section-height-default
                  elementor-section-height-default
                "
                            data-id="b05910b"
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
                      elementor-col-50
                      elementor-inner-column
                      elementor-element
                      elementor-element-3af8cbf
                    "
                                data-id="3af8cbf"
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
                          elementor-element-1da0b6e
                          animated-fast
                          elementor-view-default
                          elementor-position-top
                          icon-box-default
                          elementor-vertical-align-top
                          elementor-invisible
                          elementor-widget
                          elementor-widget-icon-box
                        "
                                    data-id="1da0b6e"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"opal-move-up","_animation_delay":100}'
                                    data-widget_type="icon-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-icon-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-icon-box-icon">
                                          <span
                                            className="
                                  elementor-icon
                                  elementor-animation-
                                "
                                          >
                                            <i
                                              className="
                                    opal-icon-
                                    opal-icon-enviroment
                                    opal-custom
                                  "
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                        </div>
                                        <div className="elementor-icon-box-content">
                                          <h3 className="elementor-icon-box-title">
                                            <span>{environment_title}</span>
                                          </h3>
                                          <p
                                            className="
                                  elementor-icon-box-description
                                "
                                          >
                                            {environment_text}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="
                      elementor-column
                      elementor-col-50
                      elementor-inner-column
                      elementor-element
                      elementor-element-06c8f84
                      animated-fast
                      elementor-invisible
                    "
                                data-id="06c8f84"
                                data-element_type="column"
                                data-settings='{"animation":"opal-move-up","animation_delay":200}'
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
                          elementor-element-2df93c6
                          elementor-view-default
                          elementor-position-top
                          icon-box-default
                          elementor-vertical-align-top
                          elementor-widget
                          elementor-widget-icon-box
                        "
                                    data-id="2df93c6"
                                    data-element_type="widget"
                                    data-widget_type="icon-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="
                              elementor-icon-box-wrapper
                              elementor-button-
                            "
                                      >
                                        <div className="elementor-icon-box-icon">
                                          <span
                                            className="
                                  elementor-icon
                                  elementor-animation-
                                "
                                          >
                                            <i
                                              className="
                                    opal-icon-
                                    opal-icon-community
                                    opal-custom
                                  "
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                        </div>
                                        <div className="elementor-icon-box-content">
                                          <h3 className="elementor-icon-box-title">
                                            <span>{community_title}</span>
                                          </h3>
                                          <p
                                            className="
                                  elementor-icon-box-description
                                "
                                          >
                                            {community_text}
                                          </p>
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

module.exports = HomePage;
