import actiontypes from "../actiontypes";
import axios from 'axios';


export const addOrder = ({shoppingCart, user, totalCartAmount}) => {
    return dispatch => {
        let list = shoppingCart
        let email = user
        let price = totalCartAmount
      dispatch(loading())
      axios.post('http://localhost:9999/api/order/new', {list, email, price})
      .then(() => {
        dispatch(add(list, email, price))
      })
    }
  }

export const update = (id, order) => {
  return dispatch => {
    dispatch(loading())
    order.completed = !order.completed
    axios.patch(`http://localhost:9999/api/order/update/${id}`, order)
    dispatch(updateOrder(order))
    
  }
}


  export const loading = () => {
    return {
      type: actiontypes().auth.loading
    }
  }


  export const add = (list, email, price) => {
      return {
          type: actiontypes().order.add,
          payload: {list, email, price}
      }
  }

  export const updateOrder = (order) => {
    return {
      type: actiontypes().auth.update,
      payload: order
    }
  }