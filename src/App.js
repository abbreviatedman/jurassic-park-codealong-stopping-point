import React from 'react';
import Headings from './components/Headings';
import species from './data/species'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dinos: [],
      numberOfDinos: 0,
      currentSpecies: species[0]
    }
  }

  render() {
    return (
      <div className="App">
        <Headings />
      </div>
    );
  }
}

export default App;
