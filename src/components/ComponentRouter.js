import React from "react";
import Introduction from './Introduction.js'
import Projects from './Projects'
import HeaderNav from './HeaderNav'
import Footer from './Footer'
import Blog from './Blog'
import Resume from './Resume'

function ComponentRouter() {

    return (
      <div>
        <HeaderNav />

        <Introduction />

        {/* <Projects /> */}

        {/* <Resume /> */}

        <Blog />

        <Footer />

      </div>
    )
  
}

export default ComponentRouter;