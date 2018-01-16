import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//for more info see https://www.npmjs.com/package/react-table
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import NewOrderForm from './NewOrderForm'

import {
  insertOrder,
  listOrders,
  updateOrder,
  deleteOrder
} from '../../modules/orders'

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Id',
  accessor: 'id',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  Header: 'Price',
  accessor: 'price',
  Cell: props => <span className='[price]'>{props.value}</span> // Custom cell components!
}]


//can't use the const way and override lifecycle methods like componentDidMount..
//const Orders = props => (
class Orders extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return this.props.isReady
      ? <div style={{padding: 20, width: 500}}>
          <div>Orders</div>
      
          <div><ReactTable
                data={this.props.ordersList}
                columns={columns}
                defaultPageSize={5}
                />
          </div>
          <p>
            <button onClick={this.props.insert} disabled={this.props.isInserting}>Insert Order</button>
          </p>
      
          <div className="Orders-body">
              <span>The Orders Page Body</span>
              <h1>New Order Form:</h1>
                <NewOrderForm 
                  onSave={this.insertOrder}
                  onChange={this.updateOrder}
                />
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
