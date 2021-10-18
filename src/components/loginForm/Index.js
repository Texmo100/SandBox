import React from 'react'
import './loginForm.css'

const Index = () => {
    return (
        <div className='login-form'>
            <h1>Login</h1>
            <form className='form'>
                {/* label and input */}
                <label className='form__label'>User name</label>
                <input
                    className='form__input form__input--placeholder'
                    type='text'
                    // name
                    // value
                    placeholder='user name'
                    // onChange
                />
                {/* label and input */}
                <label className='form__label'>Password</label>
                <input
                    className='form__input form__input--placeholder'
                    type='text'
                    // name
                    // value
                    placeholder='password'
                    // onChange
                />
                {/* submit */}
                <input type='submit' value='submit' className='form__submit form__submit--hover'/>
            </form>
        </div>
    )
}

export default Index