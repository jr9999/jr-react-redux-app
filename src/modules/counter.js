import * as actionTypes from '../actions/counterActionTypes';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case actionTypes.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED
    })

    dispatch({
      type: actionTypes.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: actionTypes.INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED
    })

    dispatch({
      type: actionTypes.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: actionTypes.DECREMENT
      })
    }, 3000)
  }
}