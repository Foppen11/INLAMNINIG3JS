import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';


const initState = {
  userId: null,
  userToken: null,
  userEmail: null,
  loading: false,
  error: undefined,
  admin: false,
  online: false
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().auth.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.success:
      state.online = true
      return {
        ...state,
        userId: jwt.decode(action.payload.token).id,
        userToken: action.payload.token,
        userEmail: action.payload.email,
        admin: action.payload.admin,
        loading: false,
        error: undefined,
      }

    case actiontypes().auth.failure:
      state.online = false
      return {
        ...state,
        loading: false,
        online: false,
        error: action.payload
      }

    case actiontypes().auth.logout:
      state.online = false
      localStorage.removeItem('token')
      return {
        ...initState
      }

    default:
      return state
  }
}

export default authReducer;