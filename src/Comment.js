import React, { Component } from 'react';
import './Comment.css';

export default class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    formatDate(date) {
        return date.toLocaleDateString();
      }
  
    render() {
      return (
        <div className="Comment">
            <div className="UserInfo">
            <img className="Avatar"
                src={this.props.author.avatarUrl}
                alt={this.props.author.name}
            />
            <div className="UserInfo-name">
                {this.props.author.name}
            </div>
            </div>
            <div className="Comment-text">
            {this.props.text}
            </div>
            <div className="Comment-date">
            {this.formatDate(this.props.date)}
            </div>
        </div>
      );
    }
  }
