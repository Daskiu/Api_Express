const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("Students")
    res.send("Students ready")
})

router.get('/:id', (req, res) => {
    console.log("Students id")
    res.send("This is the student id " + req.params.id)
})

module.exports = router;