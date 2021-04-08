import React from "react";
import Introduction from './Introduction.js'
import Projects from './Projects'
import Contact from './Contact'
import HeaderNav from './HeaderNav'
import Footer from './Footer'
import Resume from './Resume'

function Navigation() {


    return (
      <div>
        <HeaderNav />

        <Introduction id="Home" />

        <Projects id="Projects" />



        <h2 id="Resume">Resume</h2>
        <Resume />

        <h2 id="Contact">Contact</h2>
        <Contact id="Contact" />

        <Footer />
      </div>
    )
  
}

export default Navigation;