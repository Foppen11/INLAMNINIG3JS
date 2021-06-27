import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import NotFound from './views/NotFound';
import Orders from './views/Orders'
import OrdersEmail from './views/OrdersEmail'
import Login from './views/Login'
import Users from './views/Users';
import { checkUser } from './store/actions/authActions';
import { getUsers } from './store/actions/usersActions';
import CheckOut from './views/CheckOut';
import Thanks from './views/Thanks';
import Restricted from './views/Restricted';
import { AdminRoute } from './routes/AdminRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(checkUser())
    dispatch(getUsers())
  }, [dispatch])


  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/login" component={Login} />
          <AdminRoute exact path="/users" component={Users} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/restricted" component={Restricted} />
          <AdminRoute exact path="/order" component={Orders} />
          <ProtectedRoute exact path="/order/:email" component={OrdersEmail} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
