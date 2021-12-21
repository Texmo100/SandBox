import React from 'react'
import Wrapper from './components/UI/Wrapper/Wrapper'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import './App.css'

const App = () => {
  return(
    <Wrapper className='wrapper'>
      <LeftSide />
      <RightSide />
    </Wrapper>
  )
}

export default App