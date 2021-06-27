const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');
const auth = require('../authorization/auth');

router.get('/', orderModel.getOrders);
router.get('/:email', orderModel.getAccountOrders);
router.patch('/update/:id', orderModel.updateOrder)


router.post('/new', orderModel.createOrder);

module.exports = router;