import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'

function Introduction() {
    return (  
    <section  id="Home" >
        <Header as='h1' textAlign='center'>
          
        <Image circular src='/images/erik.png' /> 
        <Header.Content>Erik Portillo</Header.Content>
            <Header.Subheader>
              <Icon name="bullhorn" />Full-Stack Developer, Chemist, Lover of Cats. I've been developing and programming applications professionally since 2019, starting humbly with Excel's integrated VBA, then graduating to JavaScript in 2020. My time at Univeristy of Oregon's Developer BootCamp has prepared me for modern web development. Utlizing Node, Express, and React, the lines between "website" and "application" begin to blur.

            </Header.Subheader>
            <br></br>
            <Header.Subheader>I hope you enjoy your time here.</Header.Subheader>
          </Header>
    </section>
    )
}

export default Introduction
