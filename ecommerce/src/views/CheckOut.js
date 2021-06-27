import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CheckOutCart from '../components/checkout/CheckOutCart';
import { clearCart } from '../store/actions/cartActions';
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/actions/orderActions';



const CheckOut = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
    const userOnline = useSelector(state => state.auth.online)
    const user = useSelector(state => state.auth.userEmail)
    const dispatch = useDispatch();
    const history = useHistory();

    

    const clear = e => {
        e.stopPropagation()
        dispatch(clearCart())
      }

    const add = (e) => {
        e.preventDefault()
        dispatch(addOrder({shoppingCart, user, totalCartAmount}))
        dispatch(clearCart())
        history.push('/thanks')
    }
  
    const empty = (
      <div className="p-2 d-flex justify-content-center align-items-center">
        Your cart is empty
      </div>
    )
    
    return (
        <div className="bg-light">
            {
            !shoppingCart.length && empty
            }
            {
                shoppingCart.map(product => (
                    <CheckOutCart product={product} key={product._id} />
                ))
            }
            {
                shoppingCart.length
                ? <h2 className="p-4">Total price: {totalCartAmount} SEK</h2>
                : <p></p>
            }
            <div className="d-flex">
                {
                    !userOnline
                    ? <Link className="btn-checkout btn-info btn-block text-center" to="/login" >Logg in to checkout</Link>
                    : <p></p>
                }
                {
                    shoppingCart.length < 1
                    ? <Link className="btn-checkout btn-info btn-block text-center" to="/products" >Add products to check out</Link>
                    : <p></p>
                }
                {
                    userOnline && shoppingCart.length
                    ? <button className="btn-checkout btn-info btn-block text-center" onClick={add}>Buy items in cart</button>
                    : <p></p>
                }
                {
                    shoppingCart.length > 0
                    ? <button className="btn-checkout btn-danger btn-block" onClick={clear}>Reset</button>
                    : <p></p>
                } 
            </div>


        </div>

    )
}

export default CheckOut