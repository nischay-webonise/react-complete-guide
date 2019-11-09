import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';

class App extends Component {
  state = {
    animals: [
      {
        name: 'Nischay',
        age: '22'
      }
    ]
  }
  switchNameHandler = () => {
    this.setState({
      animals: [
        {
          name: 'Nissss',
          age: 23
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      animals: [
        {
          name: event.target.value,
          age: 23
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person />
        <Animal name={this.state.animals[0].name} age={this.state.animals[0].age} changed={this.nameChangeHandler} />
        <button onClick={this.switchNameHandler} >Switch</button>
      </div>
    );
  }
}

export default App;
