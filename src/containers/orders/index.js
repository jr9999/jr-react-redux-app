import React, { Component } from 'react';
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
} from '../../modules/orderStore'

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
          <div className="New-Orders-body">
              <h1>New Order Form:</h1>
                <NewOrderForm 
                  onSubmit={this.props.insertOrder} />
          </div>
        </div>
      : <div>Loading...</div>
  }
}

const mapStateToProps = state => ({
  isReady: state.orderStore.isReady,
  isInserting: state.orderStore.isInserting,
  ordersList: state.orderStore.ordersList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  listOrders,
  updateOrder,
  deleteOrder,
  insertOrder
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)
