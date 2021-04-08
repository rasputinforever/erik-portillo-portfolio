import { PromiseProvider } from 'mongoose'
import React from 'react'

function Project(props) {
    return (
        <>
        <h3><a href={props.dep}>{props.name}</a></h3>
        <img src={props.image}></img>
        <p>{props.description}</p>
        <p><a href={props.git}>GitHub</a></p>
        </>
    )
}

export default Project