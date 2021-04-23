import React, {Component} from 'react'
import Card from './Components/Card'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Card name={'Toriis path'}/>
      </div>
    );
  }
}

export default App;
