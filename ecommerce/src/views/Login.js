import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/account/LoginForm'
import Register from '../components/account/Register';

const Login = () => {

  const history = useHistory();

  const [login, setLogin] = useState(true);

  const online = useSelector(state => state.auth.online);

  useEffect(() => {
    if(online) {
      try {history.push(history.location.state.from.pathname)}
      catch {history.push('/')}
    }
  }, [online, history])

  return (
    <div className="wrapper d-flex align-items-center justify-content-center">
      { login
        ? <LoginForm setLogin={setLogin} />
        : <Register setLogin={setLogin} />
      }
      
    </div>
  )
}

export default Login
