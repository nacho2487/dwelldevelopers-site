const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Datos comunes para las vistas del rediseño
const v2 = (req, res) => {
  const { lang, siteV2, projectsV2 } = res.locals;
  return {
    lang,
    site: siteV2,
    projects: projectsV2,
    currentPath: `${siteV2.base}${req.path === '/' && siteV2.base ? '' : req.path}`,
    altPath: req.path,
  };
};

router.get('/', (req, res) => {
  res.render('v2/home', v2(req, res));
});

router.get('/proyectos', (req, res) => {
  res.render('v2/projects', v2(req, res));
});

router.get('/proyectos/:project', (req, res, next) => {
  const data = v2(req, res);
  const items = data.projects.items;
  const index = items.findIndex((p) => p.slug === req.params.project);
  if (index === -1) {
    return next();
  }
  const project = items[index];
  const view = project.rich ? 'v2/project-rich' : 'v2/project';
  res.render(view, {
    ...data,
    project,
    next: items[(index + 1) % items.length],
    labels: data.projects.page.labels,
  });
});

router.get('/acerca-de-nosotros', (req, res) => {
  res.render('v2/about', v2(req, res));
});

router.get('/contacto', (req, res) => {
  res.render('v2/contact', {
    ...v2(req, res),
    success: req.query.message === 'success',
    subject: typeof req.query.asunto === 'string' ? req.query.asunto.slice(0, 120) : '',
  });
});

const escapeHtml = (s) =>
  String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

router.post('/contacto', async (req, res) => {
  const from = 'nacho2487@gmail.com';
  const to = 'laurabajuk@gmail.com, nacho2487@gmail.com';
  const subject = 'Consulta online - Dwell';
  const base = res.locals.siteV2.base;
  const context = {
    name: escapeHtml(req.body.name),
    email: escapeHtml(req.body.email),
    subject: escapeHtml(req.body.subject),
    message: escapeHtml(req.body.message),
  };
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false, // true for 465, false for other ports
    });
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: `
    <div>
      <h2>Consulta Online</h2>
      <p>Se ha realizado una consulta con los siguientes datos:</p>
      <table>
        <tbody>
          <tr>
            <td><strong>Nombre:</strong></td>
            <td>${context.name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href='mailto:${context.email}' target='_blank'>${context.email}</a></td>
          </tr>
          <tr>
            <td><strong>Asunto:</strong></td>
            <td>${context.subject}</td>
          </tr>
          <tr>
            <td><strong>Mensaje:</strong></td>
            <td>${context.message}</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    });
    console.log('Message sent: %s', info.messageId);
  } catch (err) {
    // No se corta el servidor si el envío falla; queda registrado en el log
    console.error('Error enviando consulta de contacto:', err.message);
  }
  return res.redirect(`${base}/contacto?message=success`);
});

module.exports = router;
