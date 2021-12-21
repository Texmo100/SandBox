import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import styles from './Form.module.css';

const Form = props => {
    return (
        <form className={styles.form} onSubmit={props.onSubmitHandler}>
            <Input
                isValidUser={props.isValidUser}
                label="User name"
                type="text"
                name="userName"
                value={props.userName}
                placeholder="user name"
                onInputHandler={props.onInputHandler}
            />

            <Input
                isValidUser={props.isValidUser}
                label="Password"
                type="password"
                name="password"
                value={props.password}
                placeholder="password"
                onInputHandler={props.onInputHandler}
            />

            <Button type="submit">
                Submit
            </Button>

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