import React, { useEffect } from 'react'

import Project from './Project'

import ProjectDB from '../util/projectDB.js'

import { Grid, Card, Header, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)


const Projects = () => {
    
    
  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    setProjects(ProjectDB)
  }, [])

  const renderedProjects = projects.map((p, i) => {
    console.log(p)
    return (
      <Card
        key={"project"-i}
        image={p.image}
        header={p.name}
        meta={p.employmentType}
        description={p.description}
        extra={
          <>
          {
            p.type === "private" ?
              <a disabled={true} style={{float: "left", pointerEvents: "none"}}>
                <Icon name='briefcase' />
                Private
              </a>
            :          
            <a href={p.git} target="_blank" style={{float: "left"}}>
              <Icon name='code' />
              Repository
            </a>
          }
          {p.deployed ?
            <a href={p.deployed} target="_blank" style={{float: "right"}}>
              <Icon name='desktop' />
              Deployed
            </a>
          : null}
          </>
          
        }
    />
    )
  })

    return (
        <section id="Projects">
          <Header  as='h2' textAlign='center' style={{ marginBottom: '50px'}}>
            Projects
          </Header>


          <Card.Group centered >
            {renderedProjects}
          </Card.Group>
      
          
        </section>
    )
}

export default Projects;
