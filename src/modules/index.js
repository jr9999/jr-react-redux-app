import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import orderStore from './orderStore'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  counter,
  orderStore,
  form: reduxFormReducer // mounted under "form"
})