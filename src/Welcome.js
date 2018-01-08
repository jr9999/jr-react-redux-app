import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import Menu from './Menu';
import Comment from './Comment';

const comment = {
    date: new Date(),
    text:
      'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl:
        'http://placekitten.com/g/64/64',
    },
  };
  
export default class Welcome extends React.Component {

    formatName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }

    render() {
    
        const element = (
            <div className="App">
                <header className="App-header">
                   /*<img src={logo} className="App-logo" alt="logo" />*/
                    <span className="App-title">React test app</span>
                </header>
                <Menu />
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
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
