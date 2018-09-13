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

  <section className={mainStyles.topnavbar}>
        <div className={mainStyles.iconslinks}> <p>Mark Myers :: Javascript Developer in Portland, OR &nbsp; &nbsp; 
      
          <a target="_blank" href="https://twitter.com/markalope" title="Link to Markalope on Twitter"><i className="fab fa-twitter"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/markalope" title="Link to Mark Myers on LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a target="_blank" href="https://github.com/markalope" title="Link to Mark Myers GitHub Profile"><i className="fab fa-github"></i></a>
          <a target="_blank" href="mailto:markalope@gmail.com" title="Email link for Markalope@gmail.com"><i className="fas fa-envelope-square"></i></a>
        </p></div>
  </section>

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

<section className={mainStyles.projects}>
<div className={mainStyles.projectcontainerLeft}>
        <div className="projecttextLeft">
          <div className="projectcontents">
            <h3>Project Name One</h3>
            <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
            <p><a href="#">Click Here for More Info!</a></p>
            <p className={mainStyles.techicons}>
              <i className="fab fa-react"></i> <i className="fab fa-node-js"></i>
            </p>
          </div>
        </div>
        <div className="projectimage">
          <img src="computer-fpo.jpg" alt="screen shot of project" />      
        </div>
      </div> 
      <div className="projectcontainerRight">
          <div className="projectimage">
              <img src="computer-fpo.jpg" alt="screen shot of project" />
            </div>
            <div className="projecttextRight">
                <div className="projectcontents">
              <h3>Project Name Two</h3>
              <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
              <p><a href="#">Click Here for More Info!</a></p>
              <p className={mainStyles.techicons}>
                <i className="fab fa-react"></i> <i className="fab fa-node-js"></i>
              </p>
          </div>
          </div>
          
        </div>  
        <div className={mainStyles.projectcontainerLeft}>
            <div className="projecttextLeft">
              <div className="projectcontents">
                <h3>Project Name Three</h3>
                <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
                <p><a href="#">Click Here for More Info!</a></p>
                <p className={mainStyles.techicons}>
                  <i className="fab fa-react"></i> <i className="fab fa-node-js"></i>
                </p>
              </div>
            </div>
            <div className="projectimage">
              <img src="computer-fpo.jpg" alt="screen shot of project" />      
            </div>
          </div>  
          <div className="projectcontainerRight">
              <div className="projectimage">
                  <img src="../assets/computer-fpo.jpg" alt="screen shot of project" />
                </div>
                <div className="projecttextRight">
                    <div className="projectcontents">
                  <h3>Project Name Four</h3>
                  <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
                  <p><a href="#">Click Here for More Info!</a></p>
                  <p className={mainStyles.techicons}>
                    <i className="fab fa-react"></i> <i className="fab fa-node-js"></i>
                  </p>
              </div>
              </div>         
            </div>       

</section>

<section className={mainStyles.footer}>
  <p>HTML/CSS | Javascript - Express, Node, Vue, React/Redux, Gatsby | Test-Driven Development (TDD) with Mocha, Chai and Jest | PostgreSQL, MongoDB with Mongoose | VSCode and CLI/BASH | Git, GitHub, Heroku, Netlify</p>
</section>


{/* ***** DO NOT MOVE THIS DIV - IT IS THE ENCLOSING DIV *** */}
</div>
{/* ***** DO NOT MOVE THIS DIV - IT IS THE ENCLOSING DIV *** */}

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