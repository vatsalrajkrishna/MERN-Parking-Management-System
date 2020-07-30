const express =require('express')

const router =express.Router()

//Import Controllers

const {login} = require('../controllers/auth')
router.post('/login' , login);


module.exports = router;
 