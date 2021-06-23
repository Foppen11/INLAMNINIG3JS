import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';


const LoginForm = ({setLogin}) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSub = (e) => {
    e.preventDefault();

    dispatch(login({email, password}))
  }

  return (
    <div className="card">
      <div className="card-header text-center">
        <h1>LOGIN</h1>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSub}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <p>Not a member? <span className="text-primary click"  onClick={() => setLogin(false)} >register</span></p>
          <button className="btn btn-primary btn-block">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
