const express = require('express')
const router = express.Router()

const {
    login
} = require('../controllers/auth')

router.post('/', login)
router.get('/test', (req, res) => {
    res.send('Data')
});

module.exports = router