import React, {Component} from 'react'
import Card from './Components/Card'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Card name={'Toriis path 1'}/>
        <Card name={'Toriis path 2'}/>
        <Card name={'Toriis path 3'}/>
        <Card name={'Toriis path 4'}/>
      </div>
    );
  }
}

export default App;
