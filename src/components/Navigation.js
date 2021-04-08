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

        <Introduction />

        <Projects />

        <Resume />

        <Footer />

      </div>
    )
  
}

export default Navigation;