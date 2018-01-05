import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render() {
      return (
        <div className="Menu">
          <span className="Menu-option1">Option 1</span>
          <span className="Menu-option2">Option 2</span>
        </div>
      );
    }
  }