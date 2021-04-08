import React, { useEffect } from "react";
import Introduction from './Introduction.js'
import Project from './Project'
import Contact from './Contact'
import HeaderNav from './HeaderNav'
import Footer from './Footer'
import Resume from './Resume'

import { Card, Header, Icon } from 'semantic-ui-react'

import Projects from '../util/projectDB.js'

function Navigation() {

  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    setProjects(Projects)
  }, [])

  const renderedProjects = projects.map((proj) => {
    return <Project name={proj.name} type={proj.type} dep={proj.deployed} git={proj.git} image={proj.image} description={proj.description}/>
  })

    return (
      <div>
        <HeaderNav />

        <Introduction id="Home" />

        <section>
          <Header id="Projects" as='h2' textAlign='center'>
            Projects
            <Header.Subheader>
              <Icon name="code" />Group (red, chess) and Solo Projects (green, pawn)
            </Header.Subheader>
          </Header>

          <Card.Group itemsPerRow={3}>
            {renderedProjects}
          </Card.Group>
        </section>

        <h2 id="Resume">Resume</h2>
        <Resume />

        <h2 id="Contact">Contact</h2>
        <Contact id="Contact" />

        <Footer />
      </div>
    )
  
}

export default Navigation;