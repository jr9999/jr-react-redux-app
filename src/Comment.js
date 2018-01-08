import React, { Component } from 'react';
import './Comment.css';
import UserInfo from './UserInfo.js';

/*Example use: 

                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
*/

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
            <UserInfo user={this.props.author} />
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
