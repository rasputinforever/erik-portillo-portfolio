import React from 'react'
import { Icon, List, Header } from 'semantic-ui-react'

function Contact() {
    return (
        <>
        <Header id="Contact" as='h3'>
          
          <Header.Content><Icon name="mail outline" />Contact</Header.Content>
              <Header.Subheader>
                
              </Header.Subheader>
            </Header>
        <List.Item>
            <p><Icon name="github" /><a href="https://github.com/rasputinforever">GitHub</a></p>
            <p><Icon name="linkedin alternate" /><a href="https://www.linkedin.com/in/erik-portillo-1216a926/">LinkedIn</a></p>
            <p><Icon name="google" /><a href="mailto: erik.justin.portillo@gmail.com">erik.justin.portillo@gmail.com</a></p>
        </List.Item>
        </>
    )
}

export default Contact