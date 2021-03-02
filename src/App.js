import React, { Component } from 'react';
import './App.css';
import './UserIO/UserIO.css';
import { UserInput, UserOutput } from './UserIO/UserIO';

class App extends Component {

  baseNameFieldData = 'insert new name';
  state = {
    UserInput: {

    },
    UserOutput: [
      { id: 1, name: this.baseNameFieldData },
      { id: 2, name: this.baseNameFieldData }
    ]
  }

  nameChangeHander = (event) => {
    this.setState({
      UserOutput: [
        { id: 1, name: event.target.value },
        { id: 2, name: event.target.value }
      ]
    })
  }

  render() {

    const inputIOStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '81px',
      color: 'black',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>User IO manager</h1>
        <p>This is really working!</p>
        <button
          style={inputIOStyle}         >Just a random fat button</button>
        <UserInput
          changed={this.nameChangeHander}
          style={inputIOStyle}
        />
        <UserOutput
          id={this.state.UserOutput[0].id}
          name={this.state.UserOutput[0].name}
        />
        <UserOutput
          id={this.state.UserOutput[1].id}
          name={this.state.UserOutput[0].name}
        />
      </div>
    )
  }
}

export default App;