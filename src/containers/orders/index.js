import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  insertOrder,
  listOrders,
  updateOrder,
  deleteOrder
} from '../../modules/orders'

//can't use the const way and override lifecycle methods like componentDidMount..
//const Orders = props => (
class Orders extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.listOrders();
  }

  render() {
    return this.props.isReady
      ? <div style={{padding: 20, width: 500}}>
          <div>
              Orders
          </div>
      
          <p>
            <button onClick={this.props.insert} disabled={this.props.isInserting}>Insert Order</button>
          </p>
      
          <div className="Orders-body">
              <span>The Orders Page Body</span>
          </div>
        </div>
      : <div>Loading...</div>
  }
}

const mapStateToProps = state => ({
  isReady: state.orders.isReady,
  isInserting: state.orders.isInserting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  insertOrder,
  listOrders,
  updateOrder,
  deleteOrder
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)
