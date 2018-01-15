// Define the action type as a constant.
// You'll see how this url style naming convention comes in handy
// later when we look at the redux logger and redux-devtools.

const TOGGLE = 'wework.com/showFilters/TOGGLE';

// The reducer that handles an initial state (default false),
// and then returns the updated state when the appropriate
// action (action type TOGGLE) is called:

export default function reducer(state = false, action = {}) {
    switch (action.type) {
      case TOGGLE:
        return !state;
      default:
        return state;
    }
  }
  
  
  // The action that dispatches TOGGLE to the reducer:
  
  export function toggle() {
    return {
      type: TOGGLE
    };
  }