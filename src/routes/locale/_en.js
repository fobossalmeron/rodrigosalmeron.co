// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const en = {
  nav: [
    { title: "about", link: "/en/about" },
    { title: "contact", link: "/en/contact" },
  ],
  legal_nav: {
    cookies: { title: "cookies", link: "/en/cookies" },
    privacy: { title: "privacy", link: "/en/privacy" },
  },
  lang: "en",
  content: {
    page_title:
      "Rodrigo Salmeron, interaction designer and developer based in CDMX",
    meta_description: "Get to know us better. Read about me.",
    about: {
      intro:
        "Rodrigo Salmeron is an interaction designer and developer based in CDMX, co-founder and design & technology director in Acueducto.",
      full:
        "Rodrigo Salmeron is an interaction designer and developer based in CDMX, co-founder and design & technology director in Acueducto. I love music, tattoos, BA in visual communications, MA in interaction design, self-taught front-end developer. BELOW you’ll find some selected pieces I’ve either designed or coded, for detailed case studies of my work please visit acueducto.studio/en/work",
    },
    cookie_message: {
      title: "Gimme cookies",
      p: "Cookies are here for you, but you can review my ",
      link: "cookie policy",
      p_continued:
        " and opt-out if you wish. If you continue to use this site, I’ll asume you’re okay with it.",
    },
  },
  error_page: {
    headerTitle: "Error",
    intro: {
      title: "oops!<br/> page not found",
      p:
        "This page doesn’t exist, please check if the URL is correct. If you think this is a problem on our end please contact us at <a class='inline' href='mailto:soporte@acueducto.studio'>soporte@acueducto.studio</a>.",
    },
  },
};

export default en;
