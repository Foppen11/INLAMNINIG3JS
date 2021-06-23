import React from 'react'

const OrderCard = ({order}) => {

//   const dispatch = useDispatch();
    const list = order.list

  return (
    <div className="mb-5">
      <h1> {order._id} </h1>
      {
          list && list.map(product => (
            <div>
                <h1> {product.product.name} </h1>
                <h1> {product.quantity} </h1>
                <h1> {product.product.price} </h1>
            </div>
          ))
      }
      <h1> {order.price} </h1>
      {order.email}
    </div>
  )
}


export default OrderCard
