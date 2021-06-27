import actiontypes from '../actiontypes';
import axios from 'axios';
// import { getUsers } from './usersActions';

export const getUser = id => {
  return dispatch => {
    dispatch(loading())
    axios.get(`http://localhost:9999/api/users/${id}`)
    .then(res => dispatch(success(res.data)))
    .catch(err => dispatch(failure(err.message)))
  }
}

export const loading = () => {
  return {
    type: actiontypes().user.loading
  }
}

export const success = (users) => {
  return {
    type: actiontypes().user.success,
    payload: users
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().user.failure,
    payload: error
  }
}