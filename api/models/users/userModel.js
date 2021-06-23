const mongodb = require('mongoose');
const User = require('./userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authorization/auth');

exports.registerUser = (req, res) => {

    User.exists({ email: req.body.email }, (err, result) => {
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }

        if(result){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'An account with that email already exist'
            })
        }

        const salt = bcrypt.genSaltSync(10);

        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if(err){
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed when encryptning user password'
                })
            }

            const newUser = new User({
                firstName:      req.body.firstName,
                lastName:       req.body.lastName,
                email:          req.body.email,
                passwordHash:   hash
            })

            newUser.save()
            .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'User created'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to create user'
                })
            })
        });
    })
}

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(!user){
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'Incorrect email or password'
                })
            }

            bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {

                if(err){
                    return res.status(400).json({
                        statusCode: 400,
                        status: false,
                        message: 'You made a bad request'
                    })
                }

                if(result){
                    res.status(200).json({
                        statusCode: 200,
                        status: true,
                        message: 'Welcome, you are signed in',
                        token: auth.generateToken(user)
                    })
                }
                else{
                    res.status(401).json({
                        statusCode: 401,
                        status: false,
                        message: 'Incorrect email or password'
                    })
                }
            })
        })
}

exports.updateUser = (req, res) => {

    User.exists({ _id: req.params.id }, (err, result) => {
      if(err) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You made a bad request'
        })
      }

      if(result) {

        User.updateOne({ _id: req.params.id }, {
          ...req.body,
          modified: Date.now()
        })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'User updated successfully'
          })
        })
        .catch((err) => { 
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to update user',
            err
          })
        })
  
      } else {
        res.status(404).json({
          statusCode: 404,
          status: false,
          message: err || 'Oops, this user does not exist'
        })
      }
    })
  }

  exports.getUsers = (req, res) => {
    User.find({}, (err, data) => {
      if(err){
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message || 'Something went wrong when fetching the Users'
        })
      }
      res.status(200).json(data)
    })
  }

  exports.getOneUser = (req, res) => {

    User.exists({ _id: req.params.id }, (err, result) => {
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request'
            })
        }
        if(result){
            User.findById(req.params.id)
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
                message: 'User does not exist'
            })
        }
    })
}