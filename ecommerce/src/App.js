import './App.css';
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users" component={Users} />

          <Route exact path="/order" component={Orders} />
          <Route exact path="/order/:email" component={OrdersEmail} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
