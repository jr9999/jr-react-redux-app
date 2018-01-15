import { combineReducers } from 'redux';

// Import the individual reducers from their respective modules:
import ShowFilters from './ShowFilters';
import Locations from './Locations';

// Using the ES6 object literal shorthand assignment combine them
// to create the store:
export default combineReducers({
    ShowFilters,
    Locations
});

// REMEMBER OUR STORE WILL EVENTUALLY LOOK LIKE THE FOLLOWING

// {
//   showFilters: true,
//   locations: [
//     { name: "Bryant Park" },
//     { name: "42nd St"},
//     etc...
//   ]
// }