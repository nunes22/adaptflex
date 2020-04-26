module.exports = {
  title: "adaptflex",
  tagline: "The adaptive ReasonReact Design System",
  url: "https://nunes22.github.com/adaptflex",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nunes22", // Usually your GitHub org/user name.
  projectName: "adaptflex", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "adaptflex",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/nunes22/adaptflex",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1",
            },
            {
              label: "Second Doc",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/adaptflex",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/adaptflex",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/nunes22/adaptflex",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/adaptflex",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} adaptflex, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/nunes22/adaptflex/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
