const express = require('express')
const router = express.Router()

const {
    readData,
    createData,
    updateData,
    deleteData
} = require('../controllers/data')

router.get('/', readData)
router.post('/', createData)
router.put('/', updateData)
router.delete('/', deleteData)
router.get('/test', (req, res) => {
    res.send('Data')
});

module.exports = router