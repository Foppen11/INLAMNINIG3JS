const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find({}, (err, data) => {
        if(err){
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message || 'Something went wrong when fetching the products'
            })
        }

        res.status(200).json(data)
    })
}

exports.getOneProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }
        if(result){
            Product.findById(req.params.id)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message
            }))
        }
        else{
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Product does not exist'
            })
        }
    })
}
