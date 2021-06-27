import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { update, deleteOneUser } from '../../store/actions/authActions'

const UserCard = ({user}) => {

  let history = useHistory()
  const dispatch = useDispatch();
  

  const updateUser = () => {
    dispatch(update(user._id, user))
    history.push('/users')
  }

  const deleteUser = () => {
    dispatch(deleteOneUser(user._id))
    history.push(0)
  }

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h4> User id: {user._id} </h4>
        <h4> User info:</h4>
      </div>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h3> Name: {user.firstName} </h3>
          <h3> Name: {user.lastName} </h3>
          <h4> Name: {user.email} </h4>
          {
            user.admin
            ? <h4>Role: Admin </h4>
            : <h4>Role: Member </h4>
          }
          
        </div>
        <div>
          {
            !user.admin
            ? <button className="btn-checkout btn-success btn-block text-center" onClick={updateUser}>Make admin</button>
            : <button className="btn-checkout btn-info btn-block text-center" onClick={updateUser}>Make member</button>
          }
          <button className="btn-checkout btn-danger btn-block text-center" onClick={deleteUser}>Delete</button>
        </div>
      </div>
    </div>
  )
}


export default UserCard
