import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import orderStore from './orderStore'

export default combineReducers({
  router: routerReducer,
  counter,
  orderStore
})