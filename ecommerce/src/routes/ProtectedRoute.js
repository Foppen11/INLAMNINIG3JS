import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({component: Component, ...rest}) => {

  const user = useSelector(state => state.auth.userToken);

  return (
    <Route {...rest} render={ props => {
      if(user) {
        return <Component {...props} />
      }
      return <Redirect to={{ pathname: '/restricted', state:{ from: props.location } }} />
    }} />
  )
}
