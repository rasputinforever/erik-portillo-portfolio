import React, { useEffect, setProjects } from "react";
import Introduction from './Introduction.js'
import Project from './Project'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import Resume from './Resume'

import Projects from '../util/projectDB.js'

function Navigation() {

  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    setProjects(Projects)
  }, [])

  const renderedProjects = projects.map((proj) => {
    return <Project name={proj.name} dep={proj.deployed} git={proj.git} image={proj.image} description={proj.description}/>
  })

    return (
      <div>
        <Header />

        <Introduction />

        <h2 id="Projects">Projects</h2>
        {renderedProjects}

        <Resume />

        <Contact />

        <Footer />
      </div>
    )
  
}

export default Navigation;