import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

function Introduction() {
    return (  
    <div>
        <Header as='h2' icon textAlign='center'>
        <Image circular src='/images/erik.PNG' /> 

          <Header.Content>Erik Portillo</Header.Content>
          <Header.Subheader>
          Full-Stack Developer, Chemist, Lover of Cats
        </Header.Subheader>
        </Header>
    </div>
    )
}

export default Introduction

// <h1>Erik Portillo</h1>
// <h2>Full-Stack Developer, Chemist, Lover of Cats</h2>
// <p>Problem solving has never been so productive. Check out my projects, resume, and if you're at all interested feel free to contact me.</p>