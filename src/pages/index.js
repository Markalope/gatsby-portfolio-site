import React from "react"
import  graphql from "gatsby-link"
import typography from '../utils/typography'
import { TypographyStyle, GoogleFont } from 'react-typography'

export default ({data}) => <div>
  
  <section class="header">
  <div class="headercontents">
  <h1>{data.allContentfulBio.edges[0].node.title}</h1>
  <h2>{data.allContentfulBio.edges[0].node.subhead}</h2>
    <div class="icons-links">
        <a target="_blank" href="https://twitter.com/markalope" title="Link to Markalope on Twitter"><i class="fab fa-twitter"></i></a>
      <a target="_blank" href="https://www.linkedin.com/in/markalope" title="Link to Mark Myers on LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a target="_blank" href="https://github.com/markalope" title="Link to Mark Myers GitHub Profile"><i class="fab fa-github"></i></a>
      <a target="_blank" href="mailto:markalope@gmail.com" title="Email link for Markalope@gmail.com"><i class="fas fa-envelope-square"></i></a>
       
      </div>
    </div>  
</section>

<section class="bio">
    <p>{data.allContentfulBio.edges[0].node.body.body}</p>
</section>
</div>

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