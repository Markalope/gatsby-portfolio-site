import React from "react"
import  graphql from "gatsby-link"
import typography from '../utils/typography'
import computerFPO from '../assets/computer-fpo.jpg'
import { Helmet } from "react-helmet"
import { TypographyStyle, GoogleFont } from 'react-typography'
import mainStyles from "../components/main.module.scss"
import Footer from "../components/Footer"
import Topnavbar from "../components/Topnavbar"
import IconsLinks from "../components/IconsLinks"

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

  <Topnavbar />

  <section className={mainStyles.header}>
        <div className={mainStyles.headercontents}>
        <h1>{data.allContentfulBio.edges[0].node.title}</h1>
        <h2>{data.allContentfulBio.edges[0].node.subhead}<br/>{data.allContentfulBio.edges[0].node.subhead2}</h2>
        <IconsLinks />
        </div>  
      </section>

<section className={mainStyles.bio}>
    <p>{data.allContentfulBio.edges[0].node.body.body}</p>
</section>

<section className={mainStyles.projects}>
<div className={mainStyles.projectcontainerLeft}>
        <div className={mainStyles.projecttextLeft}>
          <div className={mainStyles.projectcontents}>
            <h3>Project GitGrub</h3>
            <p>A reality-show inspired cooking challenge game. Built in 'vanilla' Javascript. This was the final project for the first four-week session (201) at Alchemy Code Lab.</p>
            <p><a href="https://teamcalendar.github.io/projectgitgrub/" target="_blank">Click Here to Play the Game!</a></p>
            <p className={mainStyles.techicons}>
              <i className="fas fa-code"></i> <i className="fab fa-css3-alt"></i> <i className="fab fa-js-square"></i>
            </p>
          </div>
        </div>
        <div className={mainStyles.projectimage}>
          <img src={computerFPO} alt="screen shot of project" />      
        </div>
      </div> 
      <div className={mainStyles.projectcontainerRight}>
          <div className={mainStyles.projectimage}>
              <img src={computerFPO} alt="screen shot of project" />
            </div>
            <div className={mainStyles.projecttextRight}>
                <div className={mainStyles.projectcontents}>
              <h3>HALchemy</h3>
              <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
              <p><a href="#">Click Here for More Info!</a></p>
              <p className={mainStyles.techicons}>
                <i className="fas fa-code"></i> <i className="fab fa-node-js"></i>
              </p>
          </div>
          </div>
          
        </div>  
        <div className={mainStyles.projectcontainerLeft}>
            <div className={mainStyles.projecttextLeft}>
              <div className={mainStyles.projectcontents}>
                <h3>Seasonly</h3>
                <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
                <p><a href="#">Click Here for More Info!</a></p>
                <p className={mainStyles.techicons}>
                  <i className="fab fa-js-square"></i> <i className="fab fa-vuejs"></i>
                </p>
              </div>
            </div>
            <div className={mainStyles.projectimage}>
              <img src={computerFPO} alt="screen shot of project" />      
            </div>
          </div>  

{/* COMMENTING THIS ONE OUT UNTIL I COMPLETE THIS APP*/}

          {/* <div className={mainStyles.projectcontainerRight}> */}
              {/* <div className={mainStyles.projectimage}>
                  <img src={computerFPO} alt="screen shot of project" />
                </div>
                <div className={mainStyles.projecttextRight}>
                    <div className={mainStyles.projectcontents}>
                  <h3>80's Music Smackdown</h3>
                  <p>This is the short description of the project, which will display here and invite the user to click for more info.</p>
                  <p><a href="#">Click Here for More Info!</a></p>
                  <p className={mainStyles.techicons}>
                  <i className="fas fa-code"></i> <i className="fab fa-css3-alt"></i> <i className="fab fa-js-square"></i>
                  </p>
              </div>
              </div>         
            </div>        */}

</section>

<Footer />

{/* ***** DO NOT MOVE THIS DIV - IT IS THE ENCLOSING DIV *** */}
</div>
{/* ***** DO NOT MOVE THIS DIV - IT IS THE ENCLOSING DIV *** */}

export const query = graphql `
  query IndexQuery {
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

