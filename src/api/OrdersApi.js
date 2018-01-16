

class OrdersApi {
    static listOrders() {
      return fetch('http://localhost:5000/api/v1/cats').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static updateOrder(order) {
      const request = new Request(`http://localhost:5000/api/v1/cats/${order.id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({order: order})
      });
  
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static createOrder(order) {
      const request = new Request('http://localhost:5000/api/v1/cats/', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({order: order})
      });
  
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  
    static deleteOrder(order) {
      const request = new Request(`http://localhost:5000/api/v1/cats/${order.id}`, {
        method: 'DELETE'
      });
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
  }
  
  export default OrdersApi;
  