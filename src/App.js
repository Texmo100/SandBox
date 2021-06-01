import React, { Component } from "react"
import './App.css'

class App extends Component {
  render() {
    const mainBranchColor = "#cc3355"
    const projectColor = "#2cbdbb"
    return (
      <div className="wrapper">
        <p className="message">
          Hi this is the <span style={{color: mainBranchColor}}>main branch</span> of this <span style={{color: projectColor}}>SandBox</span> project. 
          Don't forget to move to another branch within this 
          repository which you can see the other coolest features that i've created
        </p>

        <p className="y-user">Texmo100</p>
      </div>
    )
  }
}

export default App
