import React, { Component } from 'react';
import mainStyles from "../components/main.module.scss"

class Footer extends Component {
  render() { 
    return ( 
      <section className={mainStyles.footer}>
        <p>HTML/CSS | Javascript - Express, Node, Vue, React/Redux, Gatsby | Test-Driven Development (TDD) with Mocha, Chai and Jest | PostgreSQL, MongoDB with Mongoose | VSCode and CLI/BASH | Git, GitHub, Heroku, Netlify</p>
      </section>
     );
  }
}
 
export default Footer;