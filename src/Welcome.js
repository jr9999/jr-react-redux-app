import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import Menu from './Menu';

export default class Welcome extends React.Component {

    formatName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }

    render() {
    
        const element = (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-title">Welcome to React</span>
                </header>
                <Menu />
                <span className="App-intro">
                    <div>
                        <span>Hello, {this.formatName(this.props.firstName, this.props.lastName)}</span>
                        <div><Clock/></div>
                    </div>
                </span>
            </div>);
        return element;
    }
  }
