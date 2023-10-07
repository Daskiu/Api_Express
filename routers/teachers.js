const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("Teachers")
    res.send("Teachers ready")
})

router.get('/:id', (req, res) => {
    console.log("Teachers id")
    res.send("This is the teacher id " + req.params.id)
})

module.exports = router;