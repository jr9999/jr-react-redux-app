import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import Menu from './Menu';
import Comment from './Comment';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
 
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
 

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
                    <span className="App-title">React test app</span>
                </header>
                <Menu />
                <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
                    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
                        <Nav id='dashboard'>
                            <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                            <NavText> Dashboard </NavText>
                        </Nav>
                        <Nav id='sales'>
                            <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                            <NavText> Sales </NavText>
                        </Nav>
                    </SideNav>
                </div>
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
