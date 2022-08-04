const express = require('express')
const indexRouter = require('./routes/index')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Server running')
})