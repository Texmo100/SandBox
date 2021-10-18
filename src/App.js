import React from 'react'
import Wrapper from './components/Wrapper'
import LeftSide from './components/leftSide/Index'
import RightSide from './components/rightSide/Index'
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