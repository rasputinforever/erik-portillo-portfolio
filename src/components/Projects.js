import React, { useEffect } from 'react'

import Project from './Project'

import ProjectDB from '../util/projectDB.js'

import { Card, Header, Icon } from 'semantic-ui-react'

function Projects(){
    
    
  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    setProjects(ProjectDB)
  }, [])

  const renderedProjects = projects.map((proj) => {
    return <Project name={proj.name} type={proj.type} dep={proj.deployed} git={proj.git} image={proj.image} description={proj.description}/>
  })

    return (
        <section>
          <Header as='h2' textAlign='center'>
            Projects
            <Header.Subheader>
              <Icon name="code" />Group (red, chess) and Solo Projects (green, pawn)
            </Header.Subheader>
          </Header>

          <Card.Group itemsPerRow={3}>
            {renderedProjects}
          </Card.Group>
        </section>
    )
}

export default Projects