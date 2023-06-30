import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'
import HeaderImage from './HeaderImage'

function Introduction() {
    return (  
    <section  id="Home" 
      style={{position: 'relative'}}
    
    >
        <Header as='h1' textAlign='center'>
          
        <HeaderImage />

        <Header.Content>Erik Portillo</Header.Content>
            <Header.Subheader>
              <Icon name="bullhorn" />Full Stack Developer. My work developer experience started humbly in excel vba then graduated to NodeJS & React, as well as other front-end frameworks. I have created new applications for companies requiring new software tools to meet their needs and I have worked in collaborative enviornments working up bug fixes and new utilities for existing software.
            </Header.Subheader>
            
            <br />

            <Header.Subheader>
              I enjoy solving problems both in creating new tools and fixing and addressing existing tools.
            </Header.Subheader>
          </Header>
    </section>
    )
}

export default Introduction
