import React, { Component } from 'react';
import mainStyles from "../components/main.module.scss"
import IconsLinks from "../components/IconsLinks"

class Topnavbar extends Component {
  render() { 
    return ( 
      <section className={mainStyles.topnavbar}>
        <div className={mainStyles.iconslinks}>  
          <IconsLinks />
          
        </div>
      </section>

     );
  }
}
 
export default Topnavbar;