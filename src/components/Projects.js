import React, { useEffect } from 'react'

import Project from './Project'

import ProjectDB from '../util/projectDB.js'

import { Grid, Card, Header, Icon } from 'semantic-ui-react'

function Projects(){
    
    
  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    setProjects(ProjectDB)
  }, [])

  const renderedProjects = projects.map((proj, i) => {
    return (
      <Card.Group  key={i} itemsPerRow={1}>
        <Project name={proj.name} type={proj.type} dep={proj.deployed} git={proj.git} image={proj.image} description={proj.description}/>
      </Card.Group>
    )
  })

    return (
        <section id="Projects">
          <Header  as='h2' textAlign='center' style={{ marginBottom: '50px'}}>
            Projects
            <Header.Subheader>
              <Icon name="code" />Group (red, chess) and Solo Projects (green, pawn)
            </Header.Subheader>
          </Header>
          <Grid centered stackable columns={3}>
            {renderedProjects}

          <Grid.Column>
      
    </Grid.Column>
  </Grid>
          
        </section>
    )
}

export default Projects
