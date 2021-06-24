import React from 'react'

const OrderCard = ({order}) => {

    const list = order.list
    

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h4> Order number: {order._id} </h4>
        <h4> Order placed by: <span className="">{order.email}</span> </h4>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          {
            list && list.map(product => (
              <div className="d-flex p-2 justify-content-between mb-2">
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
                ? <button className="btn btn-info btn-block">SEND</button>
                : <button className="btn btn-danger btn-block">CALL BACK</button>
              }

            </div>
          </div>
        </blockquote>
      </div>
    </div>
  )
}


export default OrderCard
