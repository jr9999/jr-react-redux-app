import store from '../../configureStore'

import {
  insertOrder
} from '../../modules/orderStore'

export default (async function submitResults(values) {
  store.dispatch(insertOrder(values));
});
