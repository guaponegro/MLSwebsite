import React, { Component } from 'react';
import MLS from "./Mls";
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      { name: "Steven", age: "28", belt: "black", id: 1},
      { name: "Kristaps", age: "20", belt: "green", id: 2},
      { name: "DJ", age: "30", belt: "blue", id: 3}
    ]
  }
  addNinja = (ninja) => {
    console.log(ninja);
  }
  render() {
    return (
      <div className="App">
        <h1>MLS App</h1>
        <p>Welcome!</p>
        <MLS ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
