import React, { Component } from 'react';

import './App.css';
import Welcome from './Welcome.js'

class App extends Component {

  render() {
    return (
        <div>
          <Welcome firstName="jeremy" lastName="regan"/>
        </div>
    );
  }
}

export default App;
