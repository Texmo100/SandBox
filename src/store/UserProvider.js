import React, { useReducer } from 'react';
import UserContext from './user-context';

const defaultUserState = {
    id: 0,
    userName: '',
    password: ''
};

const userReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return action.user;
        case 'REMOVE':
            return defaultUserState;
        default:
            throw new Error();
    }
}

const UserProvider = props => {
    const [userState, userDispatch] = useReducer(userReducer, defaultUserState);

    const addUser = user => {
        userDispatch({user: user, type: 'ADD'});
    }

    const removeUser = id => {
        userDispatch({id: id, type: 'REMOVE'});
    }

    const userCtx = {
        id: userState.id,
        userName: userState.userName,
        password: userState.password,
        registerUser: addUser,
        removeUser: removeUser
    };

    return(
        <UserContext.Provider value={userCtx}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;