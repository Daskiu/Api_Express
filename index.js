const express = require('express')
const app = express()

const studentsRouter = require('./routers/students')
const teachersRouter = require('./routers/teachers')
const classesRouter = require('./routers/classes')

app.use('/students', studentsRouter)
app.use('/teachers', teachersRouter)
app.use('/classes', classesRouter)

app.listen(3000, ()=>{
    console.log("Runing on port 3000")
})