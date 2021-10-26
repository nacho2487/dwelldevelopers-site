const dataHomeEn = require('../../data/home_en.json');
const dataLayoutEn = require('../../data/layout_en.json');
const dataHomeEs = require('../../data/home_es.json');
const dataLayoutEs = require('../../data/layout_es.json');
const dataProyectTorresEn = require('../../data/torres_nuevo_centro_en.json');
const dataProyectTorresEs = require('../../data/torres_nuevo_centro_es.json');
const dataProyectZenEn = require('../../data/zen_pueblo_jardin_en.json');
const dataProyectZenEs = require('../../data/zen_pueblo_jardin_es.json');
const dataProyectOxoEn = require('../../data/oxo_parques_en.json');
const dataProyectOxoEs = require('../../data/oxo_parques_es.json');
const dataProyectsEn = require('../../data/projects_en.json');
const dataProyectsEs = require('../../data/projects_es.json');
const dataAboutUsEn = require('../../data/about_us_en.json');
const dataAboutUsEs = require('../../data/about_us_es.json');
const dataContactEs = require('../../data/contact_es.json')
const dataContactEn = require('../../data/contact_en.json')
const translationsEs = require('../../data/translations_es.json')
const translationsEn = require('../../data/translations_en.json')

const data = {
  es: {
    layout: dataLayoutEs,
    home: dataHomeEs,
    text: 'Español',
    projects: {
      'torres-nuevo-centro': dataProyectTorresEs,
      'zen-pueblo-jardin': dataProyectZenEs,
      'oxo-parques': dataProyectOxoEs,
    },
    projectsPage: dataProyectsEs,
    aboutUs: dataAboutUsEs,
    contact: dataContactEs,
    translation: translationsEs,
  },
  en: {
    layout: dataLayoutEn,
    home: dataHomeEn,
    text: 'English',
    projects: {
      'torres-nuevo-centro': dataProyectTorresEn,
      'zen-pueblo-jardin': dataProyectZenEn,
      'oxo-parques': dataProyectOxoEn,
    },
    projectsPage: dataProyectsEn,
    aboutUs: dataAboutUsEn,
    contact: dataContactEn,
    translation: translationsEn,
  }
};

const dataMiddleware = (lang) => (req, res, next) => {
  res.locals.lang = {
    lang_text: data[lang].text,
    lang_locale: lang,
  };
  res.locals.layout = data[lang].layout;
  res.locals.home = data[lang].home;
  res.locals.projects = data[lang].projects;
  res.locals.projectsPage = data[lang].projectsPage;
  res.locals.aboutUs = data[lang].aboutUs;
  res.locals.contact = data[lang].contact;
  res.locals.translation = data[lang].translation;
  res.locals.currentPath = req.path;
  next();
};

const optionLang = (lang) => (req, res, next) => {
  res.locals.lang.option_text = data[lang].text;
  res.locals.lang.option_locale = lang;
  next();
};

module.exports = {
  optionLang,
  dataMiddleware,
}
