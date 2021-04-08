import React from 'react'
import { List, Container, Grid, Header } from 'semantic-ui-react'

import Contact from './Contact'

function Footer() {
    return (
        <Container id="Contact">
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={5}>
            <Contact />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3' content='Credits' />
              <List link>
                <List.Item as='a'>Erik Portillo, 2021</List.Item>
                <List.Item as='a'>Semantic UI</List.Item>
              </List>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
      </Container>
    )
}

export default Footer