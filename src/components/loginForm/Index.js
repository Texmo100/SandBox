import React, { useState } from 'react'

import Form from '../Form/Index'
import styles from './loginForm.module.css'

const Index = () => {
    // useState Variables
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isValidUser, setIsValidUser] = useState(true)
    const [isValidPass, setIsValidPass] = useState(true)
    const [auth, setAuth] = useState(true)

    // input handler function
    const inputHandler = event => {
        const { value, name } = event.target

        if(userName.trim().length > 0){
            setIsValidUser(true)
            setAuth(true)
        }
        if(password.trim().length > 0){
            setIsValidPass(true)
            setAuth(true)
        }

        if(name === 'userName'){
            setUserName(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }

    // submit handler function
    const submitHandler = event => {
        event.preventDefault()
        if(userName.trim().length === 0){
            setIsValidUser(false)
        }
        if(password.trim().length === 0){
            setIsValidPass(false)
        }
        if((userName.trim().length > 0 )&& (password.trim().length > 0)){
            const userData = {
                id: Math.random().toString(),
                userName: userName,
                password: password
            }
            if(fakeAuthApi(userData) === true){
                console.log(userData)
                inputCleaner()
            }else{
                console.log('FakeAuthApi returns false')
                setAuth(false)
            }
        }
    }

    // input cleaner function
    const inputCleaner = () => {
        setUserName('')
        setPassword('')
    }

    // fake user
    const fakeUser = {
        userName: 'Texmo100',
        password: 'alteryui'
    }

    // fakeAuthApi function which is in charge to verify the userData
    const fakeAuthApi = user => {
        if((fakeAuthUserName(user.userName) === false) || (fakeAuthPassword(user.password) === false)){
            return false
        }else{
            return true
        }
    }

    // fakeAuthUserName function which is in charge to verify if userName is equal to fakeUser userName
    const fakeAuthUserName = userName => {
        if(userName !== fakeUser.userName){
            return false
        }else{
            return true
        }
    }

    // fakeAuthPassword function which is in charge to verify if password is equal to fakeUser password
    const fakeAuthPassword = password => {
        if(password !== fakeUser.password){
            return false
        }else{
            return true
        }
    }

    return (
        <div className={styles['login-form']}>
            <h1>Login</h1>
            <Form
                userName={userName}
                password={password}
                isValidUser={isValidUser}
                isValidPass={isValidPass}
                auth={auth}
                onInputHandler={inputHandler}
                onSubmitHandler={submitHandler}
            />
        </div>
    )
}

export default Index