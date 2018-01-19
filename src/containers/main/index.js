import React from 'react';
import { Route, Switch } from 'react-router'

import Home from '../home';
import Orders from '../orders';
import Products from '../products';
import About from '../about'

export default class Main extends React.Component {

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
