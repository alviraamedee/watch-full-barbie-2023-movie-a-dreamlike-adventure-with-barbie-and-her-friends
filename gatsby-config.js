/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Watch Full {[Barbie 2023]} Movie - A Dreamlike Adventure with Barbie and Her Friends`,
    description: `Barbie, the iconic doll created by Mattel, has been captivating hearts around the globe since her debut in 1959. Her everlasting popularity led to the creation of a series of enchanting animated movies that continue to mesmerize audiences of all ages. In this article, we delve into the mesmerizing world of Barbie and explore the highly anticipated movie, Barbie 2023. Barbie has remained a beloved figure for generations, transcending time and cultural boundaries. With her impeccable style, charisma, and empowering persona, she has inspired countless young minds to dream big and believe in themselves. Over the years, Barbie movies have evolved, not just in animation quality but also in storytelling. From fairy tales to modern adventures, each movie carries a unique message while preserving the essence of Barbie's spirit.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
