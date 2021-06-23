import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = (props) => {

  let history = useHistory()
  console.log(history)
  setTimeout(() => {
    props.history.replace('/')
    // history.push('/')
  },2000)

  return (
    <div>
      <h1>404 not found</h1>
      <p>Redirecting to homepage</p>
    </div>
  )
}

export default NotFound
