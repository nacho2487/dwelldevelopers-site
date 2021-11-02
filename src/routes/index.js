const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  const { lang, currentPath, layout, home, translation, projectsPage } = res.locals;
  res.render('home', {
    currentPath,
    lang,
    layout,
    ...translation,
    projects: projectsPage,
    ...home,
  });
});

router.get('/proyectos/:project', (req, res, next) => {
  const { lang, currentPath, layout, projects, translation, projectsPage } = res.locals;
  if (!projects || !projects[req.params.project]) {
    return next();
  }
  res.render('project', {
    currentPath,
    lang,
    layout,
    ...translation,
    projects: projectsPage,
    ...projects[req.params.project],
  });
});

router.get('/proyectos', (req, res) => {
  const { lang, currentPath, layout, projectsPage, translation } = res.locals;
  res.render('projects', {
    currentPath,
    lang,
    layout,
    ...translation,
    ...projectsPage,
  });
});

router.get('/acerca-de-nosotros', (req, res) => {
  const { lang, currentPath, layout, aboutUs, translation, projectsPage } = res.locals;
  res.render('about-us', {
    currentPath,
    lang,
    layout,
    ...translation,
    ...aboutUs,
    projects: projectsPage,
  });
});

router.get('/contacto', (req, res) => {
  const { lang, currentPath, layout, contact, projectsPage, translation } = res.locals;
  res.render('contact', {
    currentPath,
    lang,
    layout,
    ...translation,
    ...contact,
    projects: projectsPage,
  });
});

router.post('/contacto', async (req, res) => {
  const from = 'nacho2487@gmail.com';
  const to = 'laurabajuk@gmail.com, nacho2487@gmail.com';
  const subject =  'Consulta online - Dwell';
  console.log("req.body", req.body);
  const context = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'apikey', // generated ethereal user
      pass: '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', // generated ethereal password
    },
  });
  // create template based sender function
  const sendMessage = transporter.sendMail({
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
            <td><strong>Assunto:</strong></td>
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

  console.log("Message sent: %s", sendMessage.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(sendMessage));
  return res.redirect('/contacto?message=success');
});

module.exports = router;
