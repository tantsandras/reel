module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "reelfeminism",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://feeds.soundcloud.com/users/soundcloud:users:884239870/sounds.rss`,
        id: "guid",
      },
    },
  ],
};
