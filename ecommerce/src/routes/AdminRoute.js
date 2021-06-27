import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AdminRoute = ({component: Component, ...rest}) => {

  const user = useSelector(state => state.auth.userToken);
  const admin = useSelector(state => state.auth.admin);

  return (
    <Route {...rest} render={ props => {
      if(user && admin) {
        return <Component {...props} />
      }
      return <Redirect to={{ pathname: '/restricted', state:{ from: props.location } }} />
    }} />
  )
}
