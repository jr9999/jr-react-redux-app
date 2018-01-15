import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <header>
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </nav>
        </header>
      );
    }
  }