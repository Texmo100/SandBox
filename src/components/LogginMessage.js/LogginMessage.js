import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import UserContext from '../../store/user-context';
import styles from './LogginMessage.module.css';

const LogginMessage = props => {

    const userCtx = useContext(UserContext);

    return (
        <Modal onClick={props.onClose}>
            <div className={styles.message}>
                {`Welcome ${userCtx.userName}`}
                <button onClick={props.onClose} className={styles['message__button']}>Close modal</button>
            </div>
        </Modal>
    );
}

export default LogginMessage;