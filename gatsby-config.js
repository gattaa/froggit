/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `froggit`,
    siteUrl: `https://www.froggit.dev`,
    description: `i got a website, but at what cost...`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `froggit.dev`,
        short_name: `froggit`,
        start_url: `/`,
        icon: 'static/gemini.png',
      },
    }
  ]
}
