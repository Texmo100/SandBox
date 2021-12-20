import React from 'react'
import styles from './Form.module.css'


const Form = props => {
    return (
        <form className={styles.form} onSubmit={props.onSubmitHandler}>
            {/* label and input */}
            <label className={`${styles['form__label']} ${!props.isValidUser && styles['invalid']}`}>
                User name {!props.isValidUser && '*'}
            </label>
            <input
                className={`${styles['form__input']} ${!props.isValidUser && styles['invalid']}`}
                type='text'
                name='userName'
                value={props.userName}
                placeholder='user name'
                onChange={props.onInputHandler}
            />
            {/* label and input */}
            <label className={`${styles['form__label']} ${!props.isValidPass && styles['invalid']}`}>
                Password {!props.isValidPass && '*'}
            </label>
            <input
                className={`${styles['form__input']} ${!props.isValidPass && styles['invalid']}`}
                type='password'
                name='password'
                value={props.password}
                placeholder='password'
                onChange={props.onInputHandler}
            />
            {/* submit */}
            <input type='submit' value='submit' className={styles['form__submit']} />
            {(!props.isValidUser || !props.isValidPass) && <p style={{ color: 'red', marginTop: '2rem' }}>
                - All the fields are required
            </p>}
            {!props.auth && <p style={{ color: 'red', marginTop: '2rem' }}>
                - Username or password is incorrect
            </p>}
        </form>
    )
}

export default Form