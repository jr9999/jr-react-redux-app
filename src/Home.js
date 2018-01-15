import React, { Component } from 'react';

import Clock from './Clock';

export default class Home extends React.Component {

    constructor(props) {
      super(props);
    }

    formatName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
  
    render() {
      return (
        <div style={{padding: 20, width: 500}}>
                <header className="App-header">
                    <span className="App-title">Main Dashboard</span>
                </header>
                <div className="App-body">
                    <span>Hello, {this.formatName(this.props.userData.firstName, this.props.userData.lastName)}</span>
                    <div><Clock/></div>
                </div>
            </div>
      );
    }
  }
