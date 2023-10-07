const express = require ('express')
const router = express.Router()

router.get ('/', (req, res) =>{
    console.log("Classes")
    res.send("Classes ready")
})

router.get('/:id', (req, res) =>{
    console.log("Class id")
    res.send("This is the class id" + req.params.id)
})

module.exports = router;