import React, { useEffect } from 'react'
import { Image } from 'semantic-ui-react'

function HeaderImage() {
    
    const [proportions, setProportions] = React.useState({
        width: 50, 
        rotation: 0,
        speed: {x: 0, y: 0},
        direction: {x: -1, y: -1},
        distance: 0
    })    

    const [grow, setGrow] = React.useState(false)
    const [rotate, setRotate] = React.useState(false)
    const [move, setMove] = React.useState(false)
    const [count, setCount] = React.useState(0)
    
    useEffect(() => {
        if (grow) {            
            animateGrow()
        } 
        if (rotate) {            
            animateRotate()            
        } 
        if (move) {            
            animateMove()      
        } 
    })

    const animateGrow = () => {
        const newProportions = Object.assign({}, proportions)
        newProportions.width = newProportions.width + 0.1
        setProportions(newProportions)                
        if (newProportions.width.toFixed(1) % 50 === 0) {
            setGrow(false)
        }
    }

    const animateRotate = () => {
        const newProportions = Object.assign({}, proportions)
        newProportions.rotation = newProportions.rotation + 0.5
        setProportions(newProportions)                
        if (newProportions.rotation.toFixed(1) % 90 === 0) {
            setRotate(false)
        }
    }    

    const animateMove = () => {

        const newProportions = Object.assign({}, proportions)
        
        if (newProportions.direction.x === -1) {
            newProportions.speed.x = newProportions.speed.x -10
            newProportions.rotation = newProportions.rotation + 0.5
            newProportions.width = newProportions.width + 0.1
        } else {
            newProportions.speed.x = newProportions.speed.x + 10
            newProportions.rotation = newProportions.rotation + 0.5
            newProportions.width = newProportions.width - 0.1
        }

        if (newProportions.direction.y === -1) {
            newProportions.speed.y = newProportions.speed.y -30
            
        } else {
            newProportions.speed.y = newProportions.speed.y + 30
            
        }

        if (newProportions.speed.x > 200) {
            newProportions.direction.x = -1
        } else if (newProportions.speed.x < -200) {
            newProportions.direction.x = +1
        }

        if (newProportions.speed.y > 300) {
            newProportions.direction.y = -1
        } else if (newProportions.speed.y < -100) {
            newProportions.direction.y = 1
        }

        newProportions.distance = newProportions.distance + 1

        if (newProportions.distance > 4000) {
            newProportions.distance = 0
            setMove(false)
        }
        
        setProportions(newProportions)  

    }
       

    const handleClick = () => {
        
        if (proportions.width < 200) {
            setGrow(true)
        } else if (proportions.rotation < 360) {
            setRotate(true)
        } else if (proportions.distance < 200) {
            setMove(true)
            setCount(count + 1)
        } else {

        }
        
    }

    return (  
        <>
        <Image circular src='/images/erik.png' 
            onClick={handleClick}
            
            style={{
                position: 'aboslute',
                width: proportions.width + 'px',
                transform: 'rotate(' + proportions.rotation + 'deg)',
                left: 0 + proportions.speed.x,
                top: 0 + proportions.speed.y
                
                
            }}
        /> 
        {count > 3 ? <div style={{
             
                position: 'aboslute',
                width: proportions.width + 'px',
                transform: 'rotate(' + proportions.rotation + 'deg)',
                left: 0 + proportions.speed.x,
                top: 0 + proportions.speed.y
                
                
            }}>
            Welcome To Erik Justin Portillo Dot Com!
            </div> 
            : null}
        </>

    )
}

export default HeaderImage
