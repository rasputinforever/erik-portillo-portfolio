import React, { useEffect } from 'react'

import Project from './Project'

import ProjectDB from '../util/projectDB.js'

import { Grid, Segment, Card, Header, Icon } from 'semantic-ui-react'

function Projects(){
    
    
  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    setProjects(ProjectDB)
  }, [])

  const renderedProjects = projects.map((proj) => {
    return (
      <Card.Group itemsPerRow={1}>
    <Project name={proj.name} type={proj.type} dep={proj.deployed} git={proj.git} image={proj.image} description={proj.description}/>
          </Card.Group>
    )
  })

    return (
        <section>
          <Header id="Projects" as='h2' textAlign='center'>
            Projects
            <Header.Subheader>
              <Icon name="code" />Group (red, chess) and Solo Projects (green, pawn)
            </Header.Subheader>
          </Header>
          <Grid stackable columns={3}>
        {renderedProjects}

          <Grid.Column>
      
    </Grid.Column>
  </Grid>
          
        </section>
    )
}

export default Projects
