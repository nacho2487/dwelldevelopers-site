const React = require("react");

function Langs(props) {
  const { lang_text, lang_locale, option_text, option_locale } = props;
  return (
    <aside
      data-wg-notranslate
      className="country-selector weglot-dropdown weglot-default"
    >
      <input
        id="wg1633464164615caf6471916206"
        className="weglot_choice"
        type="checkbox"
        name="menu"
      />
      <label
        htmlFor="wg1633464164615caf6471916206"
        className={`wgcurrent wg-li
          weglot-lang weglot-language weglot-flags
          flag-0
          ${lang_locale}
        `}
        data-code-language={lang_locale}
        data-name-language={lang_text}
      >
        <span className="wglanguage-name">{lang_text}</span>
      </label>
      <ul>
        <li
          className={`wg-li weglot-lang weglot-language weglot-flags flag-0 ${option_locale}`}
          data-code-language={option_locale}
        >
          <a data-wg-notranslate href={`/${option_locale}`}>
            {option_text}
          </a>
        </li>
      </ul>
    </aside>
  );
}

module.exports = Langs;
