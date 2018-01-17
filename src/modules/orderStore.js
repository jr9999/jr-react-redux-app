import * as actionTypes from '../actions/orderActionTypes';
import ordersApi from '../api/OrdersApi';

const initialState = {
  count: 0,
  isInserting: false,
  isReady: false,
  ordersList: [
    {
      name: "order 1",
      type: "type 1",
      price: "1$",
      id: 1
    },
    {
      name: "order 2",
      type: "type 2",
      price: "2$",
      id: 2
    }
  ],
  newOrder: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INSERT_REQUESTED:
      console.log('insert requested...');
      return {
        ...state,
        isInserting: true
      }

    case actionTypes.INSERT:
    console.log('insert has been performed...');
      return {
        ...state,
        isInserting: !state.isInserting
      }

    case actionTypes.INSERT_FAILED:
      console.log('insert failed...');
        return {
          ...state,
          isInserting: !state.isInserting
        }

    case actionTypes.LIST_REQUESTED:
      return {
        ...state,
        isReady: !state.isReady
      }

    case actionTypes.LIST:
      return {
        ...state,
        isReady: true
      }

    case actionTypes.UPDATE_REQUESTED:
      return {
        ...state,
        isInserting: true
      }

    case actionTypes.UPDATE:
      return {
        ...state,
        isInserting: !state.isInserting
      }

    case actionTypes.DELETE_REQUESTED:
      return {
        ...state,
        isInserting: true
      }

    case actionTypes.DELETE:
      return {
        ...state,
        isInserting: !state.isInserting
      }

    default:
      return state
  }
}

/*old way.. see thunk way below
export const insertOrder = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.INSERT_REQUESTED
    })

    dispatch({
      type: actionTypes.INSERT
    })
  }
}*/

export function insertOrder(newOrder) {
  var didSucceed = true;
  return function(dispatch) {
    return dispatch({
      type: actionTypes.INSERT_REQUESTED
      }).then(ordersApi.createOrder(newOrder)
        .catch(
          error => {
            console.log('caught an error inserting a new order...')
            //throw(error);
            didSucceed = false;
            dispatch({
              type: actionTypes.INSERT_FAILED
              });
          }
        )
        .then( () => {
          if(didSucceed) {
            dispatch({
              type: actionTypes.INSERT
            })
          }
      }));
  }
}

/* old way... see thunk way below
export const listOrders = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LIST_REQUESTED
    })

    dispatch({
      type: actionTypes.LIST
    })
  }
}
*/

export function listOrders() {

  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ordersApi.listOrders().then(orders => {
      //note multiple dispatches.. first indicates list has been requested to indicate to state, 
      //then once it is done then it dispatches the list command.
      dispatch({
        type: actionTypes.LIST_REQUESTED
      });
      dispatch({
        type: actionTypes.LIST
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export const updateOrder = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.UPDATE_REQUESTED
    })

    dispatch({
      type: actionTypes.UPDATE
    })
  }
}

export const deleteOrder = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.DELETE_REQUESTED
    })

    dispatch({
      type: actionTypes.DELETE
    })
  }
}
