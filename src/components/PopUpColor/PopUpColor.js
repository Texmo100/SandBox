import React, { useState } from 'react'
import Button from '../UI/Button/Button'

import styles from './PopUpColor.module.css'

const PopUpColor = () => {

    const colors = [
        '#00ffff',
        '#E30B5C',
        '#7DF9FF',
        '#00aaff'
    ]

    // Use state variables
    const [color, setColor] = useState(colors[0])
    const [colorLevel, setColorLevel] = useState(0)

    const colorLevelHandler = () => {
        if(colorLevel === 100){
            setColor(colors[randomColor()])
            setColorLevel(0)
        }else{
            setColorLevel(prevState => (prevState + 5))
        }
    }

    const randomColor = () => {
        return Math.floor(Math.random() * colors.length)
    }

    return(
        <div className={styles['pop-up']} style={{backgroundColor: `${color}`, height: `${colorLevel}vh`}}>
            <Button type="button" onColorLevelHandler={colorLevelHandler}>Click me</Button>
        </div>
    )
}

export default PopUpColor