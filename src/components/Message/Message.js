import React from 'react'
import ItemContainer from '../UI/ItemContainer/ItemContainer'

import styles from './Message.module.css'


const Message = () => {
    return (
        <ItemContainer>
            <p className={styles['greetings']}>
                Hi, my name is <span>Texmo100</span> and this is my amazing <span>SandBox</span> repo. As you can imagine,
                this repository has a lot of features and mini projects which you can interact with.
            </p>
            <p className={styles['guide']}>- SandBox guide -</p>
            <p className={styles['guideline']}>
                You should select or move to another branch (on your terminal or IDE),
                thus you will be able to see coolest features and mini projects that I've created for this community.
            </p>
        </ItemContainer>
    )
}

export default Message