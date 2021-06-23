import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, deleteProduct, removeFromCart } from '../../store/actions/cartActions'

const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation()
    dispatch(addToCart(product))
  }

  const sub = e => {
    e.stopPropagation()
    dispatch(removeFromCart(product))
  }

  const del = e => {
    e.stopPropagation()
    dispatch(deleteProduct(product._id))
  }

  return (
    <div>
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={product.image} alt="product" className="img-fluid image-width" />
          <div>
            <div><strong>{product.name}</strong></div>
            <div><small>{product.quantity} x {product.price}</small></div>
          </div>
        </div>

        <div className="buttons">
          <button className="btn btn-sm px-3" onClick={sub}>-</button>
          <button className="btn btn-sm px-3" onClick={add}>+</button>
          <button className="btn btn-sm btn-danger px-3 ms-2" onClick={del}><i className="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
