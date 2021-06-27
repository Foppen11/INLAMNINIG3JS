import axios from 'axios';
import jwt from 'jsonwebtoken';
import actiontypes from '../actiontypes';

const apiCall = (url, data, dispatch) => {
  axios.post(url, data)
  .then(res => {
    dispatch(checkAdmin(res.data.token))
  })
  .catch(err => {
    dispatch(failure(err.message))
  })
}


export const login = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:9999/api/users/login', user, dispatch)
  }
}

export const register = (user) => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:9999/api/users/register', user, dispatch)
  }
}

export const update = (id, user) => {
  return dispatch => {
    dispatch(loading())
    user.admin = !user.admin
    axios.patch(`http://localhost:9999/api/users/update/${id}`, user)
    dispatch(updateUser(user))
  }
}

export const deleteOneUser = (id) => {
  return dispatch => {
    dispatch(loading())
    axios.delete(`http://localhost:9999/api/users/delete/${id}`)
    dispatch(deleteUser())
  }
}

export const updateUser = (user) => {
  return {
    type: actiontypes().auth.update,
    payload: user
  }
}

export const deleteUser = () => {
  console.log()
  return{
    type: actiontypes().auth.deleteOne
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}

export const checkAdmin = token => {
  return dispatch => {
    localStorage.setItem('token', token)
    const id = jwt.decode(token).id;
    axios.get(`http://localhost:9999/api/users/${id}`)
    .then(res => {
      dispatch(success({token, admin: res.data.admin, email: res.data.email}))
    })
  }
}

export const loading = () => {
  return {
    type: actiontypes().auth.loading
  }
}

export const success = ({token, admin, email}) => {
  return {
    type: actiontypes().auth.success,
    payload: {token, admin, email}
  }
}

export const failure = error => {
  return {
    type: actiontypes().auth.failure,
    payload: error
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    if(token) {      
      if(jwt.decode(token).exp < Date.now()) {
        dispatch(checkAdmin(token))
      }
      else {
        localStorage.removeItem('token')
      }
    }
  }
}