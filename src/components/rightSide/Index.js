import React from 'react'
import LoginForm from '../LoginForm/Index'
import styles from './rightSide.module.css'

const Index = () => {
    return(
        <div className={styles['right-side']}>
            <LoginForm />
        </div>
    )
}

export default Index