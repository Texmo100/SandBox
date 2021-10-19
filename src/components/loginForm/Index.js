import React, { useState } from 'react'
import './loginForm.css'

const Index = () => {
    // useState Variables
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // input handler function
    const inputHandler = event => {
        const { value, name } = event.target

        if(name === 'userName'){
            setUserName(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }

    // submit handler function
    const submitHandler = event => {
        event.preventDefault()
        const userData = {
            id: Math.random().toString(),
            userName: userName,
            password: password
        }

        console.log(userData)
        inputCleaner()
    }

    // input cleaner function
    const inputCleaner = () => {
        setUserName('')
        setPassword('')
    }

    return (
        <div className='login-form'>
            <h1>Login</h1>
            <form className='form' onSubmit={submitHandler}>
                {/* label and input */}
                <label className='form__label'>User name</label>
                <input
                    className='form__input form__input--placeholder'
                    type='text'
                    name='userName'
                    value={userName}
                    placeholder='user name'
                    onChange={inputHandler}
                />
                {/* label and input */}
                <label className='form__label'>Password</label>
                <input
                    className='form__input form__input--placeholder'
                    type='password'
                    name='password'
                    value={password}
                    placeholder='password'
                    onChange={inputHandler}
                />
                {/* submit */}
                <input type='submit' value='submit' className='form__submit form__submit--hover'/>
            </form>
        </div>
    )
}

export default Index