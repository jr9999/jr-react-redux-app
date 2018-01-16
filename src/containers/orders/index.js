import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import OrdersList from './OrdersList'

import {
  insertOrder,
  listOrders,
  updateOrder,
  deleteOrder
} from '../../modules/orders'

class OrdersTableRow extends React.Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data) =>
    <tr>
      <td key={data.name}>{data.name}</td>
      <td key={data.id}>{data.id}</td>
      <td key={data.price}>{data.price}</td>
    </tr>
    );
    return (
      <span>{row}</span>
    );
  }
}

class OrdersTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <OrdersTableRow data={this.props.data} />
      </table>
    );
  }
}

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
          <div>Orders</div>
      
          <div><OrdersTable data={this.props.ordersList}/></div>
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
  isInserting: state.orders.isInserting,
  ordersList: state.orders.ordersList
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
