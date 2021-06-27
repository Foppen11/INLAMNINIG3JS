import { Link, NavLink, useHistory } from 'react-router-dom'; 
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const Navbar = () => {

  const dispatch = useDispatch();

  const totalQuantity = useSelector(state => state.cartReducer.totalCartQuantity)
  const userOnline = useSelector(state => state.auth.online)
  const adminOnline = useSelector(state => state.auth.admin)
  const userEmail = useSelector(state => state.auth.userEmail)
  let history = useHistory()


  const userLogout = () => {
    dispatch(logout())
    history.go(0)

  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i className="fas fa-gamepad"> GamersOnline</i></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" aria-current="page" to="/products">Products</NavLink>
            </li>
            {
              userOnline && !adminOnline
              ? <li className="nav-item"><NavLink exact className="nav-link" aria-current="page" to={`/order/${userEmail}`}>Orders</NavLink></li>
              : <p></p>
            }
            {
              adminOnline && userOnline
              ? <li className="nav-item"><NavLink exact className="nav-link" aria-current="page" to="/order">Orders</NavLink></li>
              : <p></p>
            }
            {
              adminOnline && userOnline
              ? <li className="nav-item"><NavLink exact className="nav-link" aria-current="page" to="/users">Users</NavLink></li>
              : <p></p>
            }
            
            {
              !userOnline
              ? <li className="nav-item"><NavLink exact className="nav-link" aria-current="page" to="/login">Login/register</NavLink></li>
              : <button type="button" onClick={userLogout} className="btn btn-danger btn-sm btn-logout" ><span className="glyphicon glyphicon-log-out"></span> Log out</button>
            }

            <li className="nav-item me-3 me-lg-0 dropdown">
              <span
                className="nav-link dropdown-toggle hidden-arrow"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart"></i>
                { totalQuantity > 0 && <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>}
              </span>
              <ul className="dropdown-menu dropdown-menu-lg-end shopping-cart" aria-labelledby="navbarDropdown">
                <ShoppingCart />
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
