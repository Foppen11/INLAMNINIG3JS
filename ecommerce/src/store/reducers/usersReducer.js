import actiontypes from '../actiontypes';

const initState = {
  list: [],
  loading: false,
  error: undefined
}

const usersReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().users.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().users.success:
      return {
        ...state,
        loading: false,
        list: action.payload
      }

    case actiontypes().users.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default usersReducer;