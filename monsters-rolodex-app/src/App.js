import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [
        {
          name : 'Linda',
          id : '123ab'
        },
        {
          name : 'Frank',
          id : '123cd'
        },
        {
          name : 'Jacky',
          id : '123ef'
        },
        {
          name : 'Andrei',
          id : '123gh'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
       {
        this.state.monsters.map((monster) => {
          return <h1 key = {monster.id}>{monster.name}</h1>
        })
       }
      </div>
    );
  }
}

export default App;
