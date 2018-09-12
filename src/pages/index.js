import React from "react"
import  graphql from "gatsby-link"
import typography from '../utils/typography'
import { TypographyStyle, GoogleFont } from 'react-typography'

export default ({data}) => <div><h1>Hello {data.allContentfulBio.edges[0].node.title}</h1><p>{data.allContentfulBio.edges[0].node.body.body}</p></div>

export const query = graphql `
  query BioQuery {
    allContentfulBio {
      edges {
        node {
        title
        subhead
        
        body {
          body
        } 
      }
    }
  }
} `