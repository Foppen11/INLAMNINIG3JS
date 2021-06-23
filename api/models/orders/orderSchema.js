const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({

  email:          { type: String, required: true },
  list:           { type: Array, required: true },
  price:          { type: Number, required: true },
  completed:      { type: Boolean, default: false},

  created:        { type: Date, default: Date.now },
  modified:       { type: Date, default: Date.now }

})

module.exports = mongodb.model('Order', orderSchema);