import actiontypes from "../actiontypes";

const initState = null

const orderCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().orderCatalog.set:
      state = action.payload
      return state

    default:
      return state
  }
}

export default orderCatalogReducer;