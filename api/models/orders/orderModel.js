const mongodb = require('mongoose');
const Order = require('./orderSchema');

exports.getOrders = (req, res) => {
  Order.find({}, (err, data) => {
    if(err){
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Something went wrong when fetching the orders'
      })
    }
    res.status(200).json(data)
  })
}

exports.getAccountOrders = (req, res) => {
    Order.find({email: req.params.email})
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Something went wrong with fetching the orders'
      }))
    }

exports.createOrder = (req, res) => {

      const newOrder = new Order({
  
        email: req.body.email,
        list:   req.body.list,
        price:  req.body.price
  
      })
  
      newOrder.save()
        .then(() => {
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Order created successfully'
          })
        })
        .catch(err => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create order',
            err
          })
        })
  }

exports.updateOrder = (req, res) => {

    Order.exists({ _id: req.params.id }, (err, result) => {
      if(err) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You made a bad request'
        })
      }

      if(result) {

        Order.updateOne({ _id: req.params.id }, {
          ...req.body,
          modified: Date.now()
        })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Order updated successfully'
          })
        })
        .catch((err) => { 
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to update order',
            err
          })
        })
  
      } else {
        res.status(404).json({
          statusCode: 404,
          status: false,
          message: err || 'Oops, this order does not exist'
        })
      }
    })
  }