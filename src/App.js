import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import MainComponent from './MainComponent.js'

const userProps = {
  firstName: "Jeremy",
  lastName: "Regan"
};

class App extends Component {

  render() {
    return (
        <div>
          <BrowserRouter>
            <MainComponent userData={userProps}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
