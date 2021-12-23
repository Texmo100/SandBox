import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './RightSide.module.css';

const RightSide = props => {
    return(
        <div className={styles['right-side']}>
            <LoginForm onShowModal={props.onShowModal}/>
        </div>
    )
}

export default RightSide