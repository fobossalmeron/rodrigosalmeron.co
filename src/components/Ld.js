const Ld = (path) => {
  console.log(path);
  const structure = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rodrigosalmeron.co/#organization",
        name: "Rodrigo Salmeron",
        url: "https://rodrigosalmeron.co",
        sameAs: [
          "https://www.linkedin.com/in/rodrigosalmeron/",
          "https://github.com/fobossalmeron",
        ],
        logo: {
          "@type": "ImageObject",
          "@id": "https://rodrigosalmeron.co/#logo",
          contentUrl: "https://rodrigosalmeron.co/img/logold.jpg",
          width: 1200,
          height: 1200,
          caption: "Rodrigo Salmeron",
          inLanguage: "en",
        },
        image: { "@id": "https://rodrigosalmeron.co/#logo" },
      },
      {
        "@type": "WebSite",
        "@id": `https://rodrigosalmeron.co/#website`,
        url: `https://rodrigosalmeron.co`,
        name: "Rodrigo Salmeron",
        description:
          "Co-founder at Acueducto, an interface design and digital strategy firm.",
        publisher: {
          "@id": "https://rodrigosalmeron.co/#organization",
        },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `https://rodrigosalmeron.co${path}#webpage`,
        url: `https://rodrigosalmeron.co${path}`,
        name: "Rodrigo Salmerón",
        isPartOf: { "@id": "https://rodrigosalmeron.co/#website" },
        about: { "@id": "https://rodrigosalmeron.co/#organization" },
        primaryImageOfPage: {
          "@id": `https://rodrigosalmeron.co/#primaryimage`,
        },
        description:
          "Co-founder at Acueducto, an interface design and digital strategy firm.",
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://rodrigosalmeron.co/#breadcrumbs",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "About",
            item: "https://rodrigosalmeron.co",
          },
          path !== "/"
            ? {
                "@type": "ListItem",
                position: 2,
                name: "Let's talk",
                item: "https://rodrigosalmeron.co/contact",
              }
            : "",
        ],
      },
    ],
  };
  return JSON.stringify(structure);
};

export default Ld;
