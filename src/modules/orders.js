export const INSERT_REQUESTED = 'orders/INSERT_REQUESTED'
export const INSERT = 'orders/INSERT'
export const LIST_REQUESTED = 'orders/LIST_REQUESTED'
export const LIST = 'orders/LIST'
export const UPDATE_REQUESTED = 'orders/UPDATE_REQUESTED'
export const UPDATE = 'orders/UPDATE'
export const DELETE_REQUESTED = 'orders/DELETE_REQUESTED'
export const DELETE = 'orders/DELETE'

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
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INSERT_REQUESTED:
      return {
        ...state,
        isInserting: true
      }

    case INSERT:
      return {
        ...state,
        isInserting: !state.isInserting
      }

      case LIST_REQUESTED:
      return {
        ...state,
        isReady: !state.isReady
      }

    case LIST:
      return {
        ...state,
        isReady: true
      }

      case UPDATE_REQUESTED:
      return {
        ...state,
        isInserting: true
      }

    case UPDATE:
      return {
        ...state,
        isInserting: !state.isInserting
      }

      case DELETE_REQUESTED:
      return {
        ...state,
        isInserting: true
      }

    case DELETE:
      return {
        ...state,
        isInserting: !state.isInserting
      }

    default:
      return state
  }
}

export const insertOrder = () => {
  return dispatch => {
    dispatch({
      type: INSERT_REQUESTED
    })

    dispatch({
      type: INSERT
    })
  }
}

export const listOrders = () => {
  return dispatch => {
    dispatch({
      type: LIST_REQUESTED
    })

    dispatch({
      type: LIST
    })
  }
}

export const updateOrder = () => {
  return dispatch => {
    dispatch({
      type: UPDATE_REQUESTED
    })

    dispatch({
      type: UPDATE
    })
  }
}

export const deleteOrder = () => {
  return dispatch => {
    dispatch({
      type: DELETE_REQUESTED
    })

    dispatch({
      type: DELETE
    })
  }
}
