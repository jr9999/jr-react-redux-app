import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import Home from './Home';
import Orders from './Orders';
import Products from './Products';

export default class Main extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <main>
            <Switch>
                <Route exact path='/' render={(props) => (
                 <Home {...props} userData={this.props.userData}/>
                )}/>
                <Route path='/orders' component={Orders}/>
                <Route path='/products' component={Products}/>
            </Switch>
        </main>
      );
    }
  }
