import axios from 'axios';
import actiontypes from '../actiontypes';

export const getUsers = () => {
  return dispatch => {
    dispatch(loading())
    axios.get('http://localhost:9999/api/users')
    .then(res => {
      dispatch(success(res.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}

export const loading = () => {
  return {
    type: actiontypes().users.loading
  }
}

export const success = (users) => {
  return {
    type: actiontypes().users.success,
    payload: users
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().users.failure,
    payload: error
  }
}