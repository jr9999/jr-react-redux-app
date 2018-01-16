import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './configureStore'
import App from './containers/app'

import {listOrders} from './modules/orders';

//import 'sanitize.css/sanitize.css'
import './index.css'

//preload data if desired..
store.dispatch(listOrders());

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
