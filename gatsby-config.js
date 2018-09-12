
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8iy48macnh5d`,
        accessToken: `1b10f6c7613241668d0f762bd64497e44b0738cd3b2eee77182dce7ef3874ded`,
      },
    }
],
}