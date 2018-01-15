import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Menu';
import Comment from './Comment';
import Main from './Main';
import Header from './Header';

export default class MainComponent extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
    
        const element = (
            <div  style={{display: 'flex', flexDirection: 'row'}}>
                <Header />
                <Main userData={this.props.userData}/>
            </div>
        );

        return element;
    }
  }
