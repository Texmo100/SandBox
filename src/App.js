import React from 'react'
import Wrapper from './components/Wrapper'
import LeftSide from './components/LeftSide/Index'
import RightSide from './components/RightSide/Index'
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