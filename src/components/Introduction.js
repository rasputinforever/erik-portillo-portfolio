import React from 'react'
import { Header, Image } from 'semantic-ui-react'

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
