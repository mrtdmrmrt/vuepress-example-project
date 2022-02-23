module.exports = {
  title: "Mert Demir",
  description: "Bu site Vuepress deneme amacli yapilmistir",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "About me", link: "https://medium.com/@mert.demir96" },
    ],
    sidebar: {
      '/guide/': [
        '',
        'vue',
        'react'
      ]
    }
  },
};