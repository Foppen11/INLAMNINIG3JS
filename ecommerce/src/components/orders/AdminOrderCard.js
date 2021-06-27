import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { update } from '../../store/actions/orderActions';

const OrderCard = ({order}) => {

  let history = useHistory()
  const dispatch = useDispatch();
  const list = order.list

  const updateOrder = () => {
    dispatch(update(order._id, order))
    history.push('/order')
  }
    

  return (
    <div className={`card mb-5 ${order.completed ? "bg-completed" : ""}`}>
      <div className="card-header d-flex justify-content-between">
        <h4> Order number: {order._id} </h4>
        <h4> Order placed by: <span className="">{order.email}</span> </h4>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          {
            list && list.map(product => (
              <div key={product._id} className="d-flex p-2 justify-content-between mb-2">
                  <h2 className="min-width"> {product.name} </h2>
                  <h3> amount: {product.quantity} </h3>
                  <h2 className="min-width"> price each: {product.price}SEK </h2>
              </div>
            ))
          }
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mt-2"> Total price: {order.price} SEK </h1>
            <div>
              {
                order.completed
                ? <h4> Order status: Completed </h4>
                : <h4> Order status: Unfinished </h4>
              }
              {
                !order.completed
                ? <button className="btn btn-info btn-block" onClick={updateOrder}>SEND</button>
                : <button className="btn btn-danger btn-block" onClick={updateOrder}>CALL BACK</button>
              }

            </div>
          </div>
        </blockquote>
      </div>
    </div>
  )
}


export default OrderCard
