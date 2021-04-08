import React, { useEffect, setProjects } from "react";
import Introduction from './Introduction.js'
import Project from './Project'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import Resume from './Resume'

import { Card } from 'semantic-ui-react'

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

        <Introduction id="Home" />

        <h2 id="Projects">Projects</h2>
        <Card.Group itemsPerRow={3}>
          {renderedProjects}
        </Card.Group>

        <h2 id="Resume">Resume</h2>
        <Resume />

        <h2 id="Contact">Contact</h2>
        <Contact id="Contact" />

        <Footer />
      </div>
    )
  
}

export default Navigation;