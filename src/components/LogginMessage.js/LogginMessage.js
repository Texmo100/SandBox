import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import UserContext from '../../store/user-context';

const LogginMessage = props => {

    const userCtx = useContext(UserContext);

    return (
        <Modal onClick={props.onClose}>
            {`Welcome ${userCtx.userName}`}
        </Modal>
    );
}

export default LogginMessage;