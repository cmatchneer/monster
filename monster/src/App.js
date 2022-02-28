import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <div key={monster.id}>
            {console.log(monster)}
            <h1> {monster.name}</h1>
            <h2> {monster.type} </h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
