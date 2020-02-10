const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')

const {
    tokenVerify
} = require('../controllers/verify')

const {
    createUser,
    readUser,
    updateUser,
    deleteUser
} = require('../controllers/auth')

router.post('/', createUser)
router.delete('/', tokenVerify, deleteUser)
router.put('/', tokenVerify, updateUser)
router.get('/', tokenVerify, readUser);

module.exports = router