import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import styles from './RightSide.module.css'

const RightSide = () => {
    return(
        <div className={styles['right-side']}>
            <LoginForm />
        </div>
    )
}

export default RightSide