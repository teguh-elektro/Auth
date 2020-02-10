const express = require('express')
const router = express.Router()

const login = require('./login')
const auth = require('./auth')
const data = require('./data')

const {
    tokenVerify
} = require('../controllers/verify')

router.use('/auth', auth)
router.use('/login', login)
router.use('/data', tokenVerify, data)
router.get('/', (req, res) => {
    res.send('Hello World')
});

module.exports = router