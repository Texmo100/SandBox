import React, { Component } from "react"
import TravelForm from './Components/TravelForm'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietaryRestrictions: {
        isVegan: false,
        isLactoseFree: false
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  //Handle change
  handleChange = (event) => {
    const { type, name, value, checked } = event.target

    if (type === "checkbox") {
      this.setState(prevState => {
        return {
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
        }
      })
    } else {
      this.setState({ [name]: value })
    }
  }

  //Handle submit
  handleSubmit = (event) => {
    alert("Info uploaded correctly")
  }

  render() {
    //Rendered words
    const fullName = `${this.state.firstName} ${this.state.lastName}`
    const ageRender = this.state.age === '' ? null : `${this.state.age} years old`
    const isVeganRender = this.state.dietaryRestrictions.isVegan ? "yes" : "no"
    const isLactoseFreRender = this.state.dietaryRestrictions.isLactoseFree ? "yes" : "no"

    return (
      <main className="wrapper">
        <TravelForm 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          age={this.state.age}
          gender={this.state.gender}
          destination={this.state.destination}
          dietaryRestrictions={this.state.dietaryRestrictions}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        
        {/* Info in real time */}
        <div className="info">
          <h2>Entered information:</h2>
          <p>Your name: {fullName}</p>
          <p>Your age: {ageRender}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Dietary Restrictions</p>
          <p>is Lactose Free: {isLactoseFreRender}</p>
          <p>is Vegan ?: {isVeganRender}</p>
        </div>

      </main>
    )
  }
}

export default App
