import React, { useState, useContext } from 'react';
import Form from '../Form/Form';
import UserContext from '../../../store/user-context';
import styles from './LoginForm.module.css';

const LoginForm = props => {
    // useState Variables
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isValidUser, setIsValidUser] = useState(true)
    const [isValidPass, setIsValidPass] = useState(true)
    const [inputValid, setInputValid] = useState(true);

    const userCtx = useContext(UserContext);

    const inputHandler = event => {
        const { value, name } = event.target

        if(userName.trim().length > 0){
            setIsValidUser(true)
            setInputValid(true)
        }
        if(password.trim().length > 0){
            setIsValidPass(true)
            setInputValid(true)
        }

        if(name === 'userName'){
            setUserName(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }

    const submitHandler = event => {
        event.preventDefault();

        if(userName.trim().length === 0) setIsValidUser(false);

        if(password.trim().length === 0) setIsValidPass(false);

        if(userName.trim().length > 0 && password.trim().length > 0){
            const userData = {
                id: Math.random().toString(),
                userName: userName,
                password: password
            }

            if(fakeAuthApi(userData)){
                userCtx.registerUser(userData);
                props.onShowModal();
                inputCleaner();
            }else{
                console.log('FakeAuthApi returns false')
                setInputValid(false)
            }
        }
    }

    const inputCleaner = () => {
        setUserName('')
        setPassword('')
    }

    // fake user
    const fakeUser = {
        userName: 'Texmo100',
        password: 'alteryui'
    }

    const fakeAuthApi = user => {
        if(isUserName(user.userName) && isPassword(user.password)){
            return true;
        }
        return false;
    }

    const isUserName = userName => {
        if(fakeUser.userName === userName){
            return true;
        }
        return false;
    }

    const isPassword = password => {
        if(fakeUser.password === password){
            return true;
        }
        return false;
    }

    return (
        <div className={styles['login-form']}>
            <h1>Login</h1>
            <Form
                userName={userName}
                password={password}
                isValidUser={isValidUser}
                isValidPass={isValidPass}
                inputValid={inputValid}
                onInputHandler={inputHandler}
                onSubmitHandler={submitHandler}
            />
        </div>
    )
}

export default LoginForm