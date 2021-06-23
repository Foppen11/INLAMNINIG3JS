import { combineReducers } from 'redux';
import productCatalogReducer from './productCatalogReducer'
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderCatalog from './orderCatalogReducer';
import order from './orderReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  productCatalog: productCatalogReducer,
  product: productReducer,
  cartReducer,
  orderCatalog,
  order,
  user: userReducer,
  auth: authReducer,
  users: usersReducer
})