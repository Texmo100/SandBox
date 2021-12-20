import React, { useReducer, useEffect } from 'react';
import Button from '../UI/Button/Button';

import styles from './PopUpColor.module.css';

const colors = [
    '#00ffff',
    '#E30B5C',
    '#7DF9FF',
    '#00aaff'
];

const randomColor = () => {
    return Math.floor(Math.random() * colors.length);
}

const buttonReducer = (state, action) => {
    if(action.type === 'RESET'){
        return {
           color: colors[randomColor()],
           colorLevel: action.value,
           isClicked: true
        }
    }

    if(action.type === 'POP-UP'){
        return {
            ...state,
            colorLevel: state.colorLevel + action.value,
            isClicked: true
        }
    }

    if(action.type === 'CLICK-RESET'){
        return {
            ...state,
            isClicked: false
        }
    }
}

const initialState = {
    color: colors[0],
    colorLevel: 0,
    isClicked: false
};

const PopUpColor = () => {
    const [buttonState, buttonDispatch] = useReducer(buttonReducer, initialState);

    const { isClicked } = buttonState;

    useEffect(() => {
        const timer = setTimeout(() => {
            buttonDispatch({type: 'CLICK-RESET'});
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [isClicked])

    const colorLevelHandler = () => {
        if(buttonState.colorLevel === 100){
            buttonDispatch({value: 0, type: 'RESET'});
        }else{
            buttonDispatch({value: 25, type: 'POP-UP'});
        }
    }

    return(
        <div className={styles['pop-up']} style={{backgroundColor: `${buttonState.color}`,height: `${buttonState.colorLevel}vh`}}>
            <Button type="button" onColorLevelHandler={colorLevelHandler} className={buttonState.isClicked ? 'clicked' : null}>Click me</Button> 
        </div>
    )
}

export default PopUpColor