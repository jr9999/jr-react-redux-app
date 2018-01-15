import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Menu';
import Comment from './Comment';
import Main from './Main';
import Header from './Header';
 
//menu-related
import { render } from 'react-dom';

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

export default class MainComponent extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
    
        const element = (
            <div  style={{display: 'flex', flexDirection: 'row'}}>
                <Header />
                <Main />
            </div>
        );

        return element;
    }
  }
