import React from 'react'
import { Icon, List, Header } from 'semantic-ui-react'

function Contact() {
    return (
        <section>
        <Header id="Contact" as='h2' textAlign='center'>
          
          <Header.Content>Contact</Header.Content>
              <Header.Subheader>
                <Icon name="mail outline" />Get in touch!
              </Header.Subheader>
            </Header>
        <List.Item>
            <p><Icon name="github" /><a href="https://github.com/rasputinforever">GitHub</a></p>
            <p><Icon name="linkedin alternate" /><a href="https://www.linkedin.com/in/erik-portillo-1216a926/">LinkedIn</a></p>
            <p><Icon name="google" /><a href="mailto: erik.justin.portillo@gmail.com">erik.justin.portillo@gmail.com</a></p>
            </List.Item>
        <ul>

        </ul>
        </section>
    )
}

export default Contact