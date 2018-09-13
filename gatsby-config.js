require('dotenv').config();

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;


module.exports = {
  siteMetadata: {
    title: 'Mark Myers :: Javascript Developer in Portland, OR',
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
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN,
      },
    }
],
}