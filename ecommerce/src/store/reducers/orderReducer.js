import actiontypes from "../actiontypes";

const initState = {
  order: null,
  cart: [],
  email: null,
  price: null,
  completed: false,
  loading: false
}

const orderReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().order.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().order.set:
      return {
        ...state,
        order: action.payload
      }

    case actiontypes().order.add:
      return{
        ...state,
        cart: action.payload.cart,
        email: action.payload.email,
        price: action.payload.price
      }

    case actiontypes().order.clear:
      return {
        ...state,
        order: null,
        cart: [],
        email: null,
        price: null,
        completed: false
      }

    default:
      return state
  }
}

export default orderReducer;