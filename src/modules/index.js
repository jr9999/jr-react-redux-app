import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import orders from './orders'

export default combineReducers({
  router: routerReducer,
  counter,
  orders
})