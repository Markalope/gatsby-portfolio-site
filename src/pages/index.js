import React from "react"
import  graphql from "gatsby-link"
import typography from '../utils/typography'
import { Helmet } from "react-helmet"
import { TypographyStyle, GoogleFont } from 'react-typography'
import mainStyles from "../components/main.module.scss"

export default ({data}) => 
 <div>
   <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="Mark Myers is a full-stack Javascript developer and digital project manager currently seeking a development position in Portland, OR." />
    <meta name="geo.region" content="US-OR" />
    <meta name="geo.placename" content="Portland" />
    <meta name="geo.position" content="45.512231;-122.658719" />
    <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet" />
    <title>Mark Myers :: Javascript Developer in Portland OR</title>
  </Helmet>
  <section className={mainStyles.header}>
  <div className={mainStyles.headercontents}>
  <h1>{data.allContentfulBio.edges[0].node.title}</h1>
  <h2>{data.allContentfulBio.edges[0].node.subhead}<br/>{data.allContentfulBio.edges[0].node.subhead2}</h2>
    <div className={mainStyles.iconslinks}>
        <a target="_blank" href="https://twitter.com/markalope" title="Link to Markalope on Twitter"><i className="fab fa-twitter"></i></a>
      <a target="_blank" href="https://www.linkedin.com/in/markalope" title="Link to Mark Myers on LinkedIn"><i className="fab fa-linkedin"></i></a>
      <a target="_blank" href="https://github.com/markalope" title="Link to Mark Myers GitHub Profile"><i className="fab fa-github"></i></a>
      <a target="_blank" href="mailto:markalope@gmail.com" title="Email link for Markalope@gmail.com"><i className="fas fa-envelope-square"></i></a>
       
      </div>
    </div>  
</section>

<section className={mainStyles.bio}>
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
        subhead2
        
        body {
          body
        } 
      }
    }
  }
} `