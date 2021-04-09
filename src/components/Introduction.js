import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'

function Introduction() {
    return (  
    <section  id="Home" >
        <Header as='h1' textAlign='center'>
          
        <Image circular src='/images/erik.png' /> 
        <Header.Content>Erik Portillo</Header.Content>
            <Header.Subheader>
              <Icon name="bullhorn" />Full-Stack Developer, Chemist, Lover of Cats
            </Header.Subheader>
          </Header>
    </section>
    )
}

export default Introduction
