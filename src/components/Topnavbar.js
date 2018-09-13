import React, { Component } from 'react';
import mainStyles from "../components/main.module.scss"

class Topnavbar extends Component {
  render() { 
    return ( 
      <section className={mainStyles.topnavbar}>
        <div className={mainStyles.iconslinks}> <p>Mark Myers :: Javascript Developer in Portland, OR &nbsp; &nbsp; 
      
          <a target="_blank" href="https://twitter.com/markalope" title="Link to Markalope on Twitter"><i className="fab fa-twitter"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/markalope" title="Link to Mark Myers on LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a target="_blank" href="https://github.com/markalope" title="Link to Mark Myers GitHub Profile"><i className="fab fa-github"></i></a>
          <a target="_blank" href="mailto:markalope@gmail.com" title="Email link for Markalope@gmail.com"><i className="fas fa-envelope-square"></i></a>
        </p></div>
      </section>

     );
  }
}
 
export default Topnavbar;