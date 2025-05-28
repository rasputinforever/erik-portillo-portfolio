import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'
import HeaderImage from './HeaderImage'

import "../App.css";

function Introduction() {
    return (  
    <section  id="Home" 
      style={{position: 'relative', maxWidth: '500px', margin: 'auto'}}
    >
        <Header as='h1' textAlign='center'>
          
        <HeaderImage />

        <Header.Content>Erik Portillo</Header.Content>
            <Header.Subheader >
              Greetings, I have curated a series of useless information for you to observe in your free time. Thank you for letting me capitalize on something so precious to you.
            </Header.Subheader>
            
            <br />

          </Header>
    </section>
    )
}

export default Introduction
