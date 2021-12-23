import React from 'react';

const UserContext = React.createContext({
    id: 0,
    userName: '',
    password: '',
    registerUser: (user) => {},
    removeUser: (id) => {}
})

export default UserContext;