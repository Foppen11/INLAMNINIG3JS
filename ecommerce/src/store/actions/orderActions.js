import actiontypes from "../actiontypes";
import axios from 'axios';

const apiCall = (url, list, email, price, dispatch) => {
  axios.post(url, {list, email, price})
  .then(() => {
    dispatch(add(list, email, price))
  })
}

export const addOrder = ({shoppingCart, user, totalCartAmount}) => {
    return dispatch => {
        let list = shoppingCart
        let email = user
        let price = totalCartAmount
      dispatch(loading())
      apiCall('http://localhost:9999/api/order/new', list, email, price, dispatch)
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