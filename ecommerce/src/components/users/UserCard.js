import React from 'react'

const UserCard = ({user}) => {

  return (
    <div className="mb-5">
      {user.email}
    </div>
  )
}


export default UserCard
