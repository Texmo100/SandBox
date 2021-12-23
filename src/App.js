import React, { useState } from 'react';
import LogginMessage from './components/LogginMessage.js/LogginMessage';
import Wrapper from './components/UI/Wrapper/Wrapper';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import UserProvider from './store/UserProvider';
import './App.css'

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const modalShowHandler = () => {
    setIsShown(true);
  }

  const modalHideHandler = () => {
    setIsShown(false);
  }

  return (
    <Wrapper className='wrapper'>
      <UserProvider>
        {
          isShown && <LogginMessage onClose={modalHideHandler} />
        }
        <LeftSide />
        <RightSide onShowModal={modalShowHandler}/>
      </UserProvider>
    </Wrapper>
  )
}

export default App;