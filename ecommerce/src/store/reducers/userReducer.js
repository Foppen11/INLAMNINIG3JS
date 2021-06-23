import actiontypes from "../actiontypes";

const initState = null

const userCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().user.set:
      state = action.payload
      return state

    default:
      return state
  }
}

export default userCatalogReducer;