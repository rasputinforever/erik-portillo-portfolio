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
              <Icon name="bullhorn" />As a developer I bring in the analytical tools I learned as a chemist and the sense of urgency I acquired as a chef to deliver solid projects on time. I do great work as a solo developer, but do amazing work as a collaborator.
              <br /><br />
              I have learned so much working in React/NodeJS and am excited to branch into Vue and Python (soon). This career has afforded me so many opportunities to learn new things while still bringing my own, unrelated expereince into this work, which gives me confidence that I can solve many problems on my own<sup>1</sup>.
              <br /><br />
              <sup>1. "on my own" clarification: taking in advice from collaborators, senior developers/engineers, and of course Google.com (aka, stackoverflow search engine 🙏).</sup>
            </Header.Subheader>
            
            <br />

          </Header>
    </section>
    )
}

export default Introduction
