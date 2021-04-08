import React from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'


function Project(props) {
    
const deployedLink = <a href={props.dep}><Icon name='play' />Deployed!</a>
const githubLink = <a href={props.github}><Icon name='play' />Repository!</a>
const cardColor = props.type === 'group' ? 'red' : 'green'

    return (
        <>
        <Card color={cardColor}>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                {props.type === 'group' ? <Icon name='chess' /> : <Icon name='chess pawn' />}
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta><a href={props.git}>GitHub</a></Card.Meta>
                <Card.Description>
                {props.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                {props.dep ? deployedLink : githubLink}
            </Card.Content>
        </Card>

        </>
    )
}

export default Project
