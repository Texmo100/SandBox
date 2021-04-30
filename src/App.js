import React, { Component } from 'react'
import TodoItem from './Components/TodoItem'
import todoList from './todosData'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: todoList
    }
    this.handleChange = this.handleChange.bind(this)

  }
  
  handleChange = (id) => {
    this.setState( prevState => {
      const newTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

      return{
        todos: newTodos
      }

    })
  }

  render() {
    const todoRender = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        {todoRender}
      </div>
    );
  }
}

export default App;
