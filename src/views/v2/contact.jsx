const React = require('react');
const Layout = require('./layout');
const { html, Eyebrow, Arrow } = require('./parts');

function Contact(props) {
  const { site, lang, success, subject, currentPath, altPath } = props;
  const c = site.contact;
  const f = site.footer;

  return (
    <Layout
      site={site}
      lang={lang}
      title={c.meta_title}
      description={c.text}
      bodyClass="page-contact"
      solidHeader
      currentPath={currentPath}
      altPath={altPath}
    >
      <section className="page-hero contact-hero">
        <div className="container contact-grid">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="page-title" dangerouslySetInnerHTML={html(c.title)} />
            <p className="page-lead">{c.text}</p>
            <dl className="contact-data">
              <div>
                <dt>{f.contact_title}</dt>
                <dd>
                  <a href={`tel:${f.phone.replace(/\s/g, '')}`}>{f.phone}</a>
                  <br />
                  <a href={`mailto:${f.email}`}>{f.email}</a>
                </dd>
              </div>
              <div>
                <dt>{c.hours_title}</dt>
                <dd>
                  {c.hours}
                  <br />
                  {f.location}
                </dd>
              </div>
            </dl>
          </div>

          <div className="contact-form-wrap">
            {success && (
              <p className="form-success" role="status">
                {c.form.success}
              </p>
            )}
            <form className="contact-form" action={`${site.base}/contacto`} method="post">
              <label>
                <span>{c.form.name}</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label>
                <span>{c.form.email}</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
              <label className="full">
                <span>{c.form.subject}</span>
                <input type="text" name="subject" defaultValue={subject} />
              </label>
              <label className="full">
                <span>{c.form.message}</span>
                <textarea name="message" rows="5" required></textarea>
              </label>
              <button type="submit" className="btn btn-dark">
                {c.form.button} <Arrow />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

module.exports = Contact;
