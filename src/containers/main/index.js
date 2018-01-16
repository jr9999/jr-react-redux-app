import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import Home from '../home';
import Orders from '../orders';
import Products from '../products';
import About from '../about'

export default class Main extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <main>
            <Switch>
                <Route exact path='/' render={(props) => (
                 <Home />
                )}/>
                <Route exact path='/orders' component={Orders}/>
                <Route path='/products' component={Products}/>
                <Route exact path="/about-us" component={About} />
            </Switch>
        </main>
      );
    }
  }
