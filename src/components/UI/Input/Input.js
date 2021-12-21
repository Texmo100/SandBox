import React, { Fragment } from 'react';
import styles from './Input.module.css';

const Input = props => {
    return(
        <Fragment>
            <label className={`${styles['form__label']} ${!props.isValidUser && styles['invalid']}`}>
                {props.label} {!props.isValidUser && '*'}
            </label>
            <input
                className={`${styles['form__input']} ${!props.isValidUser && styles['invalid']}`}
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onInputHandler}
            />
        </Fragment>
    );
}

export default Input;