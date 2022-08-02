import React, { useEffect } from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'

function HeaderImage() {

    const [proportions, setProportions] = React.useState({
        width: 50, 
        rotation: 0,
        speed: 0,
    })

    const [grow, setGrow] = React.useState(false)

    useEffect(() => {
        if (grow) {
            console.log("growing!")
            animateGrow()
        } 
    })

    const animateGrow = () => {

        const newProportions = Object.assign({}, proportions)
        newProportions.width = newProportions.width + 1
        setProportions(newProportions)
        
        if (newProportions.width % 30 === 0) {
            setGrow(false)
        }

    }

    const handleClick = () => {
        
        if (proportions.width < 500) {
            setGrow(true)

        } else if (proportions.rotation < 5) {

        }


        
    }


    return (  
        <Image circular src='/images/erik.png' 
            onClick={handleClick}
            style={{
                width: proportions.width + 'px'
            }}
        
        
        /> 
    )
}

export default HeaderImage
