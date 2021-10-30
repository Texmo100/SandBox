import React, { Component } from "react"
import Wrapper from "./components/UI/Wrapper/Wrapper"
import Message from './components/Message/Message'
import ProjectList from "./components/ProjectList/ProjectList"

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Message />
        <ProjectList />
      </Wrapper>
    )
  }
}

export default App
