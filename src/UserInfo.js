import React, { Component } from 'react';
import './UserInfo.css';
import Avatar from './Avatar.js';

export default class UserInfo extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render() {
      return (
        <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          {this.props.user.name}
        </div>
      </div>
      );
    }
  }
