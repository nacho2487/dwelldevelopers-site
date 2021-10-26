const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { lang,  currentPath, layout, home, translation, projectsPage } = res.locals;
  res.render("home", {
    currentPath,
    lang,
    layout,
    ...translation,
    projects: projectsPage,
    ...home,
  });
});

router.get('/proyectos/:project', (req, res, next) => {
  const { lang,  currentPath, layout, projects, translation, projectsPage } = res.locals;
  if (!projects || !projects[req.params.project]) {
    return next();
  }
  res.render("project", {
    currentPath,
    lang,
    layout,
    ...translation,
    projects: projectsPage,
    ...projects[req.params.project]
  });
});

router.get('/proyectos', (req, res) => {
  const { lang,  currentPath, layout, projectsPage, translation } = res.locals;
  res.render("projects", {
    currentPath,
    lang,
    layout,
    ...translation,
    ...projectsPage,
  });
});

router.get('/acerca-de-nosotros', (req, res) => {
  const { lang,  currentPath, layout, aboutUs, translation, projectsPage } = res.locals;
  res.render("about-us", {
    currentPath,
    lang,
    layout,
    ...translation,
    ...aboutUs,
    projects: projectsPage,
  });
});

router.get('/contacto', (req, res) => {
  const { lang,  currentPath, layout, contact, projectsPage, translation } = res.locals;
  res.render("contact", {
    currentPath,
    lang,
    layout,
    ...translation,
    ...contact,
    projects: projectsPage,
  });
});

module.exports = router;
