import actiontypes from "../actiontypes";
import axios from 'axios';

export const getOrdersCatalog = () => {
    return async dispatch => {
      const res = await axios.get('http://localhost:9999/api/order')
      dispatch(setOrders(res.data))
    }
}

export const setOrders = orders => {
    return {
      type: actiontypes().orderCatalog.set,
      payload: orders
    }
}

// email orders

export const getOrdersByEmail = email => {
    return async dispatch => {
      const res = await axios.get(`http://localhost:9999/api/order/${email}`)
      dispatch(setOneOrder(res.data))
    }
  }

  export const setOneOrder = order => {
    return {
      type: actiontypes().order.set,
      payload: order
    }
  }

  export const clearOrder = () => {
    return {type: actiontypes().order.clear}
  }