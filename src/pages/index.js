import React from "react"
import  graphql from "gatsby-link"

export default ({data}) => <div>Hello {data.allContentfulBio.edges[0].node.title}<p>{data.allContentfulBio.edges[0].node.body.body}</p></div>

export const query = graphql `
  query BioQuery {
    allContentfulBio {
      edges {
        node {
        title
        subhead
        subhead2
        body {
          body
        } 
      }
    }
  }
} `