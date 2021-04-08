import React from 'react'

import { Card } from 'semantic-ui-react'

function Project(props) {
    return (
        <>
        <Card color='red' image={props.image} />

        </>
    )
}

export default Project

// <h3><a href={props.dep}>{props.name}</a></h3>
// <img src={props.image}></img>
// <p>{props.description}</p>
// <p><a href={props.git}>GitHub</a></p>