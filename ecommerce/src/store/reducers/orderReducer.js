import actiontypes from "../actiontypes";

const initState = {
  order: null,
}

const orderReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().order.set:
      return {
        ...state,
        order: action.payload
      }

    case actiontypes().order.clear:
      return {
        ...state,
        order: null
      }

    default:
      return state
  }
}

export default orderReducer;