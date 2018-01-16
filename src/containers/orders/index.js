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

const Orders = props => (
<div style={{padding: 20, width: 500}}>
    <div>
        Orders
    </div>

    <p>
      <button onClick={props.insert} disabled={props.isInserting}>Insert Order</button>
    </p>

    <div className="Orders-body">
        <span>The Orders Page Body</span>
    </div>
  </div>
)

const mapStateToProps = state => ({
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
